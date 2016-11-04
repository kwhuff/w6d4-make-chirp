var signup = document.getElementById('signup')
signup.addEventListener('click', sendSignupData)

function sendSignupData(){
  var formData = new FormData()

  formData.name = document.querySelector('#name').value
  formData.email = document.querySelector('#email').value
  formData.password = document.querySelector('#password').value
  formData.file = document.querySelector('#file').files[0]

  fetch('http://38115110.ngrok.io/api/signup', {
    body: formData,
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
