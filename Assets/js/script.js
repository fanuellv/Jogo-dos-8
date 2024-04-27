var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var btn4 = document.querySelector("#btn4")
var btn5 = document.querySelector("#btn5")
var btn6 = document.querySelector("#btn6")
var btn7 = document.querySelector("#btn7")
var btn8 = document.querySelector("#btn8")
var btn9 = document.querySelector("#btn9")


var baralhar = document.querySelector('.random')
var verificar = document.querySelector('.solve')

var array = Array(7)

baralhar.addEventListener('click',()=>{

    /*btn1.innerText = geradorN(1,8)
    btn2.innerText = geradorN(1,8)
    btn3.innerText = geradorN(1,8)
    btn4.innerText = geradorN(1,8)
    btn5.innerText = geradorN(1,8)
    btn6.innerText = geradorN(1,8)
    btn7.innerText = geradorN(1,8)
    btn8.innerText = geradorN(1,8)
    btn9.innerText = ''*/
    
    btn1.innerText = '2'
    btn2.innerText = '8'
    btn3.innerText = '4'
    btn4.innerText = '1'
    btn5.innerText = '3'
    btn6.innerText = '7'
    btn7.innerText = '6'
    btn8.innerText = '5'
    btn9.innerText = '' 
        corN(btn1)
        corN(btn2)
        corN(btn3)
        corN(btn4)
        corN(btn5)
        corN(btn6)
        corN(btn7)
        corN(btn8)
        corN(btn9)
})

