const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		'X-RapidAPI-Key': 'e2402c6188mshe51466c9d8407e3p1ab56ejsnb7a18360eaea'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(exibirNaTela)
	.catch(err => console.error(err));

 let card = document.querySelector(".card")
 function exibirNaTela(response){
     const obj = response.data.coins

     obj.forEach(element => {
	  const {iconUrl,name,symbol,price,change} = element
	  
	  let priceNumber = Number(price)
	  let changeNumber = Number(change)
	  let color = changeNumber < 0 ? `<h3 class="red">${changeNumber}%</h3>` :`<h3 class="green">${changeNumber}%</h3>`
	  
	  
	
	
	card.innerHTML += `
		<section class="boxes_crip">
		<div class="name_crip">
		<img src="${iconUrl}">
		<div>
		<h3>${name}</h3>
		<h4>${symbol}</h4>
		
		</div>
		</div>
		<div class="price">
		<h3>${priceNumber.toFixed(2)} US$</h3>
		</div>
		<div class="change">
		${color}
		</div>
		</section>
        `
		

         console.log(element)
         
     });
 }   
   