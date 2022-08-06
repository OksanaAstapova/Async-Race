import { create_car } from "./create-default";
import { random_name } from "./generate-cars";
import { garage } from "./main";
import { remove_car } from "./remove-car";
import { update_car } from "./update-car";
import { count_garage } from "./utils";

export function create_your_car(){

    const garage = document.querySelector('.garage__main');
    let input: HTMLInputElement = document.querySelector('#name-car');
    let color_bar: HTMLInputElement = document.querySelector('#color-car');
    let model: string;
    
    if(input.value === ''){model = random_name}
    else model = input.value;
    
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

const create_car_api = async (body: any) => (await fetch( garage, { 
    method : 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type' : 'application/json'
    } ,
})).json();
