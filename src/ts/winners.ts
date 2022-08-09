import { winners } from "./main";


export async function get_winners(){

const dataCars = async () => {
    const response = await fetch(`${winners}`);
        const data = (await response.json());
        return data;
    };
        
    const cars = await dataCars();
    let table = document.querySelector('.table');
    table.innerHTML =`<tr class = 'header-table'>
        <th>N</th><th>Winner</th><th>Wins</th><th>Time</th>
       </tr>`;
        
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];

        const title = document.querySelector('.winners__title h1');
        title.innerHTML = `Winners (${cars.length})`
        

        const row = `<tr class = 'row'>
        <td>${i+1}</td><td>${car.name}</td><td>${car.wins}</td><td>${car.time}</td>
       </tr>`

       table.innerHTML += row;
        
    }
}
