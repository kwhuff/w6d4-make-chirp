import React from 'react'
import Profile from './Profile'
import NewChirp from './NewChirp'
import ChirpTimeline from './ChirpTimeline'

class ChirpsApp extends React.Component {
  constructor(props) {
    super(props)
    this.updatedChirps = this.updatedChirps.bind(this)
    this.state = {
      lastUpdatedChirps: Date.now()
    }
  }

  updatedChirps() {
    this.setState({
      lastUpdatedChirps: Date.now()
    })
  }

  render() {
    return <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <Profile />
        </div>
        <div className='col-sm-9'>
          {/* {this.props.children} */}
          <NewChirp updatedChirps={this.updatedChirps} />
          <ChirpTimeline lastUpdatedChirps={this.state.lastUpdatedChirps} />
        </div>
      </div>
    </div>
  }
}

export default ChirpsApp
