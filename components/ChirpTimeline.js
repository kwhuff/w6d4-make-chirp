import React from 'react'
import Chirp from './Chirp'

class ChirpTimeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chirps: []
    }
  }

  componentDidMount() {
    fetch('https://ngrok.io/api/all')
    .then(response => response.json())
    .then(response => {
      this.setState({
        chirps: response
      })
    })
  }

  render() {
    var chirps = this.state.chirps.map((chirp, i) => {
      return <Chirp data={chirp} key={i} />
    })

    return <div className='form-control mainContent'>
      {chirps}
    </div>
  }
}

export default ChirpTimeline
