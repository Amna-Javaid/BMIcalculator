const form = document.querySelector('form');
 
form.addEventListener('submit', function (e) {
    e.preventDefault();
 
const height = parseInt(document.querySelector('#addheight').value)
const weight = parseInt(document.querySelector('#addweight').value)
const output = document.querySelector('.output')
const conclusion = document.querySelector('.conclusion')

if ((height === '') || (height < 0) || (isNaN(height))) {
    //NaN !== NaN
    conclusion.innerHTML = "Please provide a valid height";
} else if (weight === '' || weight < 0 || isNaN(weight)) {
    conclusion.innerHTML = "Please provide a valid weight";
}
else {

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Display the results
    conclusion.innerHTML = `<span>${bmi}</span>`
    
    if (bmi < 18.6) {
        output.innerHTML = "You are underweight";
        output.style.backgroundColor='red'
        output.style.color='white'
        output.style.padding='5px'
        
    } else if (bmi > 18.6 && bmi < 24.9) {
        output.innerHTML = "Normal"
        output.style.color='white'
        output.style.backgroundColor='green'
        output.style.padding='5px'

    } else if (bmi > 24.9) {
        output.innerHTML = "You are Overweight"
        output.style.color='white'
        output.style.padding='5px'
        output.style.backgroundColor='red'
    }



}






})