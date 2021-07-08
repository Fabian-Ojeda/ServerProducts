function showProducts(){
  var table = document.getElementById('contentProducts');
  table.innerHTML='';
  var httprq = new XMLHttpRequest();
    httprq.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(httprq.responseText);
          for (x of response) {
            table.innerHTML += `<tr>
          <td>${x.name}</td>
          <td>${ x.price}</td>
          </tr>`
          }
        }
      };
    httprq.open("GET", "http://localhost:3030/showProducts", true);
    httprq.send();
  
  
  document.getElementById('tableProducts').style.display = 'block';
}

function showCats(){
    var httprq = new XMLHttpRequest();
    httprq.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(httprq.responseText)
            document.getElementById("catimg").src=response.webpurl
        }
    };
    httprq.open("GET", "https://thatcopy.pw/catapi/rest/", true);
    httprq.send();
}