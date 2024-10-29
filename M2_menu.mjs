import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const restaurant = {
    naam: "De Gouden Lepel",
    keuken: "Frans",
    menu: [],
  
    toevoegenAanMenu(gerechtNaam, gerechtPrijs) {
      const nieuwGerecht = {
        naam: gerechtNaam,
        prijs: gerechtPrijs,
      };
      this.menu.push(nieuwGerecht);
    },
  };
  
  restaurant.toevoegenAanMenu("Coq au vin", 19.95);
  restaurant.toevoegenAanMenu("Crème brûlée", 8.50);
  
  console.log(restaurant);
  

process.exit()