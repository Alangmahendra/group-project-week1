
function statusChangeCallback(response) {
  if (response.status === 'connected') {
    testAPI();
  } else {
    // The person is not logged into your app or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    localStorage.setItem("accessToken", response.authResponse.accessToken);
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '324532811395468',
    cookie: true,  // enable cookies to allow the server to access
    // the session
    xfbml: true,  // parse social plugins on this page
    version: 'v2.11' // use graph api version 2.8
  });

 
  FB.getLoginStatus(function (response) {
    console.log(response);
    statusChangeCallback(response);
  });

};

// Load the SDK asynchronously
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function (response) {
    console.log('testAPI', response);
    login(response)
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}

function login(resp) {
  axios.post('http://localhost:8000/api/login', {
    username: resp.name,
    userId: resp.id,
    accessToken: localStorage.getItem('accessToken')
  })
    .then(function (response) {
      console.log(response, 'ini token dari sever');
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log('ini resp', resp.name);
}