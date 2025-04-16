
// Galeria de Imagens Dinâmicas -> DOM

//elements com DOM
let inputUpload = document.getElementById("upload");
let btnAddImagem = document.getElementById("addImagem");
let divGaleria = document.getElementById("galeria");
let divCarrossel = document.getElementById("carrossel");

//vetor para receber as imagens
let imagensUrl = [];

//ouvinte para o btnAddImagem
btnAddImagem.addEventListener("click", ()=>{
    let imagemURL = inputUpload.value.trim();
    if(imagemURL ==="") return;
    imagensUrl.push(imagemURL);
    atualizarGaleria(); //função para atualizar as imagens da galeria
    atualizarCarrossel(); //função para atualizar as imagens do carrossel
    inputUpload.value = "";
});

//atualizarGaleria
function atualizarGaleria(){
    divGaleria.innerHTML = "";
    imagensUrl.forEach((imagem,index)=>{
        //criar Card para colocar as imagens
        const divCard = document.createElement("div");
        divCard.classList.add("card");//adicionando a classe card ao div
        //criar Imagem para receber a url
        const imgCard = document.createElement("img");
        imgCard.src = imagem;
        //criar um bottão -> remover image
        const btnRemove = document.createElement("button");
        btnRemove.innerText = "X";
        btnRemove.classList.add("remove");
        btnRemove.addEventListener("click", ()=>{ //remover a imagem da galeria
            imagensUrl.splice(index, 1); //remover a imagem pelo index do vetor
            atualizarGaleria(); //recursão
            atualizarCarrossel();
        });
        divCard.appendChild(imgCard);
        divCard.appendChild(btnRemove);
        divGaleria.appendChild(divCard);

// Galeira de Imegens Dinâmicas -> DOM

//elementos com DOM
let inputuploadInput = document.getElementById("upload");
let btnAddImagem = document.getElementById("addImagem");
let galeria = document.getElementById("galeria");
let divCarrossel = document.getElementById("carrossel");

//vetor para receber as imagens
let imagensUrl  = [];

//ouvinte para o btnAddImagem
btnAddImagem.addEventListener("click", ()=>{
    let imagemUrl = inputuploadInput.value.trim();
    if(imagemURL ==="") return;
    imagensUrl.push(imagemURL);
    atualizarGaleria(); //funçaõ para atualizar imagens da galeria 
    atualizarCarrossel(); //função para atualizar imagens do carrossel
    inputUpload.value = "";
});

//atualizar galeria
function atualizarGaleria(){
    divGaleria.innerHTML = "";
    imagemUrl.forEach((imagem,index)=>{
        //criar Card para colocar as imagens
        const divcard = document.createElement("div");
        divcard.classList.add("card");//adicionando a classe card ao div
        //criar Imagem para receber a url
        const imgCard = document.createElement("img");
        imgCard.src = imagem;
        //criar um botão -> remover image
        const btnRemove = document.createElement("button");
        btnRemove.innerText = "X";
        btnRemove.classList.add("remove");
        btnRemove.addEventListener("click", ()=>{ //remover imagem da galeria
            imagensUrl.splice(index, 1); //remove a imagem pelo index do vetor
            atualizarGaleria(); //recursão
            atualizarCarrossel();
        });
        divcard.appendChild(imgCard);
        divcard.appendChild(btnRemove);
        divGaleria.appendChild(divcard);

    });
}

    let index = 0;

    setInterval(()=>{
        index = (index+1)%imagensUrl.length;
        divCarrossel.style.transition = `transform ${(1+imagensUrl.length)/imagensUrl.length}s ease-in-out`;//troca as imagens
        divCarrossel.style.transform = `translateX(-${index*(100/imagensUrl.length)}%)`//move corretamente
    },2000);
}