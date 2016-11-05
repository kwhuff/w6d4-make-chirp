var signup = document.getElementById('signup')
signup.addEventListener('click', sendSignupData)

function sendSignupData(){
  var formData = new FormData()

  formData.append('name', document.querySelector('#name').value)
  formData.append('email', document.querySelector('#email').value)
  formData.append('password', document.querySelector('#password').value)
  formData.append('file', document.querySelector('#file').files[0])

  fetch('https://fathomless-gorge-57039.herokuapp.com/api/signup', {
    body: formData,
    method: 'POST',
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
