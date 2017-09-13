(function() {
  function test() {
    console.log("Hello!");
  }
  test();
})();


// on click on cards button show card overlay
// see ref functions - create an overlay, delete innerBox container
// card overlay contains an <object> from /post/card
// find h1 inside class card
// get all h2 in the content body of the page
// assign an h2[i+1] when Next href is clicked
// same logic for Prev
// exit cards on click, add an X or Back to the article button


// –––

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

notesArray = []; // store all H2 headings
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
  // element.outerHTML = "";
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
  // curr,
  box;

function createOverlay() {
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var btn = document.createElement('button');
  box = div;
  var innerBox = div2;

  box.id = "box";
  box.className = "hidden";

  box.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:999;background:#f2f2f2;paddding:0;';

  innerBox.style.cssText = 'position:relative;width:calc(100%);height:calc(100%);margin:0;';

  btn.textContent = "close and go back";
  btn.style.cssText = 'position:fixed;top:40px;right:30px;width:120px;height:40px;cursor:pointer;';

  box.appendChild(innerBox);
  box.appendChild(btn);
  innerBox.id = "overlay-content";

  innerBox.innerHTML=`<object type="text/html" data="" style="width: 100%;height:100%;"></object>`;
  document.body.appendChild(box);
  btn.onclick = closeLayer;
}

createOverlay();

// open overlay
function openOverlay(event) {
  event.preventDefault();

  box.className = "";

  // (function p(){
  //   mw();
    // setTimeout(p, 3000);
  // })();
  // myObject = document.getElementById("overlay-content").getElementsByTagName('object');
  // console.log(myObject);
  // console.log(myObject.length); // 1

  return false;
}

function som(event) {
  event.preventDefault();
  // console.log('shown');
  box.className = "";
}

function mev() {
  // get the object
  myObject = document.getElementById("overlay-content").getElementsByTagName('object')[0];


  for (var i = 0, l = values.length; i < l; i++) {
    // curr = urls[i];
    // document.getElementById('a' + i).addEventListener('click', function() {


      // myObject.setAttribute('data',urls[1]); // TEMP
      // console.log(urls[i]); // works
      // console.log(curr); // works
      // console.log(i); // works
      // console.log('test');
    // });
  }
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

        // console.log(values);

        for (var i = 0, l = values.length; i < l; i++) {

          valueBox = values[i].innerHTML;
          val = parseInt(valueBox);
          values[i].className += "hidden";

          // console.log(i);
          // console.log(urls);

          if (val > 0) {
            if (val === 1) {
              // console.log(valueBox);
              // console.log(i);


              values[i].insertAdjacentHTML(
                'beforebegin',
                `&thinsp;<a href="${urls[i]}" id="a${[i]}" onclick="return som(event)" class="counter-wrapper"><span class="counter counter-valid">${valueBox}
                reference</span></a>`
              );

              // console.log(urls[i]+ ' urls');
              // console.log(i);

            } else {

              values[i].insertAdjacentHTML(
                'beforebegin',
                `&thinsp;<a href="${urls[i]}" id="a${[i]}" onclick="return som(event)" class="counter-wrapper"><span class="counter counter-valid">${valueBox}
                references</span></a>`
              );

              // myObject = document.getElementById("overlay-content").getElementsByTagName('object');
              // myObject[0].setAttribute('data',urls[i]);

              valueBox = val + ' references';

              // console.log(urls[i]+ ' urls');
              // console.log(i);


              // if (!document.getElementById("box").length > 0) {}
            }
          }
        }
      }
      generate();
    }
    insertBlock();
  })();
  // anchors = document.getElementsByClassName('counter-wrapper');


  // prototype
  function again() {

    function geta() {
      anchors = document.getElementsByClassName('counter-wrapper');
      // console.log(anchors[0] + ' geta');
    }

    geta();

    // console.log(anchors[0]);
    // console.log(anchors.length);
    // console.log(anchors);

    var a = ['a', 'b', 'c'];

    a.forEach(function(el) {
      // console.log(el); // works
      // console.log('lala'); // works
      // var roar = function() {
      //   each.addEventListener('click', function() {
          // mev();
      //   });
      // }
    });

    // console.log(anchors.length);

    mev(); // get the object

    // gets each anchor's id
    for (var i = 0, l = anchors.length; i < l; i++) {
      var molly = function(index) {
        anchors[index].addEventListener("click", function() {
          // alert ("You clicked par #: " + anchors[index].id);
          ids[index] = anchors[index].id; // works
          // console.log(ids);
          // var result = ids.map(function(x) {
            // console.log('me');
            // return parseInt(x, 10);

          // });

          // console.log(result);
          // console.log(parseInt(ids[index]),10);
          // console.log(ids[index].substring(1)); // works !

          // console.log(myObject);
          myObject.data = anchors[index].href;

        });
      }(i);
    }


    // console.log('lolo'); // works

    // a.forEach(function(el) {
      // console.log(el);

      // el.addEventListener('click', function() {
        // mev();
      // });
    // });
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


  // if no text is selected
  // go to a page
  // function mew(event) {
  //   var sel = getSelection().toString();
  //   var haveSel = sel.length > 0;
  //   if(!haveSel) {
  //     location.href = "/";
  //   }
  // }


  // if this span (document.getElementById('a${[i]}') is clicked assign url with this [i] value)
