import React, {Component} from 'react'

import Quakes from '../components/Quakes'

class QuakeContainer extends Component{
    
      
    render(){
      return (
        <div >
        <Quakes quakes={this.props.quakes}/>
        

        </div>
      )
    }
  }
  
  export default QuakeContainer