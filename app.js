var hou = document.getElementById('hours')
var min = document.getElementById('minte')
var sec = document.getElementById('secd')
var miliSec = document.getElementById('mili')

var interval;

var hours = 0;
var minat = 0;
var secind = 0;
var miliSecind = 0;

function time() {
    miliSecind++;
    miliSec.innerHTML = miliSecind;
    if (miliSecind >= 100){
        secind++
        sec.innerHTML = secind
        miliSecind =0
    }
    if (secind >= 60){
        minat++
        min.innerHTML = secind
        secind =0
    }
    if (minat >= 60){
        hours++
        hou.innerHTML = secind
        minat =0
    }
    
}

function Start(){
    interval = setInterval (time ,10)
    document.getElementById('Start').style.display ='none'
}

function puse(){
    clearInterval (interval)
    document.getElementById('Start').style.display =''
}

function Reset(){
    puse();
    hou.innerHTML='0'
    min.innerHTML='0'
    sec.innerHTML='0'
    miliSec.innerHTML='0';
    hours = 0;
minat = 0;
secind = 0;
miliSecind = 0;
    // console.log(miliSec.innerHTML)
}