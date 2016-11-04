import React from 'react'

class AllChirps extends React.Component{
  constructor(props){
    super(props)
    this.updateChirps = this.updateChirps.bind(this)

    this.state = {
      chirps: []
    }
  }

  componentDidMount(){
    fetch('http://38115110.ngrok.io/api/all')
    .then(response => response.json())
    .then(this.updateChirps)
  }

  updateChirps(response) {
    console.log(response)
    this.setState({
      chirps: response
    })
  }

  render(){//run your map here
    var chirps = this.state.chirps.map((chirp, i) => {
      return <Chirp chirp={chirp} />
    })
    return <div>
      {chirps}
    </div>
  }
}
