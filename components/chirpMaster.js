// import React from 'react'
// import ReactDOM from 'react-dom'
//
// import MyProfile from '../components/MyProfile'
// import Following from '../components/Following'
// import Followers from '../components/Followers'
// import AllChirps from '../components/AllChirps'

// window.renderView = function() {
// ReactDOM.render(
//   <div>
//     <MyProfile />
//     <Following />
//     <Followers />
//     <AllChirps />
//   </div>,
//   document.querySelector('#mainScreen')
// )
function renderView(){
// fetch('http://38115110.ngrok.io/api/all')
.then(response => response.json())
.then(response => console.log(response))
}

renderView()
