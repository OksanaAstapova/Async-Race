import { create_default } from "./create-default";
import { create_page } from "./create-page";

export const base = 'http://localhost:3000';
export const garage = `${base}/garage`


document.addEventListener("DOMContentLoaded", () => {
    create_page();
    create_default();

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

    
})