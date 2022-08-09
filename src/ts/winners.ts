import { winners } from "./main";

declare global {
    interface Window { toggle_up: any; }
    interface Window { toggle_up_win: any; }
}

export async function get_winners(){

const dataCars = async () => {
    const response = await fetch(`${winners}`);
        const data = (await response.json());
        return data;
    };
        
    const cars = await dataCars();
    createTable(cars);
    const time = document.querySelector('#time');
    const win = document.querySelector('#wins');

    window.toggle_up = toggle_up;
    window.toggle_up_win = toggle_up_win;

    function toggle_up_win(){
        win.classList.toggle('time-up');
        if(win.classList.contains('time-up')){
                       createTable(cars)
            const img_up= document.querySelector('#up-win') as HTMLBodyElement;

            img_up.style.display = 'flex';
        }else{
            createTable(cars)
            
            const img_down= document.querySelector('#down-win') as HTMLBodyElement;
                  img_down.style.display = 'flex';
        }
    }
    function toggle_up(): void{
        time.classList.toggle('time-up');

        if(time.classList.contains('time-up')){
                  cars.sort(function (a: { time: number; }, b: { time: number; }) {
                    if (a.time > b.time) {
                      return 1;
                    }
                    if (a.time < b.time) {
                      return -1;
                    }
                    return 0;
                  });
                  createTable(cars)
                  const img_up= document.querySelector('#up') as HTMLBodyElement;
                  img_up.style.display = 'flex';
        }else{
            cars.sort(function (a: { time: number; }, b: { time: number; }) {
                if (a.time < b.time) {
                  return 1;
                }
                if (a.time > b.time) {
                  return -1;
                }
                return 0;
              });
              createTable(cars)
              const img_down= document.querySelector('#down') as HTMLBodyElement;
                  img_down.style.display = 'flex';
        }
        
    }

    // time.classList.add('time-down');
    // time.addEventListener('click', ()=>{
    //     time.classList.toggle('time-up')

    //     if(time.classList.contains('time-up')){
    //       let cars_sort_up = cars.sort(function (a: { time: number; }, b: { time: number; }) {
    //         if (a.time > b.time) {
    //           return 1;
    //         }
    //         if (a.time < b.time) {
    //           return -1;
    //         }
    //         return 0;
    //       });
    //       createTable(cars_sort_up)
    //         const time = document.querySelector('#time');
          
    //         time.classList.add('time-up') 
    //     }
    // })
}

function createTable(cars: any){
    let table = document.querySelector('.table');
    table.innerHTML =`<tr class = 'header-table'>
        <th>N</th><th>Winner</th><th id='wins' onclick='toggle_up_win()'><p>win</p><img id='up-win' src='up.png'><img id='down-win'src='down.png'><th id='time' onclick='toggle_up()'><p>Time</p><img id='up' src='up.png'><img id='down'src='down.png'></th>
       </tr>`;
        
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];

        const title = document.querySelector('.winners__title h1');
        title.innerHTML = `Winners (${cars.length})`

        const row = `<tr class = 'row'>
        <td>${i+1}</td><td>${car.name}</td><td>${car.wins}</td><td class='time'>${car.time}</td>
       </tr>`

       table.innerHTML += row;
        
    }
}