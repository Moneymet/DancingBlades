import "./init";
console.log("logging");

const weapon_search = document.getElementById("weapon_search");
function handleKeyUp(event:any){
    const searched_name = event.target.value;
    const weapon_rows = document.getElementsByClassName("weapon_rows");
    for (let item of weapon_rows) {
        const weapon_name = item.children[0].innerHTML;
        if(weapon_name.includes(searched_name)){
            item.style.display = "";
        } else{
            item.style.display = "none";
        }
    }
}
weapon_search.onkeyup = handleKeyUp;