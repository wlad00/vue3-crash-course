<template>
  <div class="hello">
      <h1>OOP</h1>
    <!--<h1>{{msg}}</h1>-->
      <!--<p v-if="hand">-->
      <p >
          yo!
          {{ npc.weapons.length }}<br/>
      </p>
  </div>
</template>

<script>
    import Weapon from './Weapon.js' //don't forget to import them
    import NPC from './NPC.js'

    export default {
        name: 'myComponents',
        props: {
            msg: String
        },
        data(){ //remember, in a component, data must be a function!
            return{
                npc: null, //our npc object
                // hand: true
            }
        },
        mounted(){ //hook on mounted, we init the object. It could have been done before.
            this.npc = new NPC();

            this.npc.pickWeapon(new Weapon(7, "chakram"));
            console.log("New weapon acquired! GG");

            setTimeout(() => { //update of the weapons, we will throw a weapon in 2 sec, for testing reactivity since we print the array length!
                this.npc.throwWeapon();
                console.log("Weapon throws");
                this.npc.weapons[0].family = "reactivIsIt?"; //re-render once modified!
            }, 2000);
        }
    }
</script>




<style >

</style>
