const sc=document.querySelector('.js-sc');
const mvs=document.querySelector('.js-mvs');
const resl=document.querySelector('.js-res');
let score = JSON.parse(localStorage.getItem('score'))||{Win: 0,Lose: 0,Ties: 0};
function reset(){
    localStorage.removeItem('score');
    score={Win: 0,Lose: 0,Ties: 0};
    alert('Scores Reseted !!')
    mvs.innerHTML=`Your Move:<img src="srcfiles/800px-TUGS_Flag_2.svg.png" class="miz"> <img src="srcfiles/800px-TUGS_Flag_2.svg.png" class="miz">:Computer Move`
    sc.innerHTML = `Wins: ${score.Win}, Looses: ${score.Lose}, Ties: ${score.Ties}`;
}
function show(){
    sc.innerHTML = `Wins: ${score.Win}, Looses: ${score.Lose}, Ties: ${score.Ties}`;
}
function game(pm){
    const cm=pkcm();
    let res='';
    if(cm===pm) {res='Tie.'; score.Ties++;}
    else if(cm==='paper'&& pm==='rock') {res = 'You Loose.'; score.Lose++;}
    else if(cm==='rock'&& pm==='scissors') {res = 'You Loose.'; score.Lose++;}
    else if(cm==='scissors' && pm==='paper') {res = 'You Loose.'; score.Lose++;}
    else if(cm==='scissors'&& pm==='rock'){res='You Win.'; score.Win++;}
    else if(cm==='paper'&& pm==='scissors'){res='You Win.';score.Win++;}
    else if(cm==='rock'&& pm==='paper'){res='You Win.'; score.Win++;}
    localStorage.setItem('score' , JSON.stringify(score));
    
    mvs.innerHTML=`Your Move:<img src="srcfiles/${pm}-emoji.png" class="mi"> <img src="srcfiles/${cm}-emoji.png" class="mi">:Computer Move`;
    resl.innerHTML=`${res}`;
    sc.innerHTML=`Wins: ${score.Win}, Looses: ${score.Lose}, Ties: ${score.Ties}`;
    /*alert(`Your Move: ${pm} Computer Move: ${cm} Hence ${res} 
Wins: ${score.Win}, Looses: ${score.Lose}, Ties: ${score.Ties}`);*/
}
function pkcm(){
    const rn= Math.random(); 
    let cm='';
    if(rn>=0&&rn<1/3)
        {cm='rock';}
    else if(rn>=1/3&&rn<2/3){
    cm='paper';}
    else if(rn>=2/3&&rn<1)
    {cm='scissors';}

    return cm;
}