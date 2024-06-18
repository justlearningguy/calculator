const numbers = document.querySelectorAll('.number');
const mainResultField = document.querySelector('.main_result');
const calculationField = document.querySelector('.calculation_result');
const signField = document.getElementById('sign');
const body = document.querySelector('body');
const mainField = document.querySelector('.main_field');
const additionalBtns = document.querySelectorAll('.additional');
let addons = false;
//variables
let a = '0';
let b = '';
let sign = '';
let finish = false;
let Digit = true;

//Number buttons onclick
body.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'Backspace':
            removeChar();
            break;
        case '0':
            digitClick(0);
            break;
        case '1':
            digitClick(1);
            break;
        case '2':
            digitClick(2);
            break;
        case '3':
            digitClick(3);
            break;
        case '4':
            digitClick(4);
            break;
        case '5':
            digitClick(5);
            break;
        case '6':
            digitClick(6);
            break;
        case '7':
            digitClick(7);
            break;
        case '8':
            digitClick(8);
            break;
        case '9':
            digitClick(9);
            break;
        case '.':
            point();
            break;
        case 'Enter':
            equal();
            break;
        case '+':
            plus();
            break;
        case '-':
            minus();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        case 'Escape':
            clearAll();
            break;
        case '%':
            percent();
            break;
        case 'Shift':
            plusminus();
            break;
    }
    })
for(let i = 0;i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        digitClick(numbers[i].textContent)
    });
}
function digitClick(digit) {
        if(mainResultField.textContent.length ==1 && mainResultField.textContent[0] == '0') {
            a = String(digit);
            mainResultField.textContent = a;
        }
        else if(mainResultField.textContent.length ==2 && mainResultField.textContent[0] == '-' && mainResultField.textContent[1] =="0") {
            a = '-' + String(digit);
            mainResultField.textContent = a;
        }
        else {
            if(sign == '') {
                a += String(digit);
                mainResultField.textContent = a;
            }
            else {
                b += String(digit);
                mainResultField.textContent = b;             
            }
        }
        Digit = true;
    }
function plus() {
    if(sign!='') {
        equal();
    }
    signField.textContent = '+';
    calculationField.textContent = a;
    mainResultField.textContent = '';
    sign = '+';
    
}
function minus() {
    if(sign!='') {
        equal();
    }
    signField.textContent = '-';
    calculationField.textContent = a;
    mainResultField.textContent = '';
    sign = '-';
}
function multiply() {
    if(sign!='') {
        equal();
    }
    signField.textContent = '×';
    calculationField.textContent = a;
    mainResultField.textContent = '';
    sign = '×';
}
function divide() {
    if(sign!='') {
        equal();
    }
    signField.textContent = '÷';
    calculationField.textContent = a;
    mainResultField.textContent = '';
    sign = '÷';
}
function power() {
    if(sign!='') {
        equal();
    }
    signField.textContent = '^';
    calculationField.textContent = a;
    mainResultField.textContent = '';
    sign = '^';
}
function point() {
    if(Digit && !mainResultField.textContent.includes('.') && mainResultField.textContent.length !=0) {
            if(b!='') {
                b+= '.';
                mainResultField.textContent = b; 
            }
            else {
                a+='.';
                mainResultField.textContent = a; 
            }
            Digit = false;
    }
    
}
function removeChar() {
    if(b!='') {
        if(mainResultField.textContent.length == 1 || (mainResultField.textContent.length == 2 && mainResultField.textContent[0] == '-')) {
            b = '0';
            mainResultField.textContent = '0';
        }
        else {
            b = b.toString().slice(0,-1);
            mainResultField.textContent = b;
        }
    }
    else {
        if(mainResultField.textContent.length == 1 || (mainResultField.textContent.length == 2 && mainResultField.textContent[0] == '-')) {
            a = '0';
            mainResultField.textContent = '0';
        }
        else {
            a = a.toString().slice(0,-1);
            mainResultField.textContent = a;
        }
    } 
}
function clearAll() {
    a = '0';
    b = '';
    sign = '';
    signField.textContent = '';
    Digit = true;
    mainResultField.textContent = '0';
    calculationField.textContent = '';
}
//actions
function equal() {
    if(sign!='' && b!='') {
        calculationField.textContent = a + ' ' + sign + ' ' + b;
        if(sign=='+') {
            a = Number(a) + Number(b);
        }
        else if(sign=='-') {
            a = Number(a) - Number(b);
        }
        else if(sign=='×') {
            a = Number(a) * Number(b);
        }
        else if(sign=='÷') {
            a = Number(a) / Number(b);
        }
        else if(sign='^') {
            a = Math.pow(a, b)
        }
        b = '';
        sign = '';
        signField.textContent = '';
        mainResultField.textContent = a;
        Digit = true;
    }    
    }
function plusminus() {
    if(mainResultField.textContent.slice(0,1) == '-') {
        if(b!='') {
            b = b.toString().slice(1);
        }
        else {
            a = a.toString().slice(1);
        }
        mainResultField.textContent = mainResultField.textContent.slice(1);
    }
    else {      
        if(sign != '') {
            b = '-' + b;
            mainResultField.textContent = b;
        }
        else {
            a = '-' + a;
            mainResultField.textContent = a;
        } 
        }
    }
function percent() {
    if(b!='') {
        b = Number(b)/100
        mainResultField.textContent = b;
    }
    else {
        a = Number(a)/100
        mainResultField.textContent = a;
    }
}
function sqrt() {
    if(b!='') {
        b = Math.sqrt(b);
        mainResultField.textContent = b;
    }
    else {
        a = Math.sqrt(a);
        mainResultField.textContent = a;
    }
}
function pi() {
    if(b!='') {
        b = Math.PI;
        mainResultField.textContent = b;
    }
    else {
        a = Math.PI;
        mainResultField.textContent = a;
    }
}
function changelayout() {
    if(!addons) {
        for(let i=0;i<additionalBtns.length;i++) {
            additionalBtns[i].style.display = 'flex';
        }
        addons = true;
    }
    else {
        for(let i=0;i<additionalBtns.length;i++) {
            additionalBtns[i].style.display = 'none';
        }
        addons = false;
    }
   
}
//removeChar swipe
let x1 = null;
mainField.addEventListener('touchstart', handleTouchStart);
mainField.addEventListener('touchmove', handleTouchMove);
function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;

}
function handleTouchMove(event) {
    if(!x1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let Diff = Math.abs(x2-x1);
    if(Diff > 5) {
        removeChar();
    }
    x1 = null;
}
//info
function info() {
    document.querySelector('.modal_box_bg').style.display = 'flex';
    setTimeout(function() {
      document.querySelector('.modal_box_bg').style.opacity = '1';
    }, 0);
}
function infoBack() {
  document.querySelector('.modal_box_bg').style.opacity = '0';
  setTimeout(function() {
    document.querySelector('.modal_box_bg').style.display = 'none';
  }, 300);
  
}
document.querySelector('.modal_box_bg').addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(document.querySelector(".modal_box_focus"));
	if ( ! withinBoundaries ) {
		infoBack()
	}
})