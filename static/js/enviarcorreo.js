
function enviarCorreo(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const casa = document.getElementById('casa').value;
  const mail = document.getElementById('mail').value;
  const consulta = document.getElementById('consulta').value;

  if (nombre === '' || apellido === '' || casa === '' || mail === '' || consulta === '') {
    alert('Por favor, completa todos los campos antes de enviar el formulario.');
    return; // Stop the function execution
  }

  const link = document.createElement('a');
  link.href = 'mailto:inmotpo@gmail.com?subject=Nueva consulta de casa&body=Nombre: ' + encodeURIComponent(nombre) + '%0D%0A' + 'Apellido: ' + encodeURIComponent(apellido) + '%0D%0A' + 'Casa a consultar: ' + encodeURIComponent(casa) + '%0D%0A' + 'Mail: ' + encodeURIComponent(mail) + '%0D%0A' + 'Consulta: ' + encodeURIComponent(consulta);

  link.click();
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('casa').value = '';
  document.getElementById('mail').value = '';
  document.getElementById('consulta').value = '';
}
