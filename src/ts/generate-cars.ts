import { create_car, count_garage } from "./create-default";
import { create_car_api } from "./create-your-car";
import { change_pages } from "./main";
import { brandsCars, modelsCars } from "./random-cars";
import { remove_car } from "./remove-car";
import { update_car } from "./update-car";


export function generate_cars(){
    for (let car = 0; car < 100; car++) {

        let i: number = Math.floor(Math.random()*brandsCars.length);
        let randomBrand: string = brandsCars[i];

        let k: number = Math.floor(Math.random()*modelsCars.length);
        let randomModel: string = modelsCars[k];

        let random_name: string = `${randomBrand} ${randomModel}`;

        let random_color: string = (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()

        let id_stack: number[] = [];

        let cars = document.querySelectorAll('.car-wrapper');
        cars.forEach(car => {
            return id_stack.push(+car.id);
        })
        let max_id: number = Math.max.apply(null, id_stack);
        console.log(max_id)
    
        let id = max_id + 1;
                
        create_car(id, random_name, random_color);

        count_garage();

        
        let body = {'id' : id,
                'name' : random_name,
                'color' : random_color};

        create_car_api(body);
    }
    remove_car();
    update_car(); 
    change_pages();
}
