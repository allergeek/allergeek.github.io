(function() {
  function test() {
    console.log("Hello!");
  }
  test();
})();

function card(event) {
  event.preventDefault();
  console.log('shown');
  return false;
}

function button() {
  var holder;
  holder = document.getElementsByClassName("print-obj");
  for (var i = 0, l = holder.length; i < l; i++) {
    holder[i].insertAdjacentHTML(
      'beforebegin',
      '<a href="#1" onclick="return card(event)"><input type="submit" value="show cards" class="button chimp-input print-btn"></a>'
    );
  }
}

// store all H1 headings
notesArray = [],
contentArray = [],
span = [];

notesArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');

// delete all spans inside h2
function removeElement(elem) {
  // for (var i = 0, l = 6; i < l; i++) {
    elem = notesArray[2].getElementsByTagName('span')[0];
    // notesArray[2].removeChild(elem); DELETES A DOM ELEMENT
    // contentArray[i] = notesArray[i].textContent;
  // }
}

removeElement();

console.log(notesArray);
console.log(notesArray[0].textContent);
// console.log(contentArray);

button();

// + on click on cards button
// show card overlay
// need to delete spans from grabbed h2 content (not from the page)
// see ref functions - create an overlay
// card overlay contains an <object> from /post/card
// find h1 inside class card
// + get all h2 in the content body of the page
// assign an h2[i+1] when Next href is clicked
// same logic for Prev
// exit cards on click, add an X or Back to the article button
