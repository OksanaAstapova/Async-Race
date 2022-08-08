import { generate_cars } from "./generate-cars";
import { create_your_car } from "./create-your-car";

export function create_page(){
    const body = document.querySelector('.body');

    const header = `<header class="header">
    <h1 class="header__title">acync race</h1>
    <div class="header__button">
        <button class="button__garage btn_active">garage</button>
        <button class="button__winners">winners</button>
    </div>
    </header>`

    body.innerHTML += header;

    const main = `<main>
    <section class="garage active">
        <div class="garage__control">
            <div class="garage__control_create">
                <div class="create_name">
                    <label for="name-car"></label>
                    <input id="name-car" name="name-car" placeholder="car name">
                </div>
                <div class="create_color">
                    <label for="color-car"></label>
                    <input id="color-car" name="color-car" type="color">
                </div>
                <button class="create_car">create car</button>
            </div>
            <div class="garage__control_update">
                <div class="update_name">
                    <label for="name-update"></label>
                    <input id="name-update" name="name-update" placeholder="car name">
                </div>
                <div class="update_color">
                    <label for="color-update"></label>
                    <input id="color-update" name="color-update" type="color">
                </div>
                <button class="update_car">update car</button>
            </div>
            <div class="garage__control_panel">
                <button class="btn-race">race</button>
                <button class="btn-reset">reset</button>
                <button class="btn-generate">generate</button>
            </div>
        </div>
        <div class="garage__main">
            <div class="garage__main_title"><h2></h2></div>
            <div class="garage__main_pagination">
                <button class='prev-page' disabled><</button>
                <h2>1</h2>
                <button class ='next-page'>></button>
            </div>
            <div class = 'wrapper'>
                <div class='garage__main_wrapper'></div>
            </div>
            <div class='modal-winner'>
                <button class='modal-winner__close'>X</button>
                <h1 class='modal-winner__title'>The winner is</h1>
                <div class='modal-winner__body'></div>
            </div>
            <div class='cover'></div>
        </div>
    </section>
    <section class="winners">
        <div class="winners__title"><h1></h1></div>
        <div class="page_winners"><button disabled><</button><h2>Page (1)</h2><button disabled>></button></div>
        <div class="winners__wrapper">
        <table class = 'table'>
        <tr class = 'header-table'>
         <th>N</th><th>Winner</th><th>Wins</th><th>Time</th>
        </tr>
        
       </table>
       <img class='img' src='winners.png'></img>
        </div>
    </section> 
    </main>`

    body.innerHTML += main; 

    const generate_btn = document.querySelector('.btn-generate');

    generate_btn.addEventListener('click', ()=>{
    
        generate_cars();
    })

    const create_btn = document.querySelector('.create_car');

    create_btn.addEventListener('click', ()=>{
    
        create_your_car();
    })

}