import { change_pages, garage } from "./main";
import { count_garage } from "./create-default";

export function remove_car(){

    let remove_buttons = document.querySelectorAll('.remove');

    remove_buttons.forEach(button =>{
        button.addEventListener('click',()=>{
            let car = button.parentElement.parentElement;
            car.remove();
            count_garage()

            delete_car_api(car.id);
            // change_pages();

            let page = document.querySelector(".garage__main_pagination > h2");
            const next_btn = document.querySelector('.next-page') as HTMLButtonElement;
            const prev_btn = document.querySelector('.prev-page') as HTMLButtonElement;


            const cars_per_page = +(page.innerHTML)*7;
            console.log(cars_per_page)
            const cars = document.querySelectorAll('.car-wrapper').length;
            console.log(cars)
            if(cars <= cars_per_page){next_btn.disabled = true}
            else next_btn.disabled = false;

            prev_btn.addEventListener('click', ()=>{
                const prev_page = +(page.innerHTML);
                console.log(page.innerHTML)
                page.innerHTML = `${prev_page}`;
            })


        })
    })
}

const delete_car_api = async (id: any) => (await fetch(`${garage}/${id}`, { method : 'DELETE' })).json();