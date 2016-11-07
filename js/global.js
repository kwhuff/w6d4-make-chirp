import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'

import ChirpsApp from '../components/ChirpsApp'

ReactDOM.render(
  <ChirpsApp />,
  document.querySelector('#mainScreen')
)

// import CMS from '../components/CMS'
// import AllChirps from '../components/AllChirps'
// import MyChirps from '../components/MyChirps'
// import Followers from '../components/Followers'
// import Following from '../components/Following'

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={ChirpsApp}>
//       <Route path="allchirps" component={AllChirps}/>
//       <Route path="mychirps" component={MyChirps}/>
//       <Route path="followers" component={Followers}/>
//       <Route path="following" component={Following}/>
//     </Route>
//   </Router>,
//   document.querySelector('#mainScreen')
// )
