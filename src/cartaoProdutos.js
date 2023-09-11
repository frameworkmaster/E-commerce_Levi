import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    for(const produtoCatalogo of catalogo){
        const cartaoProduto = 
        `<div class="border-solid border-2 border-solid
         w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group" 
        id="card-produto-${produtoCatalogo.id}">
        <img 
        src="./assets/img/${produtoCatalogo.imagem}" 
        alt="Produto 1 do E-Commerce Levi." 
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p>Id: ${produtoCatalogo.id}</p>
        <p class = 'marca'>Marca: ${produtoCatalogo.marca}</p>
        <p>Descrição: ${produtoCatalogo.nome}</p>
        <p>Preço: $${produtoCatalogo.preco}</p>
        <button id='adiciona - ${produtoCatalogo.id}' class='bg-slate-950 text-slate-200 hover:bg-slate-700'>
            <i class="fa-solid fa-cart-plus"></i>
        </button>
        <p></p>
        </div>`;

        document.getElementById("container-produto").innerHTML 
        += cartaoProduto;
        document.getElementById(`adicionar-${produtoCatalogo.id}`);
    }

    for(const produtoCatalogo of catalogo){
        document
        .getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener('click', adicionarAoCarrinho)
    }
}