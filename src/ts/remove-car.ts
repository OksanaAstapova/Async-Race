import { dataCars } from "./create-your-car";
import { garage, winners } from "./main";
import { dataWinners } from "./winners";

export function remove_car(){

    let remove_buttons = document.querySelectorAll('.remove');

    remove_buttons.forEach(button =>{
        button.addEventListener('click',async ()=>{
            let car = button.parentElement.parentElement;
            car.remove();
            console.log(car.id)

            delete_car_api(car.id);

            const winners = await dataWinners();
            winners.forEach((winner: { id: number; }) =>{
                if(+car.id === winner.id){

                delete_winners_api(car.id);
                    
                }
            })

            
            const title: HTMLElement = document.querySelector('.garage__main_title h2');

            const cars_data = await dataCars();
            title.innerHTML = `Garage (${cars_data.length})`


            // const cars_per_page = +(page.innerHTML)*7;
            // console.log(cars_per_page)
            // const cars = document.querySelectorAll('.car-wrapper').length;
            // console.log(cars)
            // if(cars <= cars_per_page){next_btn.disabled = true}
            // else next_btn.disabled = false;

            // prev_btn.addEventListener('click', ()=>{
            //     const prev_page = +(page.innerHTML);
            //     console.log(page.innerHTML)
            //     page.innerHTML = `${prev_page}`;
            // })


        })
    })
}

const delete_car_api = async (id: any) => (await fetch(`${garage}/${id}`, { method : 'DELETE' })).json();
const delete_winners_api = async (id: any) => (await fetch(`${winners}/${id}`, { method : 'DELETE' })).json();
