// throw out any extra characters and punctuation out of the note reference url and
// replace single spaces with hyphens
function clean(n) {
  n = n
    .replace(/\={1,}/g,'-')
    .replace(/[^a-zA-Z0-9 -]/g,'')
    .replace(/\s{1,}/g,'-')
    .replace(/\-{2,}/g,'-');
  return n;
}

// extract text without stylistic tags and
// generate urls out of every note
function refs() {
  var
    notesArray = [],
    textArray = [];

  urls = [], numerals = [];

  notesArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');

  for (i = 0, l = notesArray.length; i < l; i++) {
    textArray[i] = notesArray[i].textContent.toLowerCase();
    textArray[i] = clean(textArray[i]).substring(0,30);
  }

  for (i = 0, l = textArray.length; i < l; i++) {
    urls[i] = window.location.href.split(/\?|#/)[0] + '-ref' + '/' + textArray[i];

    // console.log(textArray[i]);
    // console.log(urls[i]);
  }
}

refs();

// ( lala = function () {
//   console.log('HERE');
//   return false
// })();


( some = function () {

  function insertBlock() {
    var
      myArray = [],
      values = [];

    // store all H2 headings
    myArray = document
      .getElementsByClassName("page-body")[0]
      .getElementsByTagName('h2');

    // store all spans inside H2 headings
    function val() {
      values = document
        .getElementsByClassName("page-body")[0]
        .querySelectorAll('h2 > span');

      // return values;
    }

    val();

    // gets out the seqence, 0 0 2 0
    // values[i] contains the whole span tag
    function second() {
      var
        val,
        anchor;

      for (i = 0, l = values.length; i < l; i++) {

        anchor = document.createElement('a');

        me = function() {
          text = "abc";
          anchor.appendChild(text);
        }

        // anchor.appendChild(values[i]);

        // console.log(anchor);

        val = parseInt(values[i].innerHTML);
        values[i].className = "counter" + " ";
        // console.log(val);

        values[i].insertAdjacentHTML(
          'beforebegin','&thinsp;'
        );

        if (val > 0) {
          // console.log(val + ' is larger than 0');
          if (val === 1) {
            // console.log(val + ' reference');
            values[i].innerHTML = val + " reference";
          } else {
            // console.log(val + ' references');
            values[i].innerHTML = val + ' references';
          }
          values[i].className += "counter-valid";
        } else if (val === 0) {
          values[i].className += "hidden";
        }
      }
    }

    second();

    // console.log(val());
    console.log(values);
    // console.log(myArray);

    // + where span cointains a number > than 0,
    // + replace it with number + 'references' (+ a case for 1 referencE)
    // + assign a class counter-valid to such spans


    // > generating the block to swap with current content
    // + find span in h2 in page-body
    // + add a &thinsp; before the span
    // + assign a class - counter
    // + assign title references

    //  wrap every h2 element in an anchor

    // > now, what do I need to show?


    // just for demo

    // numerals = [0,0,2,0]
    //
    // for (i = 0, l = myArray.length; i < l; i++) {
    //   myArray[i].insertAdjacentHTML(
    //     'beforeend',`&thinsp;<a href="${urls[i]}" class="counter" onclick="return void[0]"><span class="counter counter-valid" title="references">${numerals[i]}</span></a>`
    //   );
    // }
  }

  insertBlock();


  // if a post has references
  // assign a url to each h2 (counter) span

  // if (references) {
  if (true) {
    var
      myArray = [],
      textArray = [];

    var anchor, text;

    anchor = document.createElement('a');
    text = document.createTextNode("abc");
    anchor.appendChild(text);

    myArray = document.getElementsByClassName("page-body")[0].querySelectorAll('h2 > span');

    for (i = 0, l = myArray.length; i < l; i++) {
      myArray[i].insertAdjacentHTML('beforeend',` zzz`);

      textArray[i] = myArray[i].innerHTML;
      myArray[i].innerHTML = `${textArray[i]}`;

    }


    // console.log(anchor);
    // console.log(myArray);
    // console.log(textArray);

  }
})();


// assign an action function
// to every h2 note
function every() {
  var arr = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');
  for (i = 0, l = arr.length; i < l; i++) {
    arr[i].onclick = mew;
  }
}

// if no text is selected
// go to a page
function mew(event) {
  var sel = getSelection().toString();
  var haveSel = sel.length > 0;
  if(!haveSel) {
    // location.href = "/";
    // openOverlay();
  }
}

// delete overlay content (when closing)
function closeLayer(event) {
  var element = document.getElementById("ttt");
  element.outerHTML = "";
}

// open overlay
function openOverlay() {
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

  btn.onclick = closeLayer;
}
