let Filtro_Produtos = 0;
const pesq = document.getElementById("pesquisar");
const content = document.getElementById("content");
let itens = [];

function exibeProdutos(){
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            let str = '';
            let str2 = '';
            for (let i = 0; i < data.length; i++) {
                let prod = data[i];
                
                if(Filtro_Produtos == 0 || prod.category == Filtro_Produtos){
                    str += `<div>
                                <img src="${prod.image}" alt="${prod.title}">
                                <h2>${prod.title}</h2>
                                <div class="tamanho">
                                <h3>Produtos Restantes:</h3>
                                <p>${prod.rating.count}</p>
                                </div>
                                <p>R$${prod.price}</p>
                                <p class="deta"><a href="detalhes.html?id=${prod.id}" class="btn btn-primary">Detalhes</a></p>
                            </div>
                            
                            `
                            
                           
                }
            }
            if(Filtro_Produtos != 0){
                document.getElementById("carros").style.display = "none";
                document.getElementById("newsletter").style.display = "none";
                document.getElementById("dados1").style.display = "none";
            }else{
                document.getElementById("carros").style.display = "block";
                document.getElementById("newsletter").style.display = "block";
                document.getElementById("dados1").style.display = "block";
            }
            document.getElementById("produtosss").innerHTML = str;
            


            
    })
}

document.body.onload = () => {
    let filtroCe = document.querySelector('#FiltroCat');
    Filtro_Produtos = filtroCe.value
    console.log(Filtro_Produtos);
    exibeProdutos();
}
let filtroC = document.querySelector('#FiltroCat');
filtroC.addEventListener ('change',()=>{
        Filtro_Produtos = filtroC.value
        console.log(Filtro_Produtos);
        exibeProdutos();
    });


function addHTML(item){
    const div = document.createElement("div");
    div.innerHTML = item;
    content.append(div);
}

pesq.oninput = () => {
    content.innerHTML = '';

    itens
    .filter((item) => 
        item.toLowerCase().includes(pesq.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));   
};

function enterpesq(){
    document.getElementById("abcd").style.display = "block"
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {    
            for(let i=0;i<data.length;i++){
                if(itens.length < data.length){
                    addHTML(data[i].title);
                    itens.push(data[i].title); 
                }
            }
                     
    })

}

function overpesq(){
    content.innerHTML = '';
    document.getElementById("abcd").style.display = "none"
    
}

if(itens.length <= 0){
    document.getElementById("abcd").style.display = "none"
}else{
    document.getElementById("abcd").style.display = "block"
}

function pesquisar(){
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            for(let i=0;i<data.length;i++){
                let prod = data[i];
                console.log(prod.title + ":")
                console.log(pesq.value + "\n")
                if(pesq.value == prod.title || pesq.value+' ' == prod.title){
                    window.location.assign(`detalhes.html?id=${prod.id}`);
                    break;
                    alert("achou");
                }
            }
        })
}





/*loop do carrossel */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextimage();
},5000)


function nextimage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true; 
}
/* fim loop do carrossel */




