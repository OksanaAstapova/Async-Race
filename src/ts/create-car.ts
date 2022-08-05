export async function create_car(){
    const dataCars = async () => {
        const response = await fetch('http://127.0.0.1:3000/garage');
        const data = (await response.json());
        return data;
    };

    console.log(await dataCars())
}