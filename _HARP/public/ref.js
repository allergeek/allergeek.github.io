if (true) {}

function clean(n) {
  n = n
    .replace(/\={1,}/g,'-')
    .replace(/[^a-zA-Z0-9 -]/g,'')
    .replace(/\s{1,}/g,'-')
    .replace(/\-{2,}/g,'-');
  return n;
}

( me = function () {
  var notesArray = [], text = [], url = [];
  notesArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');
  for (i = 0, l = notesArray.length; i < l; i++) {
    text[i] = notesArray[i].textContent.toLowerCase();
    text[i] = clean(text[i]).substring(0,30);
  }
  for (i = 0, l = text.length; i < l; i++) {
    url[i] = window.location.href + '-ref' + '/' + text[i];
    // url[i] = current.source + text[i];
    console.log(text[i]);
    console.log(url[i]);
  }
  // each h2 element
  // wrap
  // in url[i]
})();

//also - if

      //  + get every h2 tag content
      //  + in a certain class div
      //  + take first 30 chars
      //  and build urls with it
      //  wrap every h2 element in an anchor

// add a counter after each h2 content, before the closing h2 tag
// append
// span
// class="counter"
// title="references"
