/**
 * Created by Ann on 3/6/2018.
 */
var pressNumber = document.getElementsByClassName('num');
var operation = document.getElementsByClassName('ops');
var decimalNumber = document.getElementsByClassName('num-decimal');
var result = document.getElementsByClassName('equals');
var c = document.getElementsByClassName('clear');
var viewer = document.getElementById('viewer');
var memoryCurrentNum = 0;
var memoryNewNum = false;
var memoryPendingOperation = '';


for (var i=0; i<pressNumber.length; i++){
    var number = pressNumber[i];
    number.addEventListener('click', function (e) {
        pressNumbers(e.target.textContent);
    });
}

for (var i=0; i<operation.length; i++) {
    var operators = operation[i];
    operators.addEventListener('click', function (e) {
        operations(e.target.textContent);
    });
}

for (var i=0; i<decimalNumber.length; i++) {
    var decimalBtn = decimalNumber[i];
    decimalBtn.addEventListener('click', function (e) {
        decimal(e.target.textContent);
    });
}

for (var i=0; i<result.length; i++) {
    var resultBtn = result[i];
    resultBtn.addEventListener('click', function (e) {
        results(e.target.textContent);
    });
}

for (var i=0; i<c.length; i++) {
    var clearBtn = c[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });

}

function pressNumbers(number){
    if (memoryNewNum) {
    viewer.value = number;
    memoryNewNum = false;
    }else {
        if (viewer.value === '0') {
            viewer.value = number;

        } else {
            viewer.value += number;
        }
    }
    console.log('click on ' + number);
}

function clear(id) {
    if (id === 'c') {
        viewer.value = '0';
        memoryNewNum = true;
        memoryCurrentNum = 0;
        memoryPendingOperation = '';
    }
    console.log('click on ' + id);
}

function operations(op){
    var localOpMemory = viewer.value;

    if (memoryNewNum && memoryPendingOperation !== '='){
        viewer.value = memoryCurrentNum;
    } else {
        memoryNewNum = true;
        if (memoryPendingOperation === '+') {
            memoryCurrentNum += parseFloat(localOpMemory);
        }else if (memoryPendingOperation === '-') {
            memoryCurrentNum -= parseFloat(localOpMemory);
        }
        else if (memoryPendingOperation === '*') {
            memoryCurrentNum *= parseFloat(localOpMemory);
        }
        else if (memoryPendingOperation === '/') {
            memoryCurrentNum /= parseFloat(localOpMemory);
        }else {
            memoryCurrentNum = parseFloat(localOpMemory);
        }
        viewer.value = memoryCurrentNum;
        memoryPendingOperation = op;
    }
    console.log('click on ' + op);
}

function decimal(dot) {
    var localDecimalMemory = viewer.value;
    if (memoryNewNum) {
        localDecimalMemory = '0.';
        memoryNewNum = false;
    }else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    }

    viewer.value = localDecimalMemory;
    console.log('click on ' + dot);  
}

function results(equals){
    console.log('click on ' + equals);
}
