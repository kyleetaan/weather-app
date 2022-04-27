async function useAPI(string) {
    let input = string; //cleansing

    let value = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=07c0e77f598fdefa1b1a8ae35f34ca98`)
    let data = await value.json();
    return data
}


export default useAPI