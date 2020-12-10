var asides = document.querySelectorAll('aside');

for (var i = 0; i < asides.length; i++){
  asides[i].addEventListener('click', function(event)){
    var parent_node = event.target.parentNode;
    var aside = parent_node.querySelector('aside');
    console.log('Hey, you clicked an aside element')
    aside.classname = 'active'
  });
}
