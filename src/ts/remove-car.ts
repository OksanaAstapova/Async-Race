import { garage } from "./main";
import { count_garage } from "./create-default";

export function remove_car(){

    let remove_buttons = document.querySelectorAll('.remove');

    remove_buttons.forEach(button =>{
        button.addEventListener('click',()=>{
            let car = button.parentElement.parentElement;
            car.remove();
            console.log(button.parentElement.parentElement);

            count_garage();
            delete_car_api(car.id);
        })
    })
}

const delete_car_api = async (id: any) => (await fetch(`${garage}/${id}`, { method : 'DELETE' })).json();