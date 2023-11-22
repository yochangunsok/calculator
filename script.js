const result = document.getElementById('RESULT');
const operator = document.querySelectorAll('.ope');
const number = document.querySelectorAll('.number');
const dec = document.getElementById('decimal');
let answer = 0;
let boolean = 'true';



//入力欄作成
number.forEach((item) =>{
    item.onclick = function() {
        if (answer === 0) {
            answer = '';
            result.value = answer;
        };

        result.value += this.textContent;
        answer += this.dataset.element;
    };
});



//演算子重複時対応
operator.forEach((ope) => {
    ope.onclick = function() {
        if (answer.toString().charAt(answer.length - 1) === '+' ||
            answer.toString().charAt(answer.length - 1) === '-' ||
            answer.toString().charAt(answer.length - 1) === '*' ||
            answer.toString().charAt(answer.length - 1) === '/'   )
            {
                answer = answer.toString().slice(0 , answer.length - 1) + this.dataset.element;
                result.value = answer.toString().slice(0 , answer.length -1) + this.textContent;
            } else {
                result.value += this.textContent;
                answer += this.dataset.element;
                boolean = 'true';
            };
    };
});



//イコールが押された時の対応
document.getElementById('=').onclick = () => {
    if (answer.toString().charAt(answer.length - 1) === '+' ||
        answer.toString().charAt(answer.length - 1) === '-' ||
        answer.toString().charAt(answer.length - 1) === '*' ||
        answer.toString().charAt(answer.length - 1) === '/'   )
        {
            answer = answer.toString().slice(0 , answer.length - 1);
            result.value = answer.toString().slice(0 , answer.length -1);
        };
    
    if (answer.toString().charAt(answer.length - 1) === '.'){
        answer += '0';
    }

    result.value = (eval(answer));
    answer = eval(answer);
};



//Cが押されたときの対応
document.getElementById('clear').onclick = () => {
    result.value = '0';
    answer = 0;
};



//少数点以下の計算
dec.addEventListener('click' , function(){
    if (boolean === 'true' &&
        (answer.toString().charAt(answer.length - 1) === '1' ||
         answer.toString().charAt(answer.length - 1) === '2' ||
         answer.toString().charAt(answer.length - 1) === '3' ||
         answer.toString().charAt(answer.length - 1) === '4' ||
         answer.toString().charAt(answer.length - 1) === '5' ||
         answer.toString().charAt(answer.length - 1) === '6' ||
         answer.toString().charAt(answer.length - 1) === '7' ||
         answer.toString().charAt(answer.length - 1) === '8' ||
         answer.toString().charAt(answer.length - 1) === '9' ||
         answer.toString().charAt(answer.length - 1) === '0')  )
        {
            result.value += this.textContent;
            answer += this.dataset.element;
            boolean = 'false';
        }; 
});
