import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}

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
  } else {
    console.error('Parent div with class "' + parentClass + '" not found.');
  }
}
 
// Example usage:
// Append the class "new-class" to all children of the div with class "parent-div"
appendClassToChildren('block', 'new-class');
