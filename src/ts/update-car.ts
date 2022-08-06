
export function update_car(){

    let select_buttons = document.querySelectorAll('.select');

    select_buttons.forEach(button =>{
        button.addEventListener('click',()=>{

            button.classList.toggle('btn_active')
            console.log(button.parentElement.parentElement);

            let car = button.parentElement.parentElement;
            let brand = car.children[0].children[2];
            let car_color = car.children[1].children[2].children[0]
            let id = car_color.children[0].id;

            const update_btn = document.querySelector('.update_car');

            update_btn.addEventListener('click', ()=>{

                if(button.classList.contains('btn_active')){
                    
                    let input_name: HTMLInputElement = document.querySelector('#name-update');
                    let input_color: HTMLInputElement = document.querySelector('#color-update');
                    let name: string = input_name.value;
                    let color: string = input_color.value;

                    if(name !== '') brand.innerHTML = name;   

                        car_color.innerHTML = `<symbol xml:space="preserve" y="0" x="0" xmlns="http://www.w3.org/2000/svg" fill="${color}" id="${id}" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                        <g>
                        <path fill="#${color}" d="M66 47.5c-.4-.5-5.1 0-5.7 0H22.9c-1.8 0-4.9.6-6.5 0 .8-2.5 3.4-3.9 5.7-5 6.5-3.1 13.3-5.7 20.3-7.6 10-2.8 16.1 2 22.5 11.1l1.1 1.5z"></path>
                        <path fill="#333" d="M62.3 46.2c-5.6-7.9-10.9-12.1-19.6-9.7-1.5.4-3 .9-4.5 1.4-.9.3-1.5 1.1-1.5 2l-.3 5.2c-.1 1.3 1 2.4 2.3 2.4h19.7c.5 0 4.7-.4 5 0l-1.1-1.3z"></path>
                        <path fill="#333" d="M25 43.2c-1.6.8-3.4 1.7-4.4 3.1-.4.6 0 1.4.7 1.4 1.4.1 3.1-.2 4.3-.2h8c.5 0 .9-.4.9-.9l.4-6.3c0-.7-.6-1.1-1.2-.9-3 1.2-5.9 2.4-8.7 3.8z"></path>
                        <path fill="#${color}" d="M89.4 54.1c-2.3-3.5-5.9-6.2-9.8-7.6-1.2-.4-2.5-.8-3.8-.9-11.8-.6-23.9 0-35.7 0h-23c-3 0-5.6 2.2-6.1 5.1 0 .1-.1.2-.1.3l-.5 3.8-.8 3.4c0 2.2 1.8 4 4 4H62.7c5.6 0 11.2.2 16.8 0 .6 0 1.2 0 1.8-.1 1.1 0 2.2-.1 3.2-.1 2.1-.1 6.5-.1 6.8-3 .1-.9-.2-1.8-.6-2.6-.4-.8-.8-1.6-1.3-2.3z"></path>
                        <path fill="#e15b64" d="M14.2 50.7H11c-.2 0-.3.1-.3.3l-.4 3.3c0 .2.1.5.3.5h3.6c.9 0 1.6-.8 1.6-1.8v-.5c-.1-1-.8-1.8-1.6-1.8z"></path>
                        <path fill="#e0e0e0" d="M87.9 51c-.2-.2-.5-.4-.8-.4h-3c-.8 0-1.4.5-1.4 1.1v1.5c0 .8.8 1.6 1.8 1.6h5c.6 0 .7-.5.4-1l-2-2.8z"></path>
                        <path fill="#${color}" d="M90.3 57.8H9.6s-.4 0-.4.4c0 2.4 1.7 4 4.1 4h77c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2z"></path>
                        <g>
                            <circle fill="#fff" r="7.3" cy="57.2" cx="25.3"></circle>
                            <path fill="#333" d="M25.3 51.3c3.2 0 5.8 2.6 5.8 5.8S28.5 63 25.3 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-4-8.8-8.8-8.8z"></path>
                        </g>
                        <g>
                            <circle fill="#e6e6e6" r="4" cy="57.2" cx="25.3"></circle>
                        </g>
                        <g>
                            <circle fill="#fff" r="7.3" cy="57.2" cx="71.9"></circle>
                            <path fill="#333" d="M71.9 51.3c3.2 0 5.8 2.6 5.8 5.8S75.1 63 71.9 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-3.9-8.8-8.8-8.8z"></path>
                        </g>
                        <g>
                            <circle fill="#e6e6e6" r="4" cy="57.2" cx="71.9"></circle>
                        </g>
                        <path fill="#f8b26a" d="M59.1 55.9H41c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h18c.8 0 1.5.7 1.5 1.5.1.8-.6 1.5-1.4 1.5z"></path>
                        <path fill="#${color}" d="M17 43l-7.2-.7c-1.1-.1-2-1-2.1-2.2l-.1-1.5c-.1-1 .9-1.8 1.9-1.5l10.2 3.3c0 1.5-1.3 2.7-2.7 2.6z"></path>
                        <path d="M18.7 46.2l-2.9 2.5-4.9-8.1 1.9-1.6z" fill="#${color}"></path>
                        <metadata xmlnsD="https://loading.io/stock/">
                            <d:name>sports car</d:name>
                            <d:tags>racer,coupe,supercar,vehicle,cab,auto,sports car,transportation</d:tags>
                            <d:license>by</d:license>
                            <d:slug>swsirj</d:slug>
                        </metadata>
                        </g>
                    </symbol>`

                    select_buttons.forEach(btn => {
                        btn.classList.remove('btn_active')
                    })
                }
            })
        })
    })
}