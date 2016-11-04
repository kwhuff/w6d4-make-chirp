import React from 'react'
import Profile from './Profile'
import NewChirp from './NewChirp'
import ChirpTimeline from './ChirpTimeline'

class ChirpsApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <Profile />
        </div>
        <div className='col-sm-9'>
          <NewChirp />
          <ChirpTimeline />
        </div>
      </div>
    </div>
  }
}

export default ChirpsApp
