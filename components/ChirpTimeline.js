import React from 'react'
import Chirp from './Chirp'
import NewChirp from './NewChirp'

class ChirpTimeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chirps: []
    }
    this.updateChirps = this.updateChirps.bind(this)
  }

  componentDidMount() {
    this.updateChirps()
  }

  componentWillReceiveProps() {
    this.updateChirps()
  }

  updateChirps(){
    fetch('https://fathomless-gorge-57039.herokuapp.com/api/all')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => this.setState({chirps: response.posts}))
  }




  render() {
    // console.log(this.state.chirps)
    var chirps = this.state.chirps.map((data, i) => {
      return <Chirp data={data} key={i} />
    })
    return <div>
      {chirps}
    </div>
  }
}

export default ChirpTimeline
