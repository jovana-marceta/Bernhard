
let products = { 
	"0" : { 
		"name": "Maribella Sofa",
		"manufacturer": "Bernhardt Interior",
		"description": "Finish: White Plaster/Rustic Gray only",
		"img": "product3.png",
		"circleText1": "Webbing",
		"circleText2": "Blendown throw pillows - knife edge<br> with welt - 23' x 23' / 21' x 21'",
		"circleText3": "Luxe Feather Down",
		"circleText4": "Fiber Blendown back pillows <br>  - box edge weltless"

	},
	"1" : {
		"name": "Penrose Credenza",
		"manufacturer": "Bernhardt Interior",
		"description": "Finish: White Plaster",
		"img": "product2.png",
		"circleText1": "Polished stainless<br> steel base",
		"circleText2": "Four soft-closing doors with <br> dimensional floral design fronts",
		"circleText3": "Adjustable glides",
		"circleText4": "Felt tabs behind doors"

	},
	"2" : {
		"name": "Brooklyn Right Arm Loveseat",
		"manufacturer": "Bernhardt Interior",
		"description": "Finish: White Plaster",
		"img": "product1.png",
		"circleText1": "Webbing",
		"circleText2": "Loose Fiber Back pillows - knife edge <br>weltless",
		"circleText3": "Luxe down",
		"circleText4": "Frame can be used as a stand-alone<br> item."

	},
	"3" : {
		"name": "Alannis",
		"manufacturer": "Woven Panel Bed",
		"description": "369-H06, 369-F06, 369-R06",
		"img": "product4big.png"
	},
	"4" : {
		"name": "Alannis 2",
		"manufacturer": "Woven Panel Bed",
		"description": "369-H06, 369-F06, 369-R06",
		"img": "product4.png"
	},
	"5" : {
		"name": "Alannis 3",
		"manufacturer": "Woven Panel Bed",
		"description": "369-H06, 369-F06, 369-R06",
		"img": "product6.png"
	}
}

function changeData(key) { 
	let title = products[key].name,
	manufacturer = products[key].manufacturer,
	description = products[key].description,
	img = products[key].img,
	circleText1 = products[key].circleText1,
	circleText2 = products[key].circleText2,
	circleText3 = products[key].circleText3,
	circleText4 = products[key].circleText4;

	document.getElementById('products-title').innerHTML = title;
	document.getElementById('products-manufacturer').innerHTML = manufacturer;
	document.getElementById('products-description').innerHTML = description;
	document.getElementById('products-img').src = `images/${img}`;
	document.getElementById('circleText1').innerHTML = circleText1;
	document.getElementById('circleText2').innerHTML = circleText2;
	document.getElementById('circleText3').innerHTML = circleText3;
	document.getElementById('circleText4').innerHTML = circleText4;
}


// Add active class
let productHolder = document.getElementById('products-holder');
let divs = productHolder.getElementsByClassName('products-img-holder');

for (let i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', function() {
		let current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
};
