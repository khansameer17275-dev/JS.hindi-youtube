const form =document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
       results.innerHTML = `Please enter valid height $(height)`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter valid height $(weight)`;
    } else {
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       // show the result
         results.innerHTML = `<span>${bmi}</span>`;
         // show the category
         const category = document.querySelector('#category');

            if (bmi < 18.6) {
                category.innerHTML = "Underweight";
                category.style.color = "orange";  // underweight category will be green
            } else if (bmi >= 18.6 && bmi < 24.9) {
                category.innerHTML = "Normal weight";
                category.style.color = "green";
            } else {
                category.innerHTML = "Overweight";
                category.style.color = "red";  // overweight category will be red
            }
        }
    })