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

// NEED TO disable scroll for original content layer
// how to NOT TO REDRAW the object each time?
// ALSO, why the a href - need to make it open in bg with cmd

textArray = [],
urls = [], values = [];

notesArray = []; // store all H2 headings
notesArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');

// extract text without stylistic tags and
// generate urls out of every note
function refs() {
  for (i = 0, l = notesArray.length; i < l; i++) {
    textArray[i] = notesArray[i].textContent.toLowerCase();
    textArray[i] = clean(textArray[i]).substring(0,30);
  }
  for (i = 0, l = textArray.length; i < l; i++) {
    urls[i] = window.location.href.split(/\?|#/)[0] + '-ref' + '/' + textArray[i];
  }
}

// delete overlay content (when closing)
function closeLayer(event) {
  var element = document.getElementById("ttt");
  element.className = "hidden";
  // element.outerHTML = "";
}

// store all spans inside H2 headings
function val() {
  values = document
    .getElementsByClassName("page-body")[0]
    .querySelectorAll('h2 > span');

  // return values;
}

var that;
var large;

// extract text without stylistic tags and
// generate urls out of every note
function refs() {
  for (i = 0, l = notesArray.length; i < l; i++) {
    textArray[i] = notesArray[i].textContent.toLowerCase();
    textArray[i] = clean(textArray[i]).substring(0,30);
  }
  for (i = 0, l = textArray.length; i < l; i++) {
    urls[i] = window.location.href.split(/\?|#/)[0] + '-ref' + '/' + textArray[i];
  }
}

function createOverlay() {
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var btn = document.createElement('button');
  large = div;
  var cc = div2;

  large.id = "ttt";
  large.className = "hidden";

  large.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:999;background:#f2f2f2;paddding:0;';

  cc.style.cssText = 'position:relative;width:calc(100%);height:calc(100%);margin:0;';

  btn.textContent = "close and go back";
  btn.style.cssText = 'position:fixed;top:40px;left:30px;width:120px;height:40px;';

  large.appendChild(cc);
  large.appendChild(btn);
  cc.id = "overlay-content";

  cc.innerHTML=`<object type="text/html" data="" style="width: 100%;height:100%;"></object>`;
  document.body.appendChild(large);
  btn.onclick = closeLayer;
}

createOverlay();

// open overlay
function openOverlay(event) {
  event.preventDefault();

  large.className = "";

  // (function p(){
  //   mw();
    // setTimeout(p, 3000);
  // })();
  that = document.getElementById("overlay-content").getElementsByTagName('object');
  console.log(that);
  // console.log(that.length); // 1

  return false;
}

function som(event) {
  event.preventDefault();
  console.log('shown');
  large.className = "";
}

document.addEventListener("DOMContentLoaded", function(event) {
  refs(); // get the urls
  ( some = function () {
    function insertBlock() {
      val(); // gets all spans

      // gets out the seqence, 0 0 2 0
      // values[i] contains the whole span tag
      function second() {
        var
          val,
          curr,
          anchor,
          valueBox;

        for (i = 0, l = values.length; i < l; i++) {

          curr = urls[i];

          valueBox = values[i].innerHTML;
          val = parseInt(valueBox);
          values[i].className += "hidden";



          if (val > 0) {
            if (val === 1) {
              // console.log(valueBox);

              values[i].insertAdjacentHTML(
                'beforebegin',
                `<a href="${urls[i]}" id="a${[i]}" onclick="return som(event)"><span class="counter counter-valid">${valueBox}
                reference</span></a>`
              );

              // document.getElementById('a' + i).addEventListener('click', function() {
                that = document.getElementById("overlay-content").getElementsByTagName('object');
                that[0].setAttribute('data',urls[i]);
                // console.log(that.length + ' that');
              // });

              // console.log(urls[i]+ ' urls');
              console.log(curr);

            } else {

              values[i].insertAdjacentHTML(
                'beforebegin',
                `&thinsp;<a href="${urls[i]}" id="a${[i]}" onclick="return som(event)"><span class="counter counter-valid">${valueBox}
                references</span></a>`
              );

              that = document.getElementById("overlay-content").getElementsByTagName('object');
              that[0].setAttribute('data',urls[i]);

              valueBox = val + ' references';

              // console.log(urls[i]+ ' urls');
              console.log(curr);


              // if (!document.getElementById("ttt").length > 0) {}
            }
          }
        }
      }
      second();
    }
    insertBlock();
  })();

  // if no text is selected
  // go to a page
  // function mew(event) {
  //   var sel = getSelection().toString();
  //   var haveSel = sel.length > 0;
  //   if(!haveSel) {
  //     location.href = "/";
  //   }
  // }
});
