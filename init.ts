import * as data from "./weapons.json";
window.onload = () => {
    const weaponData = data.weapons;
    console.log("e");
    const weaponTable = document.getElementById("weapon_table");

    weaponData.forEach((weapon) => {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const desc = document.createElement("td");
        row.append(name);
        row.append(desc);
        name.innerHTML = weapon.name;
        desc.innerHTML = weapon.description;
        row.className = "weapon_rows";

        weaponTable.append(row);
    })
}

interface weapons{
    description: string,
    name: string
}
const myList: weapons[] = [
    {
        name: "hei",
        description: "something"
    },
    
]