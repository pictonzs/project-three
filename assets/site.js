var asides = document.querySelectorAll('aside');
var parents = document.querySelectorAll('.parent')

for (var i = 0; i < parents.length; i++){
  parents[i].addEventListener('click', function(event)){
    var parent_node = event.target.parentNode;
    var aside = parent_node.querySelector('aside');
    if (aside.className === '' || aside.className === 'active'){
      aside.className = 'inactive';
     } else {
       aside.className='active';
    }
     console.log('Hey, you clicked a parent for an optional aside element', parent_node, aside.className)
  });
}
