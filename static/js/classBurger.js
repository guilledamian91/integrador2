class Burger{

	menu
	constructor(){
		this.menu=document.createElement('div')
		this.menu.setAttribute('class','burgerM')
		let divI= document.createElement('div');
		let ancho = window.innerWidth;
		let divOp= document.createElement('div')
		divOp.setAttribute('id','mOpciones')
		divOp.style.width= ancho+'px'

		
		this.menu.appendChild(divOp)
		let btnMenu = document.getElementById('abrirMenu')
		btnMenu.addEventListener('click',()=>{
			this.menu.classList.toggle('mAbierto')
			setTimeout(()=>{
				divOp.style.height= 'auto'
			},200)
			
		})
		
	}
	addOpcion(texto,direccion){
		let op = document.createElement('a')
		op.setAttribute('href',direccion)
		op.textContent=texto

		this.menu.querySelector('div').appendChild(op)
	}
}
export default Burger = Burger