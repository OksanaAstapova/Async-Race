import { create_car } from "./create-default";
import { car_drive } from "./driving";
import { garage } from "./main";
import { brandsCars, modelsCars } from "./random-cars";
import { remove_car } from "./remove-car";
import { update_car } from "./update-car";

export const dataCars = async () => {
    const response = await fetch(`${garage}`);
    const data = (await response.json());
    return data;
};

export async function create_your_car(){

    const title: HTMLElement = document.querySelector('.garage__main_title h2');
    

    const cars_data = await dataCars();
    title.innerHTML = `Garage (${cars_data.length+1})`


    let input: HTMLInputElement = document.querySelector('#name-car');
    let color_bar: HTMLInputElement = document.querySelector('#color-car');
    let model: string;
    
    let i: number = Math.floor(Math.random()*brandsCars.length);
    let randomBrand: string = brandsCars[i];

    let k: number = Math.floor(Math.random()*modelsCars.length);
    let randomModel: string = modelsCars[k];

    let random_name: string = `${randomBrand} ${randomModel}`;
    
    if(input.value === ''){
        model = random_name;
    }
    else {model = input.value;}
    
    let color: string = color_bar.value;
    let id_stack: number[] = [];

    cars_data.forEach((car: { id: string | number; }) => {
        return id_stack.push(+car.id);
    })
    let max_id: number = Math.max.apply(null, id_stack);

    let id = max_id + 1;
    
    let body = {'id' : id,
                'name' : model,
                'color' : color};
    console.log(body)
   create_car(id, model, color);
   create_car_api(body);

    update_car();
    remove_car();
    car_drive();

    console.log(cars_data.length+1)
    const next_btn = document.querySelector('.next-page') as HTMLButtonElement;

    const page_inner = document.querySelector('.garage__main_pagination h2').innerHTML;
    const page = +page_inner

    if(cars_data.length+1 <= 7){
        next_btn.disabled = true;
        console.log(cars_data.length+1 <= 7)
    }
    else{if(cars_data.length+1 > page*7){next_btn.disabled = false}
    }
}

export const create_car_api = async (body: any) => (await fetch( garage, { 
    method : 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type' : 'application/json'
    } ,
})).json();
