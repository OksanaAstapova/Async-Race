export function car_drive(){

    let start_btns = document.querySelectorAll('.A')
    start_btns.forEach(A => {

        A.addEventListener('click', () => {
            A.classList.add('btn_active');
            let B = A.nextElementSibling as HTMLButtonElement;
            B.disabled = false;
        })
    })
}