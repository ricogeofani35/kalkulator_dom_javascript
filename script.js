const container = document.querySelector('.container');
let inputCalc = document.querySelector('.input-calc');
let temptOperator = document.querySelector('.tempt-operator');
let temptResult = document.querySelector('.result');

let val1, val2, hasil;

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('clear')) {
        inputCalc.value = 0;
        temptOperator.innerHTML = '';
        temptOperator.style.display = 'none';
        

        temptResult.innerHTML = '';
        temptResult.style.display = 'none';
    } else if (e.target.classList.contains('delete-all')) {
        inputCalc.value = '';
        temptResult.innerHTML = '';
    } else if(e.target.classList.contains('delete')) {
        let result = inputCalc.value;
        inputCalc.value = result.substring(0, result.length - 1);

        let str = temptResult.textContent;
        temptResult.textContent = str.substring(0, str.length  - 1);
    } else if(e.target.classList.contains('number')) {
        inputCalc.value += e.target.textContent;

        temptResult.innerHTML += ' ' + e.target.textContent + ' ';
        temptResult.style.display = 'block';
    } 
    
    // operator
    if(e.target.classList.contains('tambah')) {
        val1 = inputCalc.value;
        temptOperator.innerHTML = e.target.textContent;
        temptOperator.style.display = 'block';
        inputCalc.value = 0;

        temptResult.innerHTML += e.target.textContent;
    } else if(e.target.classList.contains('kurang')) {
        val1 = inputCalc.value;
        temptOperator.innerHTML = e.target.textContent;
        temptOperator.style.display = 'block';
        inputCalc.value = 0;

        temptResult.innerHTML += e.target.textContent;
    } else if(e.target.classList.contains('kali')) {
        val1 = inputCalc.value;
        temptOperator.innerHTML = e.target.textContent;
        temptOperator.style.display = 'block';
        inputCalc.value = 0;

        temptResult.innerHTML += e.target.textContent;
    } else if(e.target.classList.contains('bagi')) {
        val1 = inputCalc.value;
        temptOperator.innerHTML = e.target.textContent;
        temptOperator.style.display = 'block';
        inputCalc.value = 0;

        temptResult.innerHTML += e.target.textContent;
    }


    // hasilnya
    if(e.target.classList.contains('hasil')) {
        if(temptOperator.textContent === '+') {
            val2 = inputCalc.value;
            temptOperator.innerHTML = e.target.textContent;
            hasil = parseInt(val1) + parseInt(val2);
            inputCalc.value = hasil;

            temptResult.innerHTML += e.target.textContent + ' ' + hasil + ' ';
        } else if(temptOperator.textContent === '-') {
            val2 = inputCalc.value;
            temptOperator.innerHTML = e.target.textContent;
            hasil = parseInt(val1) - parseInt(val2);
            inputCalc.value = hasil;

            temptResult.innerHTML += e.target.textContent + ' ' + hasil + ' ';
        } else if(temptOperator.textContent === '*') {
            val2 = inputCalc.value;
            temptOperator.innerHTML = e.target.textContent;
            hasil = parseInt(val1) * parseInt(val2);
            inputCalc.value = hasil;

            temptResult.innerHTML += e.target.textContent + ' ' + hasil + ' ';
        } else if(temptOperator.textContent === '/') {
            val2 = inputCalc.value;
            temptOperator.innerHTML = e.target.textContent;
            hasil = parseInt(val1) / parseInt(val2);
            inputCalc.value = hasil;

            temptResult.innerHTML += e.target.textContent + ' ' + hasil + ' ';
        }
    }



});