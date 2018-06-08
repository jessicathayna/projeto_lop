var direcaoyJ, direcaoxJ, jogador, velocidadeJogador, posicaoJogadorx, posicaoJogadory;
var tamanhoTelaw, tamanhoTelah;
var jogo, frames;
var velocidadeTiro, velocidadeBomba, tempoBomba;
var contagemBombas, painelContagemBombas, bombasTotal;
var vidaPlaneta;
var indiceExplosao, indiceSom;

function teclaDw(){
    var tecla=event.keyCode;
    if(tecla==38){//Cima
       direcaoyJ=-1;
    }else if(tecla==40){//Baixo
              direcaoyJ=1;
    }
    if(tecla==37){//Esquerda
       direcaoxJ=-1;
    }else if(tecla==39){//Direita
              direcaoxJ=1;
    }
    if(tecla==32){//Espaço / Tiro
        //TIRO
        atira(posicaoJogadorx + 17, posicaoJogadory);
    }
}
function teclaUP(){
    var tecla=event.keyCode;
    if((tecla==38)||(tecla==40)){
       direcaoyJ=0;
    }
    if((tecla==37)||(tecla==39)){
       direcaoxJ=0;
    }
}

function criaBomba(){
    if(jogo){
        var y = 0;
        var x = Math.random()*tamanhoTelaw;
        var bomba = document.createElement("div");
        var bomba = document.createElement("div");
        var atributo1 = document.createAttribute("class");
        var atributo2 = document.createAttribute("style");
        atributo1.value = "bomba";
        attributo2.value = "top:" + y + "px;";
        bomba.setAttributeNote(atributo1);
        bomba.setAttributeNote(atributo2);
        document.body.appendChild(bomba);
        contagemBombas--;
    }
}

function controlaBomba(){
    bombasTotal = document.gteElementsByClassName ("bomba");
    var tam = bombasTotal.length;
    for (var i=0; i<tam; i++){
         if (bombasTotal[i]){
             var pi = bombasTotal;[i].offsetTop;
             pi += velocidadeBomba;
             bombasTotal[i].style.top = pi + "px";
             if(pi>tamanhoTelah){
                 vidaPlaneta -= 10;
                 criarExplosao (2, bombasTotal[i].offsetLeft, null);
                 bombasTotal[i].remove();
             }
         }
     }
}

function atira(x,y) {
    var tiro = document.createElement("div");
    var atributo1 = document.createAttribute("class");
    var atributo2 = document.createAttribute("style");
    var atributo3 = document.createAttribute("src");
    atributo1.value = "tiroJogador";
    atributo2.value = "top:" + y + "px; left:" + x + "px";
    tiro.setAttributeNote(atributo1);
    tiro.setAttributeNode(atributo2);
    document.body.appendChild(tiro);

}
function controleTiros(){
    var tiros = document.getElementsByClassName("tiroJogador");
    var tam = tiros.length;
    for(var i=0; i<tam; i++){
        if(tiros[i]){
           var posicaoTiro = tiros[i].offsetTop;
           posicaoTiro -= velocidadeTiro;
           tiros[i].style.top = posicaoTiro + "px";
         if(posicaoTiro<0){
             tiros[i].remove();
         }
        }
     }

}

function colisaoTiroBomba(tiro){
    var tam = bombasTotal.length;
    for(var i=0; i<tam; i++){
        if(bombasTotal[i]){  
           if(((tiro.offsetTop <= (bombasTotal[i].offsetTop + 40)) && ((tiro.offsetTop + 6) >= (bombasTotal[i].offsetLeft)))
               &&
               ((tiro.offsetLeft <= bombasTotal[i].offsetLeft + 24)) && ((tiro.offsetLeft + 6) >= (bombasTotal[i].offsetLeft))))}
           criarExplosao (1, bombasTotal[i].offsetLeft-25, bombasTotal[i].offsetTop);
           bombasTotal[i].remove();
           tiro.remove();
        }
    }
}

function criarExplosao (tipo, x, y ){// 1=Ar, 2=Terra
    if(document.getElementById("explosao" + (indiceExplosao-10))){
       document.getElementById("explosao" + (indiceExplosao-10)).remove();
    }
    var explosao = document.createElement("div");
    var img = document.createElement("img");
    var som = document.createElement("audio");
    // Atributos para div
    var atributo1 = document.createAttribute("class");
    var atributo2 = document.createAttribute("style");
    var atributo3 = document.createAttribute("id");
    //Atributo para Imagem
    var atributo4 = document.createAttribute("src");
    //Atributos para Áudio
    var atributo5 = document.createAttribute("src");
    var atributo6 = document.createAttribute("id");
    
    atributo3.value - "explosao" + indiceExplosao;
    if(tipo==1){
       atributo1.value = "explosaoAr";
       atributo2.value = "top:" + y + "px; left:" + x + "px;";
       atributo4.value = "3iCN.gif?" + new Date();
    }else {
       atributo1.value = "explosaoChao";
       atributo2.value = "top:" + (tamanhoTelah-57) }+ "px; left:" + (x-17) + "px;";
       atributo4.value = "Xy8CttI.gif?" + new Date();
     }
     atributo5.value = "AUDIO DA EXPLOSÃO?" + new Date();
     atributo6.value = "som" + indiceSom;
     explosao.setAttributeNode(atributo1);
     explosao.setAttributeNode(atributo2);
     explosao.setAttributeNode(atributo3);
     img.setAttributeNode(atributo4);
     som.setAttributeNode(atributo5);
     som.setAttributeNode(atributo6);
     explosao.appendChild(img);
     explosao.appendChild(som);
     document.body.appendChild(explosao);
     document.getElementById("som" + indiceSom).play();

     indiceExplosao++;
     indiceSom++;
}

function controlaJogador(){
    posicaoJogadory += direcaoJogadory * velocidadeJogador;
    posicaoJogadorx += direcaoJogadorx * velocidadeJogador;
    jogador.style.top = posicaoJogadory + "px";
    jogador.style.left = posicaoJogadorx + "px";

}

function gameLoop (){
    if(jogo){
        //Funções do Controle
        controlaJogador();
        controleTiros();
        controlaBomba();

    }
    frames = requestAnimationFrame(gameLoop);
}

function inicia(){
    jogo = true;

    //Inicialização da Tela
    tamTelaw = window.innerHeight;
    tamTelah = window.innerWidth;

    //Inicialização do Jogador
    direcaoJogadorx = direcaoJogadory = 0;
    posicaoJogadorx = tamTelaw/2;
    posicaoJogadory = tamTelah/2;
    velocidadeJogador = velocidadeTiro = 6;
    jogador = document.getElementById("ef41cc43bc.gif");
    jogador.style.top = posicaoJogadory + "px";
    jogador.style.left = posicaoJogadorx + "px";

    //Controle das Bombas
    clearInterval(tempoBomba);
    contagemBombas = 150;
    velocidadeBomba = 3;
    tempoBomba = setInterval (criaBomba,1700);
    

    //Controle Planeta
    vidaPlaneta = 100;

    //Controles de Explosão
    indiceExplosao = indiceSom =  0;
     
    gameLoop ();
}

window.addEventListener ("load", inicia);
document.addEventListener ("keydown", teclaDw);
document.addEventListener ("keyup", teclaUp);
