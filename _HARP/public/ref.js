if (true) {
  // alert('?');
}

( me = function () {
  console.log('Doc ready');

  var notesArray = [], text = [], url = [];

  notesArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');
  for (i = 0, l = notesArray.length; i < l; i++) {
    // first throw away punctuation, to get 30 characters and empty spaces only
    // if (notesArray[i].textContent.length >= 30) {
      text += notesArray[i].textContent.substring(0,5);
      // url += text[i].replace(/\s/g, '-');
    // } else {
      // text += notesArray[i].textContent;
    // }
    // console.log(notesArray[i].textContent);
  }
  console.log(text);
  // console.log(url);
})();

// me();



      //  get every h2 tag content
      //  in a certain class div
      //  take first 30 chars
      //  and build urls with it
      //  wrap every h2 element in an anchor


// append
// span
// class="counter"
// title="references"
