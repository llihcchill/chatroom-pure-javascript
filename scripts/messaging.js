var query = window.location.search;

if (query.startsWith("?username=") == true) {
  getUsername();
}

if (query.startsWith("?message=") == true) {
  const messageArea = document.getElementById("message-area");

  const message = document.createElement("p");
  const messageContent = document.createTextNode(query);
  message.appendChild(messageContent);

  document.body.insertBefore(message, messageArea);
}

//document.getElementById("test").innerHTML = uname;
//console.log(queryString);

//console.log(username);

function getUsername() {
  var username = window.location.search.replace(/^\?/, "");
  username = window.location.search.replace(/=.*$/, "");
  username = window.location.search.replace(/^[^=]*\=/, "");
}

function undoCookie() {
  var uname = document.cookie;
  uname = uname.replace("name/", "");
  uname = uname.replace("title=", "");

  return uname;
}
