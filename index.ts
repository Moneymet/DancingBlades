import "./init";

const weapon_search = document.getElementById("weapon_search");
function handleKeyUp(event:any){
    const searched_name = (event.target.value as string).toLowerCase();
    const searched_name_matched = matchQuoted(searched_name); 
    const weapon_rows = document.getElementsByClassName("weapon_rows");
    let searched_name_cleaned;
    if(searched_name_matched != null){
        searched_name_cleaned = searched_name_matched.map((word) =>{ //Removes " from search strings.
            return cleanQuotes(word);
        })
    };
    for (let i = 0; i < weapon_rows.length; i++) {
        const weapon_html = weapon_rows[i].children[0].innerHTML;
        const weapon_name = weapon_html.toLowerCase();
        //const weapon_name_splitted = weapon_name.split(" ");
        let weapon_found = true;
        for(let j in searched_name_cleaned){
            if(weapon_name.search(searched_name_cleaned[j])<=-1){
                weapon_found = false;
            }
        }
        const weapon_search_result = weapon_name.search(searched_name);
        (weapon_rows[i] as HTMLInputElement).style.display = weapon_found ? "" : "none";
    }
}

//Matches Strings with " around them and words.
function matchQuoted(matchString:string):string[]{
    return matchString.match(/"[^"]*"|\w+/g);
}

//Removes " from search strings.
function cleanQuotes(inputString:string):string{
    return inputString.replace(/"/g, "");
}
weapon_search.onkeyup = handleKeyUp;