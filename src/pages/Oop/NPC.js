import Weapon from "./Weapon.js";

export default class NPC{

    constructor()
    {
        this.weapons = [];
        this.weapons[0] = new Weapon(5,"bamboo");
    }

    pickWeapon(wpn)
    {
        this.weapons.push(wpn);
    }

    throwWeapon()
    {
        this.weapons.pop();
    }
}