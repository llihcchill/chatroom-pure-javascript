var query = window.location.search;

if (query.startsWith("?username=") == true) {
  getQuery();
}

if (query.startsWith("?message=") == true) {
  const messageArea = document.getElementById("message-area");

  const message = document.createElement("p");
  const messageContent = document.createTextNode(getQuery());
  message.appendChild(messageContent);

  document.body.insertBefore(message, messageArea);
}

function getQuery() {
  var query = window.location.search.replace(/^\?/, "");
  query = window.location.search.replace(/=.*$/, "");
  query = window.location.search.replace(/^[^=]*\=/, "");

  return query;
}

