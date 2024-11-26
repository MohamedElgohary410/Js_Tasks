var CookieLib = {
  getCookie: function(cookieName) {
      var name = cookieName + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  },

  setCookie: function(cookieName, cookieValue, expiryDate) {
      var expires = "";
      if (expiryDate) {
          expires = "; expires=" + expiryDate.toUTCString();
      }
      document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
  },

  deleteCookie: function(cookieName) {
      document.cookie = cookieName + "=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;";
  },

  allCookieList: function() {
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      var cookieList = [];
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i].trim();
          if (c) {
              cookieList.push(c);
          }
      }
      return cookieList;
  },

  hasCookie: function(cookieName) {
      return this.getCookie(cookieName) !== "";
  }
};

function registerUser() {
  var userName = document.getElementById('txtName').value;
  var userAge = document.getElementById('txtAge').value;
  var userGender = document.querySelector('input[name="userGender"]:checked').value;
  var userFavColor = document.getElementById('color').value;

  CookieLib.setCookie("userName", userName);
  CookieLib.setCookie("userAge", userAge);
  CookieLib.setCookie("userGender", userGender);
  CookieLib.setCookie("userFavColor", userFavColor);
  CookieLib.setCookie("visitCount", 0);


  location.href = "index.html";
}

function displayGreeting() {
  var userName = CookieLib.getCookie("userName");
  var userGender = CookieLib.getCookie("userGender");
  var userFavColor = CookieLib.getCookie("userFavColor");
  var visitCount = parseInt(CookieLib.getCookie("visitCount")) || 0;


  visitCount++;
  CookieLib.setCookie("visitCount", visitCount);

 
  var profilePic = userGender === "male" ? "Images/1.jpg" : "Images/2.jpg";


  var greetingMessage = "Welcome " + userName + "! You have visited this site " + visitCount + " times.";
  

  document.body.innerHTML = `
      <div style="color: ${userFavColor};">
          <h1>${greetingMessage}</h1>
          <img src="${profilePic}" alt="Profile Picture">
      </div>
  `;
}

//EX
if (CookieLib.hasCookie("userName")) {
  displayGreeting();
} else {
  
  registerUser("ammar", "male", "blue");
} 