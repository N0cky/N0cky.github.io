function GetLEDState() {
  nocache = "&nocache="\
                  + Math.random() * 1000000;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        if (this.responseText != null) {
          document.getElementById("LED_txt")\
          .innerHTML = this.responseText;
        }
      }
    }
  }
  request.open("GET", "LED_State" + nocache, true);
  request.send(null);
  setTimeout('GetLEDState()', 1000);
}
