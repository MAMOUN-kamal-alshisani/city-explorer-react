import logo from './logo.svg';
import './App.css';
import {React,Component} from 'react';
import axios from 'axios'
// 
// q: SEARCH_STRING
// format: 'json'
let key = 'pk.e61955fe34c8d6780e197c6a6aac13ea'
class App extends Component {

  constructor(props){
super(props)
    this.state={
map:false,
searchQuery: '',
APIData: [],
noplace:''
    }
    console.log(this.state.APIData);
  }

  
submitHandler=async(e)=>{
  e.preventDefault()
try{
 await this.setState({
    searchQuery:(e.target.cityName.value)
  })
let url =`https://eu1.locationiq.com/v1/search.php?key=pk.e61955fe34c8d6780e197c6a6aac13ea&q=${this.state.searchQuery}&format=json`
  let data =await axios.get(url)
  console.log(data.data[0]);

  
 await this.setState({
    APIData:data.data[0],
    map:true
  })
}catch(err){
  
alert(err)
  console.log(err)}


}

  render(){

    return(
      <>
      
      <header>
<h1>City Explorer!</h1>
      </header>
      

      <div className='form-container'>
      <form onSubmit={this.submitHandler}>
        <label htmlFor='cityName'>Enter City Name :</label>
        <input type='text' id='cityName' name='cityName' placeholder='cityName'/>
        <button type='submit' id='submit' value='explore'>Explore!</button>
      </form>
      </div>
      <div className='flex-container'>
   
      {this.state.map &&
     <div className='mapDetail'>
       <p><b style={{'color':'tomato'}}>City Name:</b> {this.state.APIData.display_name}.</p>
      <h4><b style={{'color':'tomato'}}>Latitude : </b>{this.state.APIData.lat}</h4>
      <h4><b style={{'color':'tomato'}}>Longitude :</b> {this.state.APIData.lon}</h4>
      <h1>{this.state.noplace}</h1>
     </div>
  }
    
      {this.state.map &&  <div className='img-div'>
    
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.APIData.lat},${this.state.APIData.lon}&zoom=10`}/>
        </div>
     
    
        }


</div>
   {/* {this.state.map &&
  <footer>
  &copy;mamoun Bursi
  </footer>
  } */}
      </>
    )
  }
}
export default App;
