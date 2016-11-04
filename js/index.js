var login = document.querySelector('#login')


login.addEventListener('keypress', loginHandler)
login.addEventListener('click', loginHandler)

function signedupRedirect(data){
 sessionStorage.setItem('chirp', data.user.api_token)
 window.location.href = '/postLogin.html'
}

function searchEnter(event) {
    // console.log(event)
    if (event.key === 'Enter') {
        search()
    }
}

function loginHandler() {

  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value
  console.log(email, password)

  alert ("Hello World!");

  fetch('http://38115110.ngrok.io/api/login', {
    body: JSON.stringify({
      email: email,
      password: password
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(signedupRedirect)

}

function signedinHandler(response) {
  // console.log(response)
  sessionStorage.setItem('chirp', response.user.api_token)
  window.location.href = '/photos.html'

  document.cookie = 'chirp=' + response.user.api_token + '; expires=Thu, 2 Aug 2001 20:47:11 UTC'
}

// function signedupHandler(response) {
//   if (typeof response.user != 'undefined') {
//     sessionStorage.setItem('phetchly', response.user.api_token)
//     window.location.href = '/photos.html'
//   }
//   else {
//     response.forEach(function(error) {
//
//       var errorDiv = document.createElement('div')
//       errorDiv.classList.add('alert', 'alert-danger')
//       errorDiv.innerHTML = error
//       document.querySelector('#errors').appendChild(errorDiv)
//
//     })
//   }
// }

// function loginHandler() {
//
//   var email = document.querySelector('#email').value
//   var password = document.querySelector('#password').value
//
//   fetch('http://38115110.ngrok.io/log_in', {
//     body: JSON.stringify({
//       email: email,
//       password: password
//     }),
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(signedinHandler)
//
// }
//
// function signedinHandler(response) {
//   // console.log(response)
//   sessionStorage.setItem('phetchly', response.user.api_token)
//   window.location.href = '/photos.html'
//
//   //document.cookie = 'phetchly=' + response.user.api_token + '; expires=Thu, 2 Aug 2001 20:47:11 UTC'
// }
