
export function create_page(){
    const body = document.querySelector('.body');

    const header = `<header class="header">
    <h1 class="header__title">acync race</h1>
    <div class="header__button">
        <button class="button__garage">garage</button>
        <button class="button__winners">winners</button>
    </div>
    </header>`

    body.innerHTML += header;

    const main = `<main>
    <section class="garage">
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
                <div class="create_name">
                    <label for="name-car"></label>
                    <input id="name-car" name="name-car" placeholder="car name">
                </div>
                <div class="create_color">
                    <label for="color-car"></label>
                    <input id="color-car" name="color-car" type="color">
                </div>
                <button class="create_car">update car</button>
            </div>
            <div class="garage__control_panel">
                <button class="btn-race">race</button>
                <button class="btn-reset">reset</button>
                <button class="btn-generate">generate</button>
            </div>
        </div>
        <div class="garage__main">
            <div class="garage__main_title"><h2>Garage (0)</h2></div>
        </div>
    </section>
    <section class="winners">
        <div class="winners__title"><h1>Winners</h1></div>
        <div class="winners__wrapper">
            <table>

            </table>
        </div>
    </section> 
    </main>`

    body.innerHTML += main; 
}