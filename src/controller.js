import useAPI from "./api";

async function main(){
    
    try {
        const input = document.getElementById('input').value;
        let obj = await useAPI(input);
        if(obj.cod == '200'){
            // call function to display data here
            displayData(obj);
            // console.log(obj)
        } else if(obj.cod == '404'){
            //run something error
            alert('Enter a valid city!')
            reset();
        }
    } catch(e) {
        console.log(e)
    }
    
}

function displayData(object) {
    const main = document.getElementById('main');
    main.textContent = "";

    // const container = document.createElement('div');

    // const left = document.createElement('div');

    // const name = document.createElement('div');
    // name.textContent = object.name;

    // const temp = document.createElement('div');
    // temp.textContent = object.main.temp;
    
    // const weather = document.createElement('div');
    // weather.textContent = object.weather[0].main;

    // const weatherDesc = document.createElement('div');
    // weatherDesc.textContent = object.weather[0].description;

    main.innerHTML = `<div id="container">
                        <div id="left">
                            <div>${object.name}</div>
                            <div>${object.main.temp}</div>
                            <div>${object.weather[0].main}</div>
                            <div>${object.weather[0].description}</div>
                        </div>
                        <div id="right">
                            <div>Feels Like: ${object.main.feels_like}</div>
                            <div>Humidity: ${object.main.humidity}</div>
                            <div>Pressure: ${object.main.pressure}</div>
                            <div>Min Temp: ${object.main.temp_min}</div>
                            <div>Max Temp: ${object.main.temp_max}</div>
                        </div>
                        <button id="back">search</button>
                    </div>`
    const back = document.getElementById('back')
    back.addEventListener('click', reset)
}

function reset(){
    const contain = document.getElementById('main');
    contain.textContent = "";

    contain.innerHTML = `<label for="name">What's the weather in</label>
                        <input type="text" id="input" name="name" required
                        minlength="2" maxlength="30" size="10" placeholder="City Here">
                        <button id="search">search</button>`

    const search = document.getElementById('search')
    search.addEventListener('click', main)
}

export {main}