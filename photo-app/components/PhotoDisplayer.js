import React from 'react'

class PhotoDisplayer extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        // var photos = [
        //     {photos: 'http://unsplash.it/600?random', caption: 'Testing 123'}
        // ]
        // this.setState({
        //     photos: response_photos
        // })

        //IF SERVER IS DOWN/OFFLINE MAKE A MOCKUP LIKE ABOVE TO WORK AROUND AND CHECK CODE>>TAKE OFF HARDCODE FROM LINE32

        fetch('https://9326a318.ngrok.io/photos')
        .then(response => response.json())
        .then((response) => {

            //console.log(response)
        
            this.setState({
                photos: response.photos
            })

        })
    }
    render() {
    var photos = this.state.photos.map((photo, i) => {
        return <div className="photo">
        <img src={'https://9326a318.ngrok.io/' + photo.photo} alt={photo.caption} />
        <span>{photo.caption}</span>
        </div>
    })
    return  <div id="photoGrid">
                <div className="photo">
                  <img src="http://unsplash.it/600?random" alt="Randomness" />
                  <span>Randomness</span>
                </div>
              </div>
          }
}

export default PhotoDisplayer
