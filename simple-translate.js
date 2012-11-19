var translateSelection = function(string) {
  var query = "select * from google.translate where q=\""+string+"\" and target=\"pt-br\""
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&env=store://datatables.org/alltableswithkeys", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      alert(JSON.parse(xhr.responseText).query.results.json.json[0].json.json[0]);
    }
  }
  xhr.send();  
}

var root = chrome.contextMenus.create({
  'title': "Traduzir '%s' para Inglês",
  'contexts': ['selection'],
  'onclick': function(info, tab) {
    translateSelection(info.selectionText);
  }
});