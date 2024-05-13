//No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText//
// para adicionar conteúdo textual aos elementos 'h1' e 'a'//
//e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, //
//e três itens com links para outros sites na lista ordenada.  //

let elementoH1 = document.querySelector("h1");
console.log(elementoH1);

let elementouL = document.querySelector("ul");
console.log(elementouL);

let elementoA = document.querySelector("a");
console.log(elementoA);

let elementooL = document.querySelector("ol");
console.log(elementooL);

elementoH1.innerText = "Mussum Ipsum, cacilds vidis litro abertis.";

elementoA.innerText = "Clique para acessar o site da PROZ Educação.";

elementouL.innerHTML = `
<li>Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis</li>
<li>Atirei o pau no gatis, per gatis num morreus.</li>
<li>Mé faiz elementum girarzis, nisi eros vermeio.</li>

`
elementooL.innerHTML = `

<h2>Links para os sites</h2>
<li><a href="https://mussumipsum.com/">Mussum Ipsum</a></li>
<li><a href="https://www.youtube.com/">YouTube</a></li>
<li><a href="https://pt-br.facebook.com/">Facebook</a></li>
`