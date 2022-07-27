// import Card from 'react-bootstrap/Card';
import {React,Component} from 'react';
import {Button, Card,Col ,Row, Container  } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Movies extends Component{

    constructor(props) {
        super(props);
        
        this.state={
      
        }
        
    }
    


    render(){

        return(
            <>

           <Card style={{ width: '24rem' }} className='Movies-Card'>
      <Card.Img variant="top" src={this.props.data.image_url} alt={this.props.data.title} style={{textAlign:'center', maxHeight:'18rem',color:'grey'}}/>
      <Card.Body>
        <Card.Title  style={{textAlign:'center', color:'white' ,textShadow:'-1px 1px grey',margin:'1rem'}}><b style={{color:'tomato' , textShadow:'-1px 1px black'}}>Title:</b> {this.props.data.title}</Card.Title>
        <Card.Text style={{textAlign:'center', color:'white' }}>
        <b style={{color:'tomato', textShadow:'-1px 1px black'}}> Release_date: </b>{this.props.data.release_date} , <b style={{color:'tomato' , textShadow:'-1px 1px black'}}>Popularity: </b>{this.props.data.popularity}
        </Card.Text>
        <Card.Text>
        <b style={{color:'tomato', textShadow:'-1px 1px black'}}>Average_votes: </b> {this.props.data.average_votes} , <b style={{color:'tomato' , textShadow:'-1px 1px black'}}> Total_votes: </b> {this.props.data.total_votes}
        </Card.Text>
        <Card.Text style={{textAlign:'center',color:'aliceblue'}}>
        <b  style={{color:'tomato' , textShadow:'-1px 1px black'}}>Description: </b> {this.props.data.overview}
        </Card.Text>
      </Card.Body>
    </Card>
            
            </>
        )
    }
}

export default Movies