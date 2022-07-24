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
        <Card.Title  style={{textAlign:'center', color:'rgb(109, 212, 6)' ,textShadow:'-1px 1px grey',margin:'1rem'}}>{this.props.data.title}</Card.Title>
        <Card.Text style={{textAlign:'center', color:'tomato'}}>
         release_date: {this.props.data.release_date} , popularity: {this.props.data.popularity}
        </Card.Text>
        <Card.Text>
        average_votes: {this.props.data.average_votes} , total_votes: {this.props.data.total_votes}
        </Card.Text>
        <Card.Text style={{textAlign:'center',color:'aliceblue'}}>
          {this.props.data.overview}
        </Card.Text>
      </Card.Body>
    </Card>
            
            </>
        )
    }
}

export default Movies