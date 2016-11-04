var signup = document.getElementById('signup')
signup.addEventListener('click', sendSignupData)

// function sendSignupData(){
  // var name = document.querySelector('#name').value
  // var email = document.querySelector('#email').value
  // var password = document.querySelector('#password').value
  // var file = document.querySelector('#file')
  // console.log(name, email, password, file)
//
  // fetch('http://38115110.ngrok.io/api/signup', {
  //   body: JSON.stringify({
  //     name: name,
  //     email: email,
  //     password: password,
  //     file: file,
  //   }),
  //   method: 'POST',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   }
  // })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .then(signedupRedirect)
//
// }
// function signedupRedirect(response){
//       sessionStorage.setItem('chirp', response.user.api_token)
//       window.location.href = '/postLogin.html'
//     }

function sendSignupData(){
  var name = document.querySelector('#name').value
  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value
  var file = document.querySelector('#file')

  fetch('http://38115110.ngrok.io/api/signup', {
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      file: file,
    }),
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(signedupHandler)

}

function signedupHandler(response){
  if ( typeof response.user != 'undefined'){
    sessionStorage.setItem('chirp', response.user.api_token)
    window.location.href = '/postLogin.html'
  }
  else{
    response.forEach(function(error){

      var errorDiv = document.createElement('div')
      errorDiv.classList.add('alert', 'alert-danger')
      errorDiv.innerHTML = error
      document.querySelector('#errors').appendChild(errorDiv)
    })
  }
}
