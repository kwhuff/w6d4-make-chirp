var login = document.querySelector('#login')

login.addEventListener('click', loginHandler)

function loginHandler() {

  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value
  console.log(email, password)

  fetch('http://38115110.ngrok.io', {
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
  .then(signedupHandler)

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
