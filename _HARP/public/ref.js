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
  element.outerHTML = "";
}

// store all spans inside H2 headings
function val() {
  values = document
    .getElementsByClassName("page-body")[0]
    .querySelectorAll('h2 > span');

  // return values;
}

var that;

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

// open overlay
function openOverlay(event) {
  event.preventDefault();
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var btn = document.createElement('button');
  var large = div;
  var cc = div2;

  large.id = "ttt";

  large.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:999;background:#444;paddding:0;';

  cc.style.cssText = 'position:relative;width:calc(100%);height:calc(100%);margin:0;';

  btn.textContent = "close and go back";
  btn.style.cssText = 'position:fixed;top:40px;left:30px;width:120px;height:40px;';

  large.appendChild(cc);
  large.appendChild(btn);
  cc.id = "overlay-content";
  document.body.appendChild(large);
  // console.log(large);

  document.getElementById("overlay-content").innerHTML=`<object type="text/html" data="" style="width: 100%;height:100%;"></object>`;

  btn.onclick = closeLayer;

  // (function p(){
  //   mw();
    // setTimeout(p, 3000);
  // })();
  that = document.getElementById("overlay-content").getElementsByTagName('object');
  console.log(that);
  console.log(that.length); // 1

  return false;
}

document.addEventListener("DOMContentLoaded", function(event) {
  refs();
  ( some = function () {
    function insertBlock() {
      val();

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
              console.log(valueBox);

              values[i].insertAdjacentHTML(
                'beforebegin',
                `<a href="${urls[i]}" onclick="return openOverlay(event)"><span class="counter counter-valid">${valueBox}
                reference</span></a>`
              );

              // document.addEventListener('click', function(event) {
              //   var lol = document.getElementById("overlay-content").getElementsByTagName('object')[0];
              //   lol.data = curr;
              // });

            } else {

              values[i].insertAdjacentHTML(
                'beforebegin',
                `&thinsp;<a href="#0" id="pp" onclick="return openOverlay(event)"><span class="counter counter-valid">${valueBox}
                references</span></a>`
              );

              valueBox = val + ' references';



              // HOW TO load data attribute
              // when object tag is already created
              // after an onclick event?

              // that[0].setAttribute('data',urls[i]);


              mw = function() {
              //   // // openOverlay(event);
              //
                // var me = document.getElementById("ttt");
                // var meme = document.getElementById("ttt").getElementsByTagName('object')[0];
                // if (!document.getElementById("ttt").length > 0) {
                //
                // } else {

                  // var meme = document.getElementById("overlay-content").getElementsByTagName('object');
                  // that.setAttribute('data',urls[i]);
                // }
              }
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
