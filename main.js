const buttons = document.getElementById('buttons');
const result = document.getElementById('result');

let date = new Date();
experiment();

function experiment(){
    let resultVal = date.getFullYear();
    addButtons('getFullyear',resultVal);
    
    resultVal = date.getMonth()+1;
    addButtons('getMonth',resultVal);

    resultVal = date.getDate();
    addButtons('getDate',resultVal);

    resultVal = date.getHours();
    addButtons('getHours',resultVal);

    resultVal = date.getMinutes();
    addButtons('getMinutes',resultVal);

    resultVal = date.getSeconds();
    addButtons('getSeconds',resultVal);

    resultVal = date.getMilliseconds();
    addButtons('getMilliseconds',resultVal);
    
    resultVal = date.getMilliseconds();
    addButtons('getMilliseconds',resultVal);
    
    resultVal = date.getDay();
    addButtons('getDay',resultVal);
    
    resultVal = date.toLocaleDateString();
    addButtons('toLocaleDateString',resultVal);
    
}

function addButtons(name,resultValue){
    const button = document.createElement('button');
    button.addEventListener('click',() => {result.textContent=`${resultValue}`});
    button.textContent = `${name}`;
    buttons.appendChild(button);
}

