import { create_default } from "./create-default";
import { create_page } from "./create-page";
import { start_race } from "./driving";
import { get_winners } from "./winners";

export const base = 'http://localhost:3000';
export const garage = `${base}/garage`
export const winners = `${base}/winners`

document.addEventListener("DOMContentLoaded", () => {
    create_page();
    create_default();
    start_race();

    const garage_btn = document.querySelector('.button__garage') as HTMLButtonElement;
    const winners_btn = document.querySelector('.button__winners') as HTMLButtonElement;

    winners_btn.addEventListener('click', ()=>{
        document.querySelector('.garage').classList.remove('active');
        document.querySelector('.winners').classList.add('active');
        garage_btn.classList.remove('btn_active')
        winners_btn.classList.add('btn_active')
        get_winners(1);
        const cars = document.querySelectorAll('.car');

        cars.forEach(car =>{
            car.classList.remove('animated')
        })
    })

    garage_btn.addEventListener('click', ()=>{
        document.querySelector('.garage').classList.add('active');
        document.querySelector('.winners').classList.remove('active');
        garage_btn.classList.add('btn_active')
        winners_btn.classList.remove('btn_active')

    })

    
    
})
