// Class to convert values
class ConversionValue {
    constructor(val, unit) {
        this.val = val;
        this.unit = unit;
        ConversionValue.grams(this.val, this.unit);
        ConversionValue.kilograms(this.val, this.unit);
        ConversionValue.pounds(this.val, this.unit);
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
}

function GetValue() {
    const siUnit = document.getElementById('si_unit').value;
    const value = document.getElementById('input_num').value;
    //console.log(value, siUnit)
    if (value) { 
        new ConversionValue(value, siUnit)
    }
    else{
        const span = document.querySelectorAll('.answer span')
        span.forEach((data) => data.textContent = '')
    }
}

const conversionValue = document.getElementById('input_num')
conversionValue.addEventListener('input', GetValue)