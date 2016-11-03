var signup = document.getElementById('signup')
signup.addEventListener('click', sendSignupData)

function sendSignupData(){
  var name = document.querySelector('#name').value
  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value
  var file = document.querySelector('#file')
  console.log(name, email, password, file)

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
  .then(response => console.log(response))
  .then(signedupRedirect)
}
  function signedupRedirect(){

  }
