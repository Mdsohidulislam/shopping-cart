///phone product area
///add phone
document.getElementById("add").addEventListener('click',function(){
        add();
})
//remove phone
document.getElementById("remove").addEventListener("click",function(){
        remove();
})
 
///add case
document.getElementById("add1").addEventListener("click",function(){
        add1();
})
///remove case
document.getElementById("remove1").addEventListener('click',function(){
        remove1();
})

///total bill area
document.getElementById("inner").addEventListener("click",function(){
        inner();
})
///remove area
///phone remove area
document.getElementById('remove0').addEventListener('click',function(){
        removeP1();
})
///case remove area
document.getElementById("remove2").addEventListener("click",function(){
        remove2();
}) 
///phone product function area
///phone add area
function add(){
        var text=document.getElementById('text').value++;
        var product=text+1;
        document.getElementById("price").innerText=product*1259;
}
///phone remove area
function remove(){
        var text=document.getElementById("text");
        // console.log(text.value);
        if(text.value <= 0){
                text.value=0;
                alert("Only, Positive number Allowed !")
        }
        else{
                text.value=parseInt(text.value)-1;
        }
        var text=parseInt(text.value);
         document.getElementById("price").innerText=text*1259;
}
///case product area
///case add area
function add1(){
        var text=document.getElementById("text1").value++;
        var text=text+1;
        document.getElementById("price1").innerText=text*59;
}
///case remove area
function remove1(){
        var text=document.getElementById("text1");
        if(text.value <= 0){
                text.value=0;
                alert("Only, Positive number Allowed. !")
        }
        else{
                text.value=parseInt(text.value)-1;
        }
        var text=parseInt(text.value);
        document.getElementById("price1").innerText=text*59;
}
//total bill area
function inner(){
        var price=document.getElementById("price").innerText;
        var price1=document.getElementById("price1").innerText;
        var price=parseFloat(price);
        var price1=parseFloat(price1);
        var sum=price+price1;
        document.getElementById("subtotal").innerText=sum;
        document.getElementById("total").innerText=sum;
}
///remove area
///phone remove area
function removeP1(){
        var text=document.getElementById("text").value=0;
        document.getElementById("price").innerText=text*1259;
}
///case remove area 
function remove2(){
         var text=document.getElementById("text1").value=0;
         document.getElementById('price1').innerText=text*59;
}