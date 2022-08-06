import { create_car } from "./create-default";
import { brandsCars, modelsCars } from "./random-cars";
import { remove_car } from "./remove-car";
import { update_car } from "./update-car";
import { count_garage } from "./utils";

let i: number = Math.floor(Math.random()*brandsCars.length);
let randomBrand: string = brandsCars[i];

let k: number = Math.floor(Math.random()*modelsCars.length);
let randomModel: string = modelsCars[k];

export let random_name: string = `${randomBrand} ${randomModel}`;

export function generate_cars(){
    for (let car = 0; car < 100; car++) {
        const garage: HTMLElement = document.querySelector('.garage__main')

        let random_color: string = (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()

        let id = garage.childElementCount;
        
        create_car(id, random_name, random_color);

        count_garage();
    }
    remove_car();
    update_car();
        
}
