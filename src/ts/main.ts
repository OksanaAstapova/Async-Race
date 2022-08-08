import { create_default } from "./create-default";
import { create_page } from "./create-page";
import { start_race } from "./driving";

export const base = 'http://localhost:3000';
export const garage = `${base}/garage`
export const winners = `${base}/winners`


document.addEventListener("DOMContentLoaded", () => {
    create_page();
    create_default();
    start_race();

    const garage_btn = document.querySelector('.button__garage');
    const winners_btn = document.querySelector('.button__winners');

    winners_btn.addEventListener('click', ()=>{
        document.querySelector('.garage').classList.remove('active');
        document.querySelector('.winners').classList.add('active');
        garage_btn.classList.remove('btn_active')
        winners_btn.classList.add('btn_active')

    })

    garage_btn.addEventListener('click', ()=>{
        document.querySelector('.garage').classList.add('active');
        document.querySelector('.winners').classList.remove('active');
        garage_btn.classList.add('btn_active')
        winners_btn.classList.remove('btn_active')

    })

    const garage = document.querySelector('.garage__main_wrapper') as HTMLBodyElement;
    const prev_btn = document.querySelector('.prev-page') as HTMLButtonElement;
    const next_btn = document.querySelector('.next-page') as HTMLButtonElement;
    
    let page = document.querySelector('.garage__main_pagination h2');
    let x: number = 0;
    let num: number = 1;
    let count_cars: number = 7;

    // if(garage.childElementCount <= 7){
    //     next_btn.disabled = true;
    //     prev_btn.disabled = true;
    // }
   

    next_btn.addEventListener('click', () => {
        if(prev_btn.disabled = true) prev_btn.disabled = false;
        x = x - 955.15;
        num++
        garage.style.marginTop = `${x}px`
        page.innerHTML = `${num}`;
        count_cars += 7;
        
        if(garage.childElementCount <= 7){
            next_btn.disabled = true;
            prev_btn.disabled = true;
        }

        
        if(garage.childElementCount <= count_cars){
           
            next_btn.disabled = true;
        }
    })

    prev_btn.addEventListener('click', () => {
        if(next_btn.disabled = true) next_btn.disabled = false;
        x = x + 955.15;
        num--; 
        garage.style.marginTop = `${x}px`
        page.innerHTML = `${num}`;
        count_cars -= 7;
        
        if(num === 1){
            prev_btn.disabled = true;
        }
    })
})