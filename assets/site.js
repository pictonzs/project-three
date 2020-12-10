var asides = document.querySelectorAll('aside');

for (var i = 0; i < asides.length; i++){
  asides[i].addEventListener('click', function(event)){
    var parent_node = event.target.parentNode;
    var aside = parent_node.querySelector('aside');
    if (aside.className === '' || aside.className === 'active'){
      aside.className = 'inactive';
     } else {
       aside.className='active';
    }
     console.log('Hey, you clicked an aside element', parent_node, aside.className)
  });
}
