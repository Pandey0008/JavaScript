const form=document.querySelector('form');
form.addEventListener('submit',function(event){
      event.preventDefault();
      const height =parseInt(document.querySelector('#height').value)
      const weight =parseInt(document.querySelector('#weight').value)
      const results = document.querySelector('#results');
      const clarification = document.querySelector('#clarification');
      if (height === '' || height <= 0 || isNaN(height)){
        results.innerHTML=`Please provide a valid height ${height}`;
      }
      else if (weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML=`Please provide a valid weight ${weight}`;
      } 
      else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        results.innerHTML=`<span>Your BMI is ${bmi}</span>`;
        }
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        if (bmi < 18.6) {
            clarification.innerHTML = `<span>You are Underweight</span>`;
            
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            clarification.innerHTML = `<span>You are Normal</span>`;
             }
        else  {
            clarification.innerHTML = `<span>You are Overweight</span>`;
            }
      });