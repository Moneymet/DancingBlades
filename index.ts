import "./init";
console.log("logging");

const weapon_search = document.getElementById("weapon_search");
function handleKeyUp(event:any){
    const searched_name = (event.target.value as string).toLowerCase();
    const searched_name_splitted = searched_name.split(" ");
    const weapon_rows = document.getElementsByClassName("weapon_rows");
    for (let i = 0; i < weapon_rows.length; i++) {
        const weapon_html = weapon_rows[i].children[0].innerHTML;
        const weapon_name = weapon_html.toLowerCase();
        //const weapon_name_splitted = weapon_name.split(" ");
        let weapon_found = true;
        for(let j in searched_name_splitted){
            if(weapon_name.search(searched_name_splitted[j])<=-1){
                weapon_found = false;
            }
        }
        const weapon_search_result = weapon_name.search(searched_name);
        if(weapon_found){
            (weapon_rows[i] as HTMLInputElement).style.display = "";
        } else{
            (weapon_rows[i] as HTMLInputElement).style.display = "none";
        }
    }
    /*for (let item of weapon_rows) {
        const weapon_name = item.children[0].innerHTML;
        if(weapon_name.includes(searched_name)){
            item.style.display = "";
        } else{
            item.style.display = "none";
        }
    }*/
}
weapon_search.onkeyup = handleKeyUp;