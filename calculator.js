function addition(){
    let x,y;
    x= document.getElementById('xvalue').value ;
    y= document.getElementById('yvalue').value ;
    x=Number(x);
    y=Number(y);
    let oper= document.getElementById('result');

    document.getElementById('add').addEventListener("click", function(){
        oper.value=x+y;
    });
  
    document.getElementById('sub').addEventListener("click", function(){
        oper.value=x-y;
    });
    
    document.getElementById('mul').addEventListener("click", function(){
        oper.value=x*y;
    });
    
    document.getElementById('div').addEventListener("click", function(){
        oper.value=x/y;
    });
    
    document.getElementById('mod').addEventListener("click", function(){
        oper.value=x%y;
    });
}