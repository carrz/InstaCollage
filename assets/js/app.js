// Inicio de sesión

$(document).ready(function(){
})

$('#name').blur(function() {  
  if($('#name').val().length < 1) {  
      alert('Su nombre de usuario no puede estar vacío');  
  } else {
    $('#name').addClass('success');
  }
})

$('#password').blur(function() {  
  if($('#password').val().length < 1) {  
    alert('Su password no puede quedar vacío');  
  } else if($('#password').val().length < 6) {
    alert("Su password es demasiado corto"); 
  } else if($('#password').val() === '123456') {
    alert('Su password no es seguro'); 
  } else {
    $('#password').addClass('success');
  }
})

$('#here').mouseover(function() {
  if($('#name').hasClass('success') && $('#password').hasClass('success')){
    $('#loginBtn').removeAttr('disabled');
  }
})

$('#loginBtn').click(function(){
  $('#login').addClass('d-none')
  $('#main').removeClass('d-none');
})

// Drag and Drop

function drag(e) {
  e.dataTransfer.setData('Text',e.target.id)
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  var datos = e.dataTransfer.getData('Text');
  e.target.appendChild(document.getElementById(datos));
  e.target.classList.remove('over');
}

function dragEnter(e) {
  e.target.classList.add('over');
}

function dragLeave(e) {
  e.target.classList.remove('over');
}
