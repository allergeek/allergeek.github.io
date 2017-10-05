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

// close the overlay with esc key
// navigate through article references with keyboard arrows

textArray = [], anchors = [],
urls = [], values = [];

var ids = [];

// store all H2 headings
notesArray = [];
notesArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');

// extract text without stylistic tags and
// generate urls out of every H2 note
function refs() {
  for (var i = 0, l = notesArray.length; i < l; i++) {
    textArray[i] = notesArray[i].textContent.toLowerCase();
    textArray[i] = clean(textArray[i]).substring(0,30);
  }
  for (var i = 0, l = textArray.length; i < l; i++) {
    urls[i] = window.location.href.split(/\?|#/)[0] + '-ref' + '/' + textArray[i];
  }
}

// delete overlay content (when closing)
function closeLayer(event) {
  var element = document.getElementById("box");
  element.className = "hidden";
}

// store all spans inside H2 headings
function val() {
  values = document
    .getElementsByClassName("page-body")[0]
    .querySelectorAll('h2 > span');
  return values;
}

var
  myObject,
  box,
  backBtn;

// draw a hidden overlay
function createOverlay() {
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var btn = document.createElement('a');
  box = div;
  var innerBox = div2;

  box.id = "box";
  box.className = "hidden";

  box.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:999;background:#f2f2f2;paddding:0;';

  innerBox.style.cssText = 'position:relative;width:calc(100%);height:calc(100%);margin:0;';

  btn.textContent = "close and go back";
  btn.className = "action-btn";
  btn.style.cssText = 'position:fixed;top:40px;right:30px;width:auto;padding:0 18px;height:40px;line-height:40px;cursor:pointer;';

  box.appendChild(innerBox);
  box.appendChild(btn);
  innerBox.id = "overlay-content";

  innerBox.innerHTML=`<object type="text/html" id="ref-obj" data="" style="width: 100%;height:100%;"></object>`;
  document.body.appendChild(box);
  btn.onclick = closeLayer;
}

createOverlay();

// open overlay
function openOverlay(event) {
  event.preventDefault();
  // console.log('shown');
  box.className = "";
}

function getObject() {
  // get the object
  myObject = document.getElementById("overlay-content").getElementsByTagName('object')[0];


  // if object.innerHTML exists
  // ?? document.getElementById('ref-obj').contentDocument.readyState === 'complete'

  // assign an onclik event to parent card
  // backBtn = document.getElementById('ref-obj').contentDocument.getElementsByClassName("parent-card")[0].getElementsByTagName('a')[0];
  // console.log(backBtn);
}

function all() {
  refs(); // get the urls
  ( some = function () {
    function insertBlock() {
      val(); // gets all spans

      // gets out the seqence, 0 1 2 0
      // values[i] contains the whole span tag
      function generate() {
        var
          val,
          anchor,
          valueBox;

        for (var i = 0, l = values.length; i < l; i++) {

          valueBox = values[i].innerHTML;
          val = parseInt(valueBox);
          values[i].className += "hidden";

          if (val > 0) {
            if (val === 1) {

              values[i].insertAdjacentHTML(
                'beforebegin',
                `&thinsp;<a href="${urls[i]}" id="a${[i]}" onclick="return openOverlay(event)" class="counter-wrapper"><span class="counter counter-valid">${valueBox}
                reference</span></a>`
              );

            } else {

              values[i].insertAdjacentHTML(
                'beforebegin',
                `&thinsp;<a href="${urls[i]}" id="a${[i]}" onclick="return openOverlay(event)" class="counter-wrapper"><span class="counter counter-valid">${valueBox}
                references</span></a>`
              );

              valueBox = val + ' references';
            }
          }
        }
      }
      generate();
    }
    insertBlock();
  })();

  // prototype
  function again() {

    function geta() {
      anchors = document.getElementsByClassName('counter-wrapper');
    }

    geta();

    // get the object
    getObject();

    // gets each anchor's id
    for (var i = 0, l = anchors.length; i < l; i++) {
      var molly = function(index) {
        anchors[index].addEventListener("click", function() {
          ids[index] = anchors[index].id;
          myObject.data = anchors[index].href;
        });
      }(i);
    }
  }

  again();
}

if (document.readyState === 'complete') {
  all();
} else {
  document.addEventListener("DOMContentLoaded", function(event) {
    all();
  });
}
