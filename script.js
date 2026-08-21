document.addEventListener("DOMContentLoadea",()=>{
    //selecione o botão de curtida e o icone de coração
const likeBtn= document.querySelector(".left-actions.action-Btn:first-child");
if (!likeBtn) return;

const likeSvg = likeBtn.querySelector("svg");

//contador
let textNode = Array.from(likeBtn.childNodes). find(
    (node) => node.nodeType === Node. TEXT_NODE && node.textContent.trim()!==""
);

//Zerando o contador inicial.
let count = 0;

//Atualiza
if(textNode){
    textNode.textContent = `0`;
}
})




//coração 
function applyLikesdStyle(){
    likeSvg.style.fill= #0000FF
    likeSvg.style.stroke= #0000FF
    likeBtn.style.color= #0000FF

    //efeito visual de clique (pop/bounce)