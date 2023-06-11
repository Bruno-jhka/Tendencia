
var urlParams = new URLSearchParams(window.location.search);
var prodId = urlParams.get('id');
console.log(urlParams);
fetch(`https://fakestoreapi.com/products/${prodId}`)
    .then(res => res.json())
    .then(prod => {
        const prodDet = document.getElementById("proddet");
        const prodHtml = `
                        <div class="produtos">
                            <div>
                                <img src="${prod.image}" alt="${prod.title}">
                                <h2>${prod.title}</h2>
        
                                <p class="descri">${prod.description}</p>
                                
                                
                            </div>
                        </div>

                        <div class="voltar"><p><a href="index.html">Voltar</a></p></div>
    
    `;

        prodDet.innerHTML = prodHtml;
    });
    