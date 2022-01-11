var form=document.getElementById('form')
var fanElement=document.getElementById('fanElement')
var tuElement=document.getElementById('tuElement')
var thrElement=document.getElementById('thriElement')
var foElement=document.getElementById('foElement')
var result=document.getElementById('result')
form.addEventListener('submit', event =>{
    event.preventDefault()
    var a=fanElement.value-0
    var b=tuElement.value-0
    var c=thrElement.value-0
    var d=foElement.value-0
        var arr1=[a,b,c,d]
    let yigindi=0
    for(let i=0 ; i<arr1.length;i++){
        yigindi=yigindi+ arr1[i];
    }
    result.textContent=yigindi
    console.log(yigindi)
})