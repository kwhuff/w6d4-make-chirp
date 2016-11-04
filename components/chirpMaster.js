import React from 'react'
import ReactDOM from 'react-dom'

import MyProfile from '../components/MyProfile'
import Following from '../components/Following'
import Followers from '../components/Followers'
import AllChirps from '../components/AllChirps'

window.renderView = function() {
ReactDOM.render(
  <div>
    <AllChirps data={data} />
  </div>,
  document.querySelector('#mainScreen')
)
function renderView(){

}

renderView()
