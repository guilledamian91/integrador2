class Formulario{
	formulario
	//el constructor recibira el id que va a tener el formulario y tambien va a recibir la ruta
	//del archivo que se encargada de gestionar la info del form
	constructor(id){
		this.formulario= document.createElement('form')
		this.formulario.setAttribute('id',id)

		this.formulario.addEventListener('submit',e=>{
			e.preventDefault()
			let n = this.formulario.elements.nombre.value;
			let em = this.formulario.elements.email.value;
			let m= this.formulario.elements.mensaje.value;
			let flag=false;
			let errores= document.createElement('ul')
			errores.style.color= "red"
			errores.innerHTML=""
			this.formulario.appendChild(errores);
			

			if(n==""){
				let err = document.createElement('li')
				err.textContent="Algo anda mal en el nombre"
				errores.appendChild(err)
				this.formulario.elements.nombre.focus()
				this.formulario.elements.nombre.classList.toggle('inputHover')
				flag=true
			}

			if(em==""){
				let err = document.createElement('li')
				err.textContent="Algo anda mal en la direccion de correo"
				errores.appendChild(err)
				this.formulario.elements.email.focus()
				this.formulario.elements.email.classList.toggle('inputHover')
				flag=true
			}
			if(m==""){
				let err = document.createElement('li')
				err.textContent="Debe ingresar un mensaje"
				errores.appendChild(err)
				this.formulario.elements.mensaje.focus()
				this.formulario.elements.mensaje.classList.toggle('inputHover')
				flag=true
			}




			if(!flag){
				
				const link = document.createElement('a');
				link.href = 'mailto:inmotpo@gmail.com?subject=Nueva consulta de casa&body=Nombre: ' 
					+ encodeURIComponent(n) 
					+ '%0D%0A' +'Mail: ' + encodeURIComponent(em) 
					+ '%0D%0A' + 'Consulta: ' + encodeURIComponent(m);

				link.click();
				this.formulario.reset()
				this.formulario.elements.nombre.focus()
			}
		})

	}

	addBox(name,id,placeholder,tipo){
		let txt = document.createElement('input')
		let inputContent= document.createElement('div')
		inputContent.classList.add('contenedorInput')
		txt.setAttribute('type',tipo)
		txt.setAttribute('name',name)
		txt.setAttribute('id','id')
		txt.setAttribute('placeholder',placeholder)
		inputContent.appendChild(txt)
		this.formulario.appendChild(inputContent)

		txt.addEventListener('focus',()=>{
			txt.classList.toggle('inputHover');
			inputContent.classList.toggle('contentHover')
		})
		txt.addEventListener('blur',()=>{
			txt.classList.toggle('inputHover');
			inputContent.classList.toggle('contentHover')
		})
		inputContent.addEventListener('click',()=>{
			txt.focus()
		})
	}
	addTextArea(name,id,placeholder){
		let inputContent= document.createElement('div')
		inputContent.classList.add('contentTextArea')
		let textA = document.createElement('textarea')
		textA.setAttribute('name',name)
		textA.setAttribute('id',id)
		textA.setAttribute('placeholder',placeholder)
		

		inputContent.appendChild(textA)
		this.formulario.appendChild(inputContent)

		textA.addEventListener('focus',()=>{
			
			inputContent.classList.toggle('contentHover')			
		})
		textA.addEventListener('blur',()=>{			
			inputContent.classList.toggle('contentHover')			
		})
		inputContent.addEventListener('click',()=>{
			textA.focus()
		})
	}
	addBoton(id,texto){
		let boton = document.createElement('button')
		boton.classList.add('btnClass')
		boton.setAttribute('id',id)
		boton.setAttribute('type','submit')
		boton.textContent= texto
		this.formulario.appendChild(boton);

		boton.addEventListener('click',this._enviarDatos())
	}

	_enviarDatos(){

	}

}
export default Formulario = Formulario