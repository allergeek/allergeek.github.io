(function() {
  function test() {
    console.log("Hello!");
  }
  test();
})();

var
  cardBox,
  cardObject,
  textBox,
  card;

var num = 0;

function cardOverlay() {
  var div = document.createElement('div');
  var div2 = document.createElement('div');
  var btn = document.createElement('a');
  cardBox = div;
  var innerBox = div2;

  cardBox.id = "card-box";

  cardBox.className += " hidden";

  innerBox.style.cssText = '';
  innerBox.className = "inner-box";

  btn.textContent = "close and go back";
  btn.className = "action-btn";
  btn.className += " close-btn";

  cardBox.appendChild(innerBox);
  cardBox.appendChild(btn);
  innerBox.id = "overlay-content";

  innerBox.innerHTML=`<object type="text/html" id="card-obj" data="" class="card-obj"></object>`;
  document.body.appendChild(cardBox);
  btn.onclick = closeBLayer;
}

cardOverlay();

// delete overlay content (when closing)
function closeBLayer(event) {
  var element = document.getElementById("card-box");
  element.className = "hidden";
}

// set the card as the container for h1
function slugBox() {
  textBox = document.getElementById('card-obj').contentDocument.getElementsByTagName('h1')[0];
  textBox.innerHTML = slug[0];
  console.log('slugged');
  return textBox;
}

function loadCard(event) {
  event.preventDefault();
  cardBox.classList.remove("hidden");
  cardBox.className += "card-box";
  return false;
}

function button() {
  var holder;
  holder = document.getElementsByClassName("print-obj");
  for (var i = 0, l = holder.length; i < l; i++) {
    holder[i].insertAdjacentHTML(
      'beforebegin',
      '<a href="#1" onclick="return loadCard(event)"><input type="submit" value="&#9655;&nbsp;&nbsp;show cards" class="button chimp-input print-btn"></a>'
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
  if (num < slug.length - 1) {
    for (let i = num, l = slug.length; i < l ; i++) {
      num = i + 1;
      return slug[num];
    }
  } else {
    return slug[num];
  }
}

function prevItem() {
  if (num > 0) {
    for (let i = num, l = slug.length + 1; i < l ; i--) {
      num = i - 1;
      return slug[num];
    }
  } else {
    return slug[num];
  }
}

function fillNext() {
  textBox.innerHTML = nextItem();
  console.log('next');
  console.log(num);
}

// assign actions to prev and next
function nextNote() {
  var next;
  next = document.getElementById('card-obj').contentDocument.getElementById('next-note');
  next.addEventListener('click', function(event) {
    fillNext();
  });
}

function prevNote() {
  var prev;

  prev = document.getElementById('card-obj').contentDocument.getElementById('prev-note');
  prev.addEventListener('click', function(event) {
    textBox.innerHTML = prevItem();
    console.log('prev');
    console.log(num);
  });
}

// when the card with h1 is clicked load next
function cardClick() {
  card = document.getElementById('card-obj').contentDocument.getElementById('slug-box');
  card.addEventListener('click', function(event) {
    fillNext();
  });
}

function backToPost() {
  var paerntCard;
  parentCard = document.getElementById('card-obj').contentDocument.getElementById("parent-card");
  parentCard.onclick = closeBLayer;
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
  cardClick();
  backToPost()
  console.log('yes');
} else {
  document.getElementById('card-obj').addEventListener('load', function(event) {
    slugBox();
    nextNote();
    prevNote();
    cardClick();
    backToPost()
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

// + assign an h2[i+1] when Next href is clicked
// + same logic for Prev

// + exit cards on click, add an X or Back to the article button
// + create and assign css classes for rendered elements, instead of inline css
