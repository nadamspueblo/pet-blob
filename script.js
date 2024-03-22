let clicks = 0;
let clickAmount = 1;

function init() {
  setText("Clicks: " + clicks, "clickcount");
  addClickEvent("blob", clickBlob);
  addClickEvent("plus2", upgrade2);
  addClickEvent("plus20", upgrade20);
}

function clickBlob() {
  clicks = clicks + clickAmount;
  setText("Clicks: " + clicks, "clickcount");
  if (clicks >= 100) {
    setImage("blob2.png", "blob");
    setText("Level 2: Blob with a Hat", "level")
  }

  if (clicks >= 1000) {
    setImage("blob3.png", "blob");
    setText("Level 3: Super Blob", "level");
  }
}

function upgrade2() {
  if (clicks >= 20){
    clickAmount = 2;
    clicks = clicks - 20;
    setText("Clicks: " + clicks, "clickcount");
    setText("+2", "upgrade");
    remove("plus2");
  }
}

function upgrade20() {
  if (clicks >= 100){
    clickAmount = 20;
    clicks = clicks - 100;
    setText("Clicks: " + clicks, "clickcount");
    setText("+20", "upgrade");
    remove("plus20");
  }
}

init();
