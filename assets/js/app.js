/* function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

var photo = document.querySelectorAll('.photo');
[].forEach.call(photo, function(pic) {
  pic.addEventListener('dragstart', handleDragStart, false);
});

var collage = document.querySelectorAll('.collageZone');
[].forEach.call(collage, function(col) {
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this / e.target is current target element.
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the columnwe dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  // See the section on the DataTransfer object.
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  [].forEach.call(collage, function (col) {
    col.classList.remove('over');
    console.log('ya me fui') 
  });
} */

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

$('#here').mousemove(function() {
  if($('#name').hasClass('success') && $('#password').hasClass('success')){
    $('#loginBtn').removeClass('disabled');
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