btn6.addEventListener('click',()=>{
    if (btn9.innerText=='') {
        if (9-parseInt(btn6.innerText)==2) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==5) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==1) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==7) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==8) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==6) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==5) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==4) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==3) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn9.innerText=aux
        }
    }
    else if (btn3.innerText=='') {
        if (9-parseInt(btn6.innerText)==2) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==5) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==1) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==7) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==8) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==6) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==5) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==4) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==3) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn3.innerText=aux
        }
    }
    else if (btn5.innerText=='') {
        if (9-parseInt(btn6.innerText)==2) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==5) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==1) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==7) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==8) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==6) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==5) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==4) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn6.innerText)==3) {
            let aux =btn6.innerText
            btn6.innerText=''
            btn5.innerText=aux
        }
    }
    
})
btn3.addEventListener('click',()=>{
    if (btn6.innerText=='') {
        if (9-parseInt(btn3.innerText)==5) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==1) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==7) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==8) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==3) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==2) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==4) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==6) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn6.innerText=aux
        }
    }
    else if (btn2.innerText=='') {
        if (9-parseInt(btn3.innerText)==5) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==1) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==7) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==8) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==3) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==2) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==4) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn3.innerText)==6) {
            let aux =btn3.innerText
            btn3.innerText=''
            btn2.innerText=aux
        }
    }
    
})
btn2.addEventListener('click',()=>{
    if (btn3.innerText=='') {
        if (9-parseInt(btn2.innerText)==1) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==7) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==8) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==3) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==4) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==2) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==5) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==6) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn3.innerText=aux
        }

    }
    else if (btn1.innerText=='') {
        if (9-parseInt(btn2.innerText)==1) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==7) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==8) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==3) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==4) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==2) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==5) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==6) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn1.innerText=aux
        }

    }
    else if (btn5.innerText=='') {
        if (9-parseInt(btn2.innerText)==1) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==7) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==8) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==3) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==4) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==2) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==5) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn2.innerText)==6) {
            let aux =btn2.innerText
            btn2.innerText=''
            btn5.innerText=aux
        }

    }
    
})
btn1.addEventListener('click',()=>{
    if (btn2.innerText=='') {
        if (9-parseInt(btn1.innerText)==7) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==8) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==3) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==4) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==2) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==1) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==5) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==6) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn2.innerText=aux
        }
    }
    if (btn4.innerText=='') {
        if (9-parseInt(btn1.innerText)==7) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==8) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==3) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==4) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==2) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==1) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==5) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn1.innerText)==6) {
            let aux =btn1.innerText
            btn1.innerText=''
            btn4.innerText=aux
        }
    }
   
    
})
btn4.addEventListener('click',()=>{
    if (btn1.innerText=='') {
        if (9-parseInt(btn4.innerText)==8) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==3) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==4) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==2) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==5) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==1) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==6) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==7) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn1.innerText=aux
        }
    }
    else if (btn7.innerText=='') {
        if (9-parseInt(btn4.innerText)==8) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==3) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==4) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==2) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==5) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==1) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==6) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==7) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn7.innerText=aux
        }
    }
    else if (btn5.innerText=='') {
        if (9-parseInt(btn4.innerText)==8) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==3) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==4) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==2) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==5) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==1) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==6) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn4.innerText)==7) {
            let aux =btn4.innerText
            btn4.innerText=''
            btn5.innerText=aux
        }
    }
    
})
btn7.addEventListener('click',()=>{
    
    if (btn4.innerText=='') {
        if (9-parseInt(btn7.innerText)==3) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==4) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==2) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==5) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==1) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==6) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==7) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==8) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn4.innerText=aux
        }

    }
    else if (btn8.innerText=='') {
        if (9-parseInt(btn7.innerText)==3) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==4) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==2) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==5) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==1) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==6) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==7) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn7.innerText)==8) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }

    }
    else if (btn8.innerText=='') {
        if (9-parseInt(btn7.innerText)==4) {
            let aux =btn7.innerText
            btn7.innerText=''
            btn8.innerText=aux
        }
    }
})
btn8.addEventListener('click',()=>{
    
    if (btn7.innerText=='') {
        if (9-parseInt(btn8.innerText)==4) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==2) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==5) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==1) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==3) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==6) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==7) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==8) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn7.innerText=aux
        }
    }
    else if (btn9.innerText=='') {
        if (9-parseInt(btn8.innerText)==4) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==2) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==5) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==1) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==3) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==6) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==7) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==8) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn9.innerText=aux
        }
    }
    else if (btn5.innerText=='') {
        if (9-parseInt(btn8.innerText)==4) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==2) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==5) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==1) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==3) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==6) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==7) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
        else if (9-parseInt(btn8.innerText)==8) {
            let aux =btn8.innerText
            btn8.innerText=''
            btn5.innerText=aux
        }
    }
})
btn5.addEventListener('click',()=>{
    if (btn6.innerText=='') {
        if (9-parseInt(btn5.innerText)==6) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==1) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==2) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==3) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==4) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==5) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==7) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==8) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn6.innerText=aux
        }
    }
    else if (btn2.innerText=='') {
        if (9-parseInt(btn5.innerText)==6) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==1) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==2) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==3) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==4) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==5) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==7) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==8) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn2.innerText=aux
        }
    }
    else if (btn4.innerText=='') {
        if (9-parseInt(btn5.innerText)==6) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==1) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==2) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==3) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==4) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==5) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==7) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==8) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn4.innerText=aux
        }
    }
    else if (btn8.innerText=='') {
        if (9-parseInt(btn5.innerText)==6) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==1) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==2) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==3) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==4) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==5) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==7) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn5.innerText)==8) {
            let aux =btn5.innerText
            btn5.innerText=''
            btn8.innerText=aux
        }
    }
    
})
btn9.addEventListener('click',()=>{
    if (btn8.innerText=='') {
        if (9-parseInt(btn9.innerText)==2) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
        
        else if (9-parseInt(btn9.innerText)==5) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==1) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==7) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==3) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==4) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==6) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==8) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn8.innerText=aux
        }
    }
    else if (btn6.innerText=='') {
        if (9-parseInt(btn9.innerText)==2) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
        
        else if (9-parseInt(btn9.innerText)==5) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==1) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==7) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==3) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==4) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==6) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
        else if (9-parseInt(btn9.innerText)==8) {
            let aux =btn9.innerText
            btn9.innerText=''
            btn6.innerText=aux
        }
    }
    
})

verificar.addEventListener('click',()=>{
    if ((btn1.innerText=='1')&&(btn2.innerText=='2')&&(btn3.innerText=='3')&&(btn4.innerText=='4')&&(btn5.innerText=='5')&&(btn6.innerText=='6')&&(btn7.innerText=='7')&&(btn8.innerText=='8')&&(btn9.innerText=='')) {
        cor(btn1)
        cor(btn2)
        cor(btn3)
        cor(btn4)
        cor(btn5)
        cor(btn6)
        cor(btn7)
        cor(btn8)
        cor(btn9)

        alert('Ganhou!!')
    }
    else{
        corN(btn1)
        corN(btn2)
        corN(btn3)
        corN(btn4)
        corN(btn5)
        corN(btn6)
        corN(btn7)
        corN(btn8)
        corN(btn9)
        alert('Perdeu!!')
    }
})

function cor(btn) {
        btn.style.background = '#247BA0'
        btn.style.color = 'white'

}
function corN(btn) {
        btn.style.background = '#e8f1f2'
        btn.style.color = '#13293d'

}

function geradorN(max,min) {
    min=Math.ceil(min)
    max=Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
     
}

