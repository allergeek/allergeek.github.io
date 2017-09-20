(function() {
  function test() {
    console.log("Hello!");
  }
  test();
})();

var
  cardBox,
  cardObject,
  textBox;

function cardOverlay() {
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var btn = document.createElement('button');
  cardBox = div;
  var innerBox = div2;

  cardBox.id = "card-box";
  cardBox.className = "hidden";

  cardBox.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:999;background:#f2f2f2;paddding:0;';

  innerBox.style.cssText = 'position:relative;width:calc(100%);height:calc(100%);margin:0;';

  btn.textContent = "close and go back";
  btn.style.cssText = 'position:fixed;top:40px;right:30px;width:120px;height:40px;cursor:pointer;';

  cardBox.appendChild(innerBox);
  cardBox.appendChild(btn);
  innerBox.id = "overlay-content";

  innerBox.innerHTML=`<object type="text/html" id="card-obj" data="" style="width: 100%;height:100%;"></object>`;
  document.body.appendChild(cardBox);
  btn.onclick = closeBLayer;
}

cardOverlay();

// delete overlay content (when closing)
function closeBLayer(event) {
  var element = document.getElementById("card-box");
  element.className = "hidden";
}

function slugBox() {
  textBox = document.getElementById('card-obj').contentDocument.getElementsByTagName('h1')[0];
  textBox.innerHTML = slug[0];
  console.log('slugged');
  return textBox;
}

function card(event) {
  event.preventDefault();
  cardBox.className = "";
  return false;
}

function button() {
  var holder;
  holder = document.getElementsByClassName("print-obj");
  for (var i = 0, l = holder.length; i < l; i++) {
    holder[i].insertAdjacentHTML(
      'beforebegin',
      '<a href="#1" onclick="return card(event)"><input type="submit" value="&#9655;&nbsp;&nbsp;show cards" class="button chimp-input print-btn"></a>'
    );
  }
}

// store all H1 headings
notesArray = [],
slug = [];

notesArray = document.getElementsByClassName("page-body")[0].getElementsByTagName('h2');

// get the object and assign a source
function cardObject() {
  var url;
  url = "/post/card";
  cardObject = document.getElementById('card-obj');
  cardObject.data = url;
}

function nextItem() {
  var i;
  i = 0;
  i = i + 1;
  i = i % slug.length; // ???
  return slug[i];
}

// assign actions to prev and next
function nextNote() {
  var next;
  next = document.getElementById('card-obj').contentDocument.getElementById('next-note');
  next.addEventListener('click', function(event) {
    textBox.innerHTML = nextItem();

    // for (i = 0, l = slug.length; i < l; i++) {
    //   if (textBox.innerHTML = slug[i]) {
    //     i += 1;
    //     textBox.innerHTML = slug[i];
    //   }
    // }
    console.log('next');
  });
}

function prevNote() {
  var prev;

  prev = document.getElementById('card-obj').contentDocument.getElementById('prev-note');
  prev.addEventListener('click', function(event) {
    textBox.innerHTML = slug[0];
    console.log('prev');
  });
}

// delete all spans inside h2
function normalize() {
  for (var i = 0, l = notesArray.length; i < l; i++) {
    var note = notesArray[i];
    var noteText = note.innerHTML;
    var normalizedText = noteText.replace(/<span.*?span>/g, "");
    console.log(normalizedText);
    slug.push(normalizedText);
  }
}

normalize();

button();
cardObject();


if (document.getElementById('card-obj').readyState === 'complete') {
  slugBox();
  nextNote();
  prevNote();
  console.log('yes');
} else {
  document.getElementById('card-obj').addEventListener('load', function(event) {
    slugBox();
    nextNote();
    prevNote();
    console.log('loaded now');
  }
)};


// + on click on cards button
// + show card overlay
// + need to delete spans from grabbed h2 content (not from the page)
// + see ref functions - create an overlay
// + card overlay contains an <object> from /post/card
// + find h1 inside class card
// + get all h2 in the content body of the page
// + assign the first h1 to card's h1
// assign an h2[i+1] when Next href is clicked
// same logic for Prev
// exit cards on click, add an X or Back to the article button
// create and assign css classes for rendered elements, instead of inline css
