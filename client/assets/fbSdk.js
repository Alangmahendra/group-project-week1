window.fbAsyncInit = function () {
  FB.init({
    appId: '324532811395468',
    cookie: true,  // enable cookies to allow the server to access
    // the session
    xfbml: true,  // parse social plugins on this page
    version: 'v2.11' // use graph api version 2.8
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

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function (response) {
      axios.post('http://localhost:8000/api/login', {
        username: response.name,
        userId: response.id,
        accesToken: localStorage.getItem('accessToken')
      })
      .then(function (result) {
        localStorage.setItem('jwtToken', result.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log('testAPI', response);
    console.log('Successful login for: ' + response.name);
  });
}


function btnLog () {
  FB.login(function (response) {
    console.log(response, 'fooo')
    localStorage.setItem("accessToken", response.authResponse.accessToken);
    testAPI()
  }, { scope: 'public_profile,email' });
}
