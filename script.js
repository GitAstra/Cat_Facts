let box = document.querySelector('.img-box');
let btn = document.querySelector('.btn');

btn.onclick = function(){
    location.reload();
}


async function getImage(){

    await fetch('https://catfact.ninja/fact').then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data.fact)
        let fact = document.querySelector('.fact p');
        fact.innerHTML = data.fact;
    })


}

getImage();




	VanillaTilt.init(document.querySelector(".img-box"), {
		max: 3,
		speed: 400
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".img-box"));