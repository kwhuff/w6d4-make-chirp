import React from 'react'
import { Link } from 'react-router'

class AllChirps extends React.Component {
   constructor(props) {
       super(props)
   }
   render() {
       return <div>
       <h1>It Works!</h1>

       <Link to="/">
       <button type="button" className="btn btn-default">Home</button>
       </Link>

       <Link to="mychirps">
       <button type="button" className="btn btn-default">My Chirps</button>
       </Link>

       <Link to="followers">
       <button type="button" className="btn btn-default">Followers</button>
       </Link>

       <Link to="following">
       <button type="button" className="btn btn-default">Following</button>
       </Link>

       <div className="panel panel-default">
           <div className="panel-body">
               {this.props.children}
           </div>
       </div>


       </div>
   }
}


export default AllChirps
