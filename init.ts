import * as data from "./weapons.json";
window.onload = () => {
    const weaponData = data.weapons;
    const weaponTable = document.getElementById("weapon_table");

    weaponData.forEach((weapon) => {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const desc = document.createElement("td");
        const baseCost = document.createElement("td");
        const baseDamage = document.createElement("td");
        const material = document.createElement("td");
        const blood = document.createElement("td");
        const lunges = document.createElement("td");
        const throwable = document.createElement("td");
        const pierces = document.createElement("td");
        const phases = document.createElement("td");
        const knockback = document.createElement("td");
        const reloads = document.createElement("td");
        row.append(name);
        row.append(desc);
        row.append(baseCost);
        row.append(baseDamage);
        row.append(material);
        row.append(blood);
        row.append(lunges);
        row.append(throwable);
        row.append(pierces);
        row.append(phases);
        row.append(knockback);
        row.append(reloads);
        name.innerHTML = weapon.name;
        desc.innerHTML = weapon.description;
        baseCost.innerHTML = weapon.basecost.toString();
        baseDamage.innerHTML = weapon.basedamage.toString();
        material.innerHTML = weapon.material;
        blood.innerHTML = weapon.blood.toString();
        lunges.innerHTML = weapon.lunges.toString();
        throwable.innerHTML = weapon.throwable.toString();
        pierces.innerHTML = weapon.pierces.toString();
        phases.innerHTML = weapon.phases.toString();
        knockback.innerHTML = weapon.knockback.toString();
        reloads.innerHTML = weapon.reloads.toString();
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