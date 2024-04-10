export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  // new columns
  function appendClassToChildren(parentClass, childClass) {
  // Find the parent div by its class
  var parentDiv = document.querySelector('.' + parentClass);  
  // Check if the parent div exists
  if (parentDiv) {
    // Get all child elements of the parent div
    var childElements = parentDiv.children;
    
    // Loop through each child element
    for (var i = 0; i < childElements.length; i++) {
      // Append the new class name to the child element
      childElements[i].classList.add(childClass);
    }

    var childDiv = document.querySelector('.row');
    var childchange = childDiv.children;
      // Append the new class name to the child element
    if(childchange.length > 0){ 
          childchange[0].classList.add('col-md-3', 'main-lft');
          childchange[1].classList.add('col-md-9', 'main-rtl');
    }

    var uiDiv = document.querySelector('.col-md-3');
    var uichange = uiDiv.children;
      // Append the new class name to the child element
    if(uichange.length > 0){ 
          uichange[0].classList.add('list1');
    }

    var uiDiv1 = document.querySelector('.list1');
    var uichange1 = uiDiv1.children;
      // Append the new class name to the child element
	for (var i = 0; i < uichange1.length; i++) {
      // Append the new class name to the child element
      uichange1[i].classList.add("list"+(i+2));
	if(i == 3){
	 uichange1[i].classList.add("hide");
	}
    }   
  } else {
    console.error('Parent div with class "' + parentClass + '" not found.');
  }
}
// Example usage:
// Append the class "new-class" to all children of the div with class "parent-div"
appendClassToChildren('columns-2-cols', 'row');
  
document.querySelector('.list5').addEventListener('click', () => {
	var check = document.querySelector('.list5')
	if(check.className.includes('hide')){
		document.querySelector('.list5 ul').style.display = "block";
		check.classList.add("show");
		check.classList.remove("hide");
	}else{
		document.querySelector('.list5 ul').style.display = "none";
		check.classList.add("hide");
		check.classList.remove("show");
	}
});

 document.querySelector('.list7').addEventListener('click', () => {
	 var check = document.querySelector('.list7')
	if(check.className.includes('hide')){
		document.querySelector('.list7 ul').style.display = "block";
		check.classList.add("show");
		check.classList.remove("hide");
	}else{
		document.querySelector('.list7 ul').style.display = "none";
		check.classList.add("hide");
		check.classList.remove("show");
	}
});

}  
