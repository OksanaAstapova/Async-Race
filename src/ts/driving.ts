import { winners } from "./main";

export function car_drive(){

    let start_btns = document.querySelectorAll('.A');

    for (let i = 0; i < start_btns.length; i++) {

        const A = start_btns[i] as HTMLButtonElement;
        const B = A.nextElementSibling as HTMLButtonElement;
        const car = B.nextElementSibling as HTMLBodyElement;

        A.addEventListener('click', () => {
           
            B.disabled = false;
            A.disabled = true;
            // console.log(car)
            let duration: number = (Math.random() * (5));
            duration = +(duration.toFixed(3))
            console.log(duration)

            car. classList.add('animated')
            const animation = document.querySelector('.animated') as HTMLBodyElement;

            animation.style.animationDuration = `${duration}s`
           
        })

        B.addEventListener('click', ()=>{

            car. classList.remove('animated')
            
            A.disabled = false;
            B.disabled = true;
        })

    }
}

export function start_race(){
    
    const start_race = document.querySelector('.btn-race') as HTMLButtonElement;

    start_race.addEventListener('click', ()=>{

        start_race.disabled = true;

        let cars = document.querySelectorAll('.car');

        let race: number[] = [];

        for (let i = 0; i < cars.length; i++) {
            const car = cars[i] as HTMLBodyElement;
            let duration: number = (Math.random() * (5) + 1);
            duration = +(duration.toFixed(3))
            
            race.push(duration);
            car.classList.add('animated')

            car.style.animationDuration = `${duration}s`;
            car.style.marginLeft = '71vw' 
        }

        let fastest = Math.min.apply(null, race);
        let win = 0;

        for (let i = 0; i < cars.length; i++) {
            const car = cars[i] as HTMLBodyElement;

            if(car.style.animationDuration == `${fastest}s`){
                
                const id = +car.id
                win++;
                
                const name_wrapper = car.parentElement.parentElement.children[0].children[2]
                const name = name_wrapper.innerHTML;

                const winner = {
                    id: id,
                    name: name,
                    wins: win,
                    time: fastest,
                }

                const modal_body = document.querySelector('.modal-winner__body');

                create_winner_api(winner);

                const modal_wrapper = `<h2>${name}</h2><h3>with time ${fastest}s</h3>`;
                modal_body.innerHTML = modal_wrapper;

                const modal = document.querySelector('.modal-winner') as HTMLBodyElement;
                const cover = document.querySelector('.cover') as HTMLBodyElement;

                car.addEventListener('animationend', ()=>{
                    modal.style.display = 'flex';
                    cover.style.display = 'flex';
                })

                

                const close = document.querySelector(".modal-winner__close") as HTMLButtonElement;
                close. addEventListener('click', ()=>{
                    modal.style.display = 'none';
                    cover.style.display = 'none';
                })

                

            }
        }
    })

    const stop_race = document.querySelector('.btn-reset');

    stop_race.addEventListener('click', () => {

        start_race.disabled = false;

        let cars = document.querySelectorAll('.car');

        for (let i = 0; i < cars.length; i++) {
            const car = cars[i] as HTMLBodyElement;
        
            car.classList.remove('animated');
            const id = +car.id;
            car.style.marginLeft = '0' 



        }
    })
}


const create_winner_api = async (winner: any) => (await fetch( winners, { 
    method : 'POST',
    body: JSON.stringify(winner),
    headers: {
        'Content-Type': 'application/json'
    } ,
})).json();

const delete_winners_api = async (id: any) => (await fetch(`${winners}/${id}`, { method : 'DELETE' })).json();

