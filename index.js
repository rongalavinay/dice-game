

let image1=document.querySelector('.img1');
let image2=document.querySelector('.img2');
let heading=document.querySelector('h1');

image1.addEventListener('click',()=>{
  let num1=Math.floor(Math.random()*6)+1;
  let num2=Math.floor(Math.random()*6)+1;
  image1.setAttribute('src','images/dice'+num1+'.png');
  image2.setAttribute('src','images/dice'+num2+'.png');
  if (num1>num2){
    heading.textContent='player 1 won';
  }else if(num1<num2){
    heading.textContent='player2 won';
  }else{
    heading.textContent='draw'
  }
});
image2.addEventListener('click',()=>{
  let num1=Math.floor(Math.random()*6)+1;
  let num2=Math.floor(Math.random()*6)+1;
  image1.setAttribute('src','images/dice'+num1+'.png');
  image2.setAttribute('src','images/dice'+num2+'.png');
  if (num1>num2){
    heading.textContent='player 1 won';
  }else if(num1<num2){
    heading.textContent='player2 won';
  }else{
    heading.textContent='draw'
  }
});
