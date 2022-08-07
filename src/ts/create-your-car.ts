import { create_car, count_garage } from "./create-default";
import { garage } from "./main";
import { brandsCars, modelsCars } from "./random-cars";
import { remove_car } from "./remove-car";
import { update_car } from "./update-car";

export function create_your_car(){

    let input: HTMLInputElement = document.querySelector('#name-car');
    let color_bar: HTMLInputElement = document.querySelector('#color-car');
    let model: string;
    
    let i: number = Math.floor(Math.random()*brandsCars.length);
    let randomBrand: string = brandsCars[i];

    let k: number = Math.floor(Math.random()*modelsCars.length);
    let randomModel: string = modelsCars[k];

    let random_name: string = `${randomBrand} ${randomModel}`;
    
    if(input.value === ''){model = random_name;
        console.log(random_name)
    }
    else {model = input.value;}
    
    let color: string = color_bar.value;
    let id_stack: number[] = [];

    let cars = document.querySelectorAll('.car-wrapper');
    cars.forEach(car => {
        return id_stack.push(+car.id);
    })
    let max_id: number = Math.max.apply(null, id_stack);
    console.log(max_id)

    let id = max_id + 1;
    
    let body = {'id' : id,
                'name' : model,
                'color' : color};

   create_car(id, model, color);
   create_car_api(body);

    count_garage();
    update_car();
    remove_car();
}

export const create_car_api = async (body: any) => (await fetch( garage, { 
    method : 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type' : 'application/json'
    } ,
})).json();
