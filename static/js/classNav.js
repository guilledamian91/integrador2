class Nav{
	constructor(urlLogo,opciones,rutas){
		let contenedor = document.createElement('div')
		contenedor.classList.add('navContent')

		let logo= document.createElement('img')
		logo.setAttribute('src',urlLogo)
		logo.classList.add('logoNav')

		let logoContent= document.createElement('div')
		logoContent.classList.add('logoContent')

		logoContent.appendChild(logo);

		let menuContent= document.createElement('div')
		menuContent.classList.add('menuContent')

		
		for(let i=0;i<opciones.length;i++){
			let opcionMenu= document.createElement('a')
			opcionMenu.classList.add('opcionMenu')
			opcionMenu.textContent= opciones[i]
			opcionMenu.setAttribute('href',rutas[i])
			menuContent.appendChild(opcionMenu)
		}


		contenedor.appendChild(logoContent)
		contenedor.appendChild(menuContent)

//CREAMOS AHORA LA PARTE DEL MENU PARA MOVILES
		
		let btnMenuMovil= document.createElement("div")
		btnMenuMovil.classList.add('btnMenuMovil')
		let img = document.createElement('img')
		img.setAttribute('src',"./img/menu y icon/icons8-menu-rounded-50x50-diseñocorrecto.png")

		btnMenuMovil.appendChild(img);



		let opMenuMovilCont= document.createElement('div') 
		opMenuMovilCont.classList.add('opMenuMovilCont')

		for(let i=0;i<opciones.length;i++){
			let opcionMenu= document.createElement('a')
			opcionMenu.classList.add('opcionMenu')
			opcionMenu.classList.add('opOculta')
			opcionMenu.textContent= opciones[i]
			opcionMenu.setAttribute('href',rutas[i])
			opMenuMovilCont.appendChild(opcionMenu)
		}
		btnMenuMovil.addEventListener('click',()=>{
			opMenuMovilCont.classList.toggle('menuVisible')
			
			opMenuMovilCont.querySelectorAll('.opcionMenu').forEach(m=>{
				m.classList.toggle('opOculta')
				
			})
			
		})



		contenedor.appendChild(btnMenuMovil)
		contenedor.appendChild(opMenuMovilCont)

		return contenedor


	}
}
export default Nav=Nav