import { winners } from "./main";

declare global {
    interface Window { toggle_up: any; }
    interface Window { toggle_up_win: any; }
}

export async function get_winners(page: number){

    const dataCars = async (page: number, limit = 10) => {
        const response = await fetch(`${winners}?_page=${page}&_limit=${limit}`);
        const data = (await response.json());
        return data;
    };
        
    const cars = await dataCars(page);
    createTable(cars);

    const dataWinners = async () => {
        const response = await fetch(`${winners}`);
        const data = (await response.json());
        return data;
    };

    const winners_data = await dataWinners();

    const title = document.querySelector('.winners__title h1');
    title.innerHTML = `Winners (${winners_data.length})`

    const next = document.querySelector('#right') as HTMLButtonElement;
    const prev = document.querySelector('#left')as HTMLButtonElement;
    const page_number = document.querySelector('#page-number');

    if(winners_data.length > 10){
        if(next.disabled = true){next.disabled = false;}
    }
    let counter: number = 1;

    next.addEventListener('click', async ()=>{
        prev.disabled = false;
        counter++;
        page_number.innerHTML = `${counter}`
        const cars2 = await dataCars(counter);
        createTable(cars2);
        if(cars2.length <= 10){next.disabled = true}
    })
    prev.addEventListener('click', async ()=>{
        next.disabled = false;
        counter--;
        page_number.innerHTML = `${counter}`
        const cars2 = await dataCars(counter);
        createTable(cars2);
        if(counter === 1){prev.disabled = true}
    })
    
    
    const time = document.querySelector('#time');
    const win = document.querySelector('#wins');

    window.toggle_up = toggle_up;
    window.toggle_up_win = toggle_up_win;

    async function toggle_up_win(): Promise<void>{
        win.classList.toggle('time-up');
        const num = +page_number.innerHTML;
        let cars_num = await dataCars(num);

        if(win.classList.contains('time-up')){
                       createTable(cars_num)
            const img_up= document.querySelector('#up-win') as HTMLBodyElement;

            img_up.style.display = 'flex';
        }else{
            createTable(cars_num)
            
            const img_down= document.querySelector('#down-win') as HTMLBodyElement;
                  img_down.style.display = 'flex';
        }
    }

    async function toggle_up(): Promise<void>{
        time.classList.toggle('time-up');
        const num = +page_number.innerHTML;
        let cars_num = await dataCars(num);

        if(time.classList.contains('time-up')){
                cars_num.sort(function (a: { time: number; }, b: { time: number; }) {
                    if (a.time > b.time) {
                      return 1;
                    }
                    if (a.time < b.time) {
                      return -1;
                    }
                    return 0;
                  });
                  createTable(cars_num);
                  const img_up= document.querySelector('#up') as HTMLBodyElement;
                  img_up.style.display = 'flex';
        }else{
            cars_num.sort(function (a: { time: number; }, b: { time: number; }) {
                if (a.time < b.time) {
                  return 1;
                }
                if (a.time > b.time) {
                  return -1;
                }
                return 0;
              });
              createTable(cars_num);
              const img_down= document.querySelector('#down') as HTMLBodyElement;
            img_down.style.display = 'flex';
        }
        
    }
}

function createTable(cars: any){
    let table = document.querySelector('.table');
    table.innerHTML =`<tr class = 'header-table'>
        <th>N</th><th>Winner</th><th id='wins' onclick='toggle_up_win()'><p>win</p><img id='up-win' src='up.png'><img id='down-win'src='down.png'><th id='time' onclick='toggle_up()'><p>Time</p><img id='up' src='up.png'><img id='down'src='down.png'></th>
       </tr>`;
        
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];

        const row = `<tr class = 'row'>
        <td>${i+1}</td><td>${car.name}</td><td>${car.wins}</td><td class='time'>${car.time}</td>
       </tr>`

       table.innerHTML += row;
        
    }
}

