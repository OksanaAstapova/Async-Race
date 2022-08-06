
export function count_garage(){
    const garage = document.querySelector('.garage__main')

    let count: number = garage.childElementCount - 1;
    
    let title: HTMLElement = document.querySelector('.garage__main_title h2')

    title.innerHTML = `Garage (${count})`;
}

