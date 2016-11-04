import React from 'react'
import { Link } from 'react-router'

class AllChirps extends React.Component{
  constructor(props){
    super(props)
    this.updateChirps = this.updateChirps.bind(this)

    this.state = {
      chirp: '',
      name: '',
      file: ''
    }
  }

  componentDidMount(){
    fetch('http://38115110.ngrok.io/api/all')
    .then(response => response.json())
    .then(response => console.log(response))
    .then(this.updateChirps)
  }

  updateChirps(response) {
    // console.log(response)
    this.setState({
      chirp: response.user.chirp,
      name: response.user.name,
      file: response.user.file
    })
  }

  render(){
    return <div>
    <h1>hi</h1>
    </div>
  }
}
export default AllChirps
