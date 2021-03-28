var root = document.getElementById('wrap');
var userInput = '';
var r = '';
var g = '';
var b = '';
var store = '';
m.mount(root, {
	view: ()=> m(fetchColor, {colorCode: '#4682b4'})
});

function checkForRGB(userInput){
  if(userInput.length == 3){
  	userInput = userInput[0]+userInput[0]+userInput[1]+userInput[1]+userInput[2]+userInput[2];
  	console.log(userInput);
  }

  r = parseInt(userInput.slice(0,2), 16);
  g = parseInt(userInput.slice(2,4), 16);
  b = parseInt(userInput.slice(4,6), 16);

  if( !(isNaN(r) || isNaN(g) || isNaN(b))){
  	
  	document.body.style.backgroundColor = '#'+userInput;
  	let str = "rgb("+r+","+g+","+b+")";
  	document.getElementById('rgb').innerText = str;
  }

  console.log(str);
}


function fetchColor({attrs}) {

	const oninput = (e) => {
		userInput = e.target.value;
		if(userInput.length == 3 || userInput.length == 6)
			checkForRGB(userInput);
		
	}

	const onkeydown = (e) =>{
		if(e.keyCode == 13){
	
			if(userInput.length == 3 || userInput.length == 6)
				checkForRGB(userInput);
			
		}
	}

	function view(){

		return m('div.wrap',
			[m('input.hex[placeholder=#hexacode]', {
				oninput,
				onkeydown,
				value: userInput
			}),
			 m('input#rgb[placeholder=rgb()][disabled=true]')]
		)
	}


	return {view}
}