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
    fetch('https://fathomless-gorge-57039.herokuapp.com/api/all')
    .then(response => response.json())
    .then((response) => { this.setState ({chirps: response.posts})
  })
}


  render() {
    // console.log(this.state.chirps)
    var chirps = this.state.chirps.map((data, i) => {
      return <Chirp data={data} key={i} />
      console.log('is this working')
    })
    return <div className='form-control mainContent'>
      {chirps}
    </div>
  }
}

export default ChirpTimeline
