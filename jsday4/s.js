
    var head1 = document.getElementById('head1');
    head1.style.textAlign = 'center';
    head1.style.color = 'green';
    head1.textContent = '==========Heading changed==========';

    let grp1 = document.getElementById('grp1');
    let gr = document.getElementById('grp2')
    grp1.innerHTML = `<p>iam back</p>`;
    gr.innerHTML = `<img src="https://variety.com/wp-content/uploads/2026/08/GTA-6.jpg?w=1000&h=667&crop=1">`
    let my = document.getElementsByClassName('n');
    console.log(my);

    var list = document.getElementsByClassName('n');
    list[0].textContent = 'banana';
    list[1].style.color = "red";
    list[2].style.backgroundColor = "red";   
    
    var par = document.getElementsByTagName('p');
    par[1].style.backgroundColor = "green";

    var query = document.querySelector('.new')
    query.style.backgroundColor='orange';

    function show(){
        alert('button is clicked ');
    }

    var head1 = document.getElementById('head1');
    head1.addEventListener('mouseover',()=> {
        head1.style.color='red';
    })
    head1.addEventListener('mouseleave',()=>{
        head1.style.color='green';
    })

    function display(eve){
        console.log(eve);
        console.log(eve.target.value);
    }

   var f = document.getElementById('i');

function fo() {
    f.style.backgroundColor = 'green';
}

function fe(){
    f.style.backgroundColor = 'red';
}
f.addEventListener('focus',fo);
f.addEventListener('onblur',fe);


 function submitted(){
    alert('! form submitted succesfully ');
 }
//  regular expressions

let regex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;   
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let error = document.getElementById('error');
 function validate(){
    if(regex.test(email.value)){
        error.textContent='email is valid ';
        error.style.color='green';
        return true;
    }else{
        error.textContent='email is not valid ';
        error.style.color='red';
        return
    }
 }

 function verify(){
    let num = document.getElementById('num');
    let sm = document.getElementById('err');
    try{
       let x=num.value;
       if(x<5) throw 'Number is to low';
       if(x>10) throw 'number is too high';

       
    }catch(error){
        //console.log(`the error is  ${error}`);
        sm.textContent=`the error is ${error}`;
    }

 } 
  
