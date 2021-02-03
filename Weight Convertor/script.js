// Class for weight conversion 
class WeightConversion {
    constructor(val, unit) {
        WeightConversion.grams(val, unit);
        WeightConversion.kilograms(val, unit);
        WeightConversion.pounds(val, unit);
    }

    static grams(val, unit) {
        if (unit==='grams'){
            UI.displayGrams(val);
        }
        else if (unit==='kg'){
            UI.displayGrams(val * 1000);
        }
        else if (unit==='pounds'){
            UI.displayGrams(val * 453.592)
        }
    }

    static kilograms(val, unit) {
        if (unit==='grams'){
            UI.displayKilograms(val/1000)
        }
        else if (unit==='kg'){
            UI.displayKilograms(val)
        }
        else if (unit==='pounds'){
            UI.displayKilograms(val * 0.453592)
        }
    }

    static pounds(val, unit) {
        if (unit==='grams'){
            UI.displayPounds(val * 0.00220462)
        }
        else if (unit==='kg'){
            UI.displayPounds(val * 2.20462)
        }
        else if (unit==='pounds'){
            UI.displayPounds(val);
        }
    }
}

// Class for length conversion 
class LengthConversion {
    constructor(val, unit) {
        LengthConversion.kilometers(val, unit);
        LengthConversion.meters(val, unit);
        LengthConversion.miles(val, unit);
    }

    static kilometers(val, unit) {
        if (unit==='km'){
            UI.displayKilometer(val);
        }
        else if (unit==='meter'){
            UI.displayKilometer(val/1000);
        }
        else if (unit==='miles'){
            UI.displayKilometer(val*0.62137);
        }
    }

    static meters(val, unit) {
        if (unit==='km'){
            UI.displayMeter(val*1000);
        }
        else if (unit==='meter'){
            UI.displayMeter(val);
        }
        else if (unit==='miles'){
            UI.displayMeter(val*0.00062137)
        }
    }

    static miles(val, unit) {
        if (unit==='km'){
            UI.displayMiles(val/0.62137);
        }
        else if (unit==='meter'){
            UI.displayMiles(val/0.00062137);
        }
        else if (unit==='miles'){
            UI.displayMiles(val);
        }
    }
}

// Class for temperature conversion 
class TempConversion {
    constructor(val, unit) {
        TempConversion.celsius(val, unit);
        TempConversion.fahrenheit(val, unit);
        TempConversion.kelvin(val, unit);
    }

    static celsius(val, unit) {
        if (unit==='celsius'){
            UI.displayCelsius(val);
        }
        else if (unit==='fahrenheit'){
            UI.displayCelsius((val-32)/1.8000);
        }
        else if (unit==='kelvin') {
            UI.displayCelsius(val-273.15)
        }
    }

    static fahrenheit(val, unit) {
        if (unit==='celsius'){
            UI.displayFahrenheit((val*1.8000)+32)
        }
        else if (unit==='fahrenheit'){
            UI.displayFahrenheit(val)
        }
        else if (unit==='kelvin') {
            UI.displayFahrenheit(((val-273.15)*1.8000)+32)
        }
    }

    static kelvin(val, unit) {
        if (unit==='celsius'){
            UI.displayKelvin(val+273.15)
        }
        else if (unit==='fahrenheit'){
            UI.displayKelvin(((val-32)/1.8000)+273.15)
        }
        else if (unit==='kelvin') {
            UI.displayKelvin(val)
        }
    }
}

// Class to manage UI 
class UI{
    static displayGrams(value) {
        const gramsSpan = document.querySelector('.grams_value')
        gramsSpan.textContent = value;
    }

    static displayKilograms(value) {
        const kgSpan = document.querySelector('.kilograms_value')
        kgSpan.textContent = value; 
    }

    static displayPounds(value) {
        const poundSpan = document.querySelector('.pounds_value')
        poundSpan.textContent = value;
    }
    
    static displayKilometer(value) {
        const kmSpan = document.querySelector('.km_value')
        kmSpan.textContent = value;
    }

    static displayMeter(value) {
        const meterSpan = document.querySelector('.meter_value')
        meterSpan.textContent = value;
    }

    static displayMiles(value) {
        const milesSpan = document.querySelector('.miles_value')
        milesSpan.textContent = value;
    }

    static displayCelsius(value) {
        const celsiusSpan = document.querySelector('.celsius_value')
        celsiusSpan.textContent = value;
    }

    static displayFahrenheit(value) {
        const fahrenheitSpan = document.querySelector('.fahrenheit_value')
        fahrenheitSpan.textContent = value;
    }

    static displayKelvin(value) {
        const kelvinSpan = document.querySelector('.kelvin_value')
        kelvinSpan.textContent = value;
    }

    static changeColor(class1, class2, class3) {
        let class1Element = document.querySelector(class1),
            class2Element = document.querySelector(class2),
            class3Element = document.querySelector(class3);

        class1Element.style.color = 'black';
        class1Element.style.fontWeight = 'normal';

        class2Element.style.color = 'black';
        class2Element.style.fontWeight = 'normal';

        class3Element.style.color = '#36688d';
        class3Element.style.fontWeight = 'bold';
    }

    static showHide(hide1, hide2, show) {
        document.querySelector(hide1).style.display = 'none';
        document.querySelector(hide2).style.display = 'none';
        document.querySelector(show).style.display = 'block';
        console.log('success')
    }

    static GetValue(class1, class2, className) {
        const value = document.getElementById(class1).value,
            siUnit = document.getElementById(class2).value;
        
        if (value) { 
            new className(value, siUnit)
        }
        else{
            const span = document.querySelectorAll('.answer span')
            span.forEach((data) => data.textContent = '')
        }
    }
}



function showWeight() {
    UI.changeColor('.length', '.temp', '.weight');
    UI.showHide('.length_container', '.temp_container', '.weight_container')
}

function showLength() {
    UI.changeColor('.temp', '.weight', '.length')
    UI.showHide('.weight_container', '.temp_container', '.length_container')
}

function showTemp() {
    UI.changeColor('.weight', '.length', '.temp')
    UI.showHide('.length_container', '.weight_container', '.temp_container')
}


// Getting measurements bar/section
document.querySelector('.weight').addEventListener('click', showWeight);
document.querySelector('.length').addEventListener('click', showLength);
document.querySelector('.temp').addEventListener('click', showTemp);


// Getting weight Values
document.getElementById('weight_num').addEventListener('input', () => {
    UI.GetValue('weight_num', 'weight_unit', WeightConversion)
})
document.getElementById('weight_unit').addEventListener('change', () => {
    UI.GetValue('weight_num', 'weight_unit', WeightConversion)
})

// Getting length Values
document.getElementById('length_num').addEventListener('input', () => {
    UI.GetValue('length_num', 'length_unit', LengthConversion)
})
document.getElementById('length_unit').addEventListener('change', () => {
    UI.GetValue('length_num', 'length_unit', LengthConversion)
})

// Getting temperature Values
document.getElementById('temp_num').addEventListener('input', () => {
    UI.GetValue('temp_num', 'temp_unit', TempConversion)
})
document.getElementById('temp_unit').addEventListener('change', () => {
    UI.GetValue('temp_num', 'temp_unit', TempConversion)
})