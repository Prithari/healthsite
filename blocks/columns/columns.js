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
  function appendClassToChildren(columns-2-cols, test) {
  // Find the parent div by its class
  var parentDiv = document.querySelector('.' + columns-2-cols);
  
  // Check if the parent div exists
  if (parentDiv) {
    // Get all child elements of the parent div
    var childElements = parentDiv.children;
    
    // Loop through each child element
    for (var i = 0; i < childElements.length; i++) {
      // Append the new class name to the child element
      childElements[i].classList.add(test);
    }
  } else {
    console.error('Parent div with class "' + parentClass + '" not found.');
  }
}
}
