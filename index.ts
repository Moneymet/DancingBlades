import "./init";

const weapon_search = document.getElementById("weapon_search");
function handleKeyUp(event:any){
    const searched_name = (event.target.value as string).toLowerCase(); //Gets the search string and converts it to lower case.
    const searched_name_matched = matchQuoted(searched_name); //Extracts words and strings with " around them from search.
    const weapon_rows = document.getElementsByClassName("weapon_rows"); // Gets the table for weapons.
    let searched_name_cleaned;
    if(searched_name_matched != null){ //If empty the array will not be cleaned for ""
        searched_name_cleaned = searched_name_matched.map((word) =>{ //Removes " from search strings.
            return cleanQuotes(word);
        })
    };
    for (let i = 0; i < weapon_rows.length; i++) { // Matches the search strings and the weapon table's strings.
        const weapon_html = weapon_rows[i].children[0].innerHTML; // The weapon name used in table is exctracted.
        const weapon_name = weapon_html.toLowerCase(); // Converts the weapon name to lower case.
        let weapon_found = true; 
        for(let j in searched_name_cleaned){ // Tries matching the search words with the weapon names.
            if(weapon_name.search(searched_name_cleaned[j])<=-1){ //Sets weapon_found to false if the search strings aren't found in weapon name.
                weapon_found = false;
            }
        }
        const weapon_search_result = weapon_name.search(searched_name); // 
        (weapon_rows[i] as HTMLInputElement).style.display = weapon_found ? "" : "none"; // If found weapon row stays visible.
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