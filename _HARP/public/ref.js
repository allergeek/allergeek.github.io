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
  // if (references) {
  if (true) {
    var newArray = [], textArray = [];
    var anchor, text;

    anchor = document.createElement('a');
    text = document.createTextNode("abc");
    anchor.appendChild(text);

    myArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');
    for (i = 0, l = myArray.length; i < l; i++) {
      // myArray[i].append(`<span class="counter" title="references">NNN</span>`);
      textArray[i] = myArray[i].innerHTML;
      myArray[i].innerHTML = `${textArray[i]}`;
      // REWRITE APPENDING ? CHECK
    }


    console.log(anchor);
    console.log(text);
    console.log(myArray);
    console.log(textArray);


  }

  // if true
  // each h2 element
  // wrap
  // in url[i]
})();

function meme() {
  var arr = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');
  for (i = 0, l = arr.length; i < l; i++) {
    arr[i].onclick = mew;
  }
}

function mew(event) {
  var sel = getSelection().toString();
  var haveSel = sel.length > 0;
  if(!haveSel) {
    // location.href = "/";
    llo();
  }
}

function mww(event) {
  var element = document.getElementById("ttt");
  element.outerHTML = "";
}

function llo() {
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var btn = document.createElement('button');
  var large = div;
  var cc = div2;
  large.id = "ttt";
  large.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:999;background:#444;paddding:100px;';
  cc.style.cssText = 'position:relative;width:calc(100%-100px);height:calc(100%);margin:100px;';
  btn.style.cssText = 'position:fixed;top:20px;left:20px;width:20px;height:20px;';
  large.appendChild(cc);
  large.appendChild(btn);
  cc.id = "overlay-content";
  document.body.appendChild(large);
  // console.log(large);
  document.getElementById("overlay-content").innerHTML='<object type="text/html" data="how-the-brain-is-capable-of-growing-new-cells-ref/the-diet-modulates-memory-and-.html" style="width: 100%;height:100%;"></object>';
  btn.onclick = mww;
}

// llo();

// some posts don't have references
// hence need a flag in json

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

// create a class for empty span, zero references, to be lighter
// append current counter class only when > 0
