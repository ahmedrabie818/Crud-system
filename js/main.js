var nameInput = document.getElementById("siteNameInput");
var urlInput = document.getElementById("siteUrlInput");
var siteList = [];
if (localStorage.getItem("sites") != null) {
  siteList = JSON.parse(localStorage.getItem("sites"));
  DisplaySites();
}

function addSite() {
  if (validationName() == true && validationUrl() == true) {
    var site = {
      name: nameInput.value,
      url: urlInput.value,
    };
    siteList.push(site);
    localStorage.setItem("sites", JSON.stringify(siteList));

    DisplaySites();
  } else {
    document.getElementById("layer").classList.remove("d-none");
  }
}
function DisplaySites() {
  var cartona = "";
  for (var i = 0; i < siteList.length; i++) {
    cartona += `
        <tr>
            <td>${i + 1}</td>
            <td>${siteList[i].name}</td>
            <td>
            <a href="${siteList[i].url}" target="_blank">
            <button class="btn btn-success">Visit</button>
            </a>
            </td>
            <td>
            <button class="btn btn-danger" onclick="deleteSite(${i})">Delete</button>
            </td>
          </tr>
        
        `;
  }
  document.getElementById("tableContent").innerHTML = cartona;
}
function deleteSite(index) {
  siteList.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(siteList));
  DisplaySites();
}

function validationName() {
  var validName = /^[a-z]{3,}$/;
  var text = nameInput.value;

  if (validName.test(text)) {
    document.getElementById("siteNameInput").classList.remove("is-invalid");
    document.getElementById("siteNameInput").classList.add("is-valid");
    return true;
  } else {
    document.getElementById("siteNameInput").classList.remove("is-valid");
    document.getElementById("siteNameInput").classList.add("is-invalid");
    return false;
  }
}

function validationUrl() {
  var validUrl = /^(www\.)[a-z]{3,}(\.com)$/;
  var text = urlInput.value;

  if (validUrl.test(text)) {
    document.getElementById("siteUrlInput").classList.remove("is-invalid");
    document.getElementById("siteUrlInput").classList.add("is-valid");

    return true;
  } else {
    document.getElementById("siteUrlInput").classList.remove("is-valid");
    document.getElementById("siteUrlInput").classList.add("is-invalid");

    return false;
  }
}
function hide() {
  document.getElementById("layer").classList.add("d-none");
}
