import './App.css';
import {React,Component} from 'react';
import axios from 'axios'
import Movies from './components/movies'


// import Card from 'react-bootstrap/Card';

class App extends Component {

  constructor(props){
super(props)
    this.state={
map:false,
searchQuery: '',
WeatherApi_Provider: [],
WeatherArray_Server: [],
moviesArray : [],
noplace:''
    }
    console.log(this.state.WeatherApi_Provider);
    console.log(this.state.WeatherApi_Server);



  }

  
submitHandler=async(e)=>{
  e.preventDefault()
try{
 await this.setState({
    searchQuery:(e.target.cityName.value)
  })
///// return weather_Api data from the Api provider  ////
let Weather_Provider_Url =`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${this.state.searchQuery}&format=json`
  let data =await axios.get(Weather_Provider_Url)
  console.log(data.data[0]);


 await this.setState({
  WeatherApi_Provider:data.data[0],
    map:true
  })
/////  return other Weather_Api data from server (server is the middleware)
let Weather_Server_Url = `https://city-explorer-api-server.herokuapp.com/weather?cityName=${this.state.searchQuery}`
let serverData =await axios.get(Weather_Server_Url)
console.log(serverData.data);
await this.setState({
  WeatherArray_Server:serverData.data,
})

/////  return other Movies_Api data from server (server is the middleware) ////////////////

let Movies_Server_Url  = `https://city-explorer-api-server.herokuapp.com/movies?cityName=${this.state.searchQuery}`;
let MoviesData =await axios.get(Movies_Server_Url)
console.log(MoviesData.data);
await this.setState({
  moviesArray: MoviesData.data
})

}


catch(err){
  
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
       <h4><b style={{'color':'tomato'}}>City Name:</b> {this.state.WeatherApi_Provider.display_name}.</h4>
      <h4><b style={{'color':'tomato'}}>Latitude : </b>{this.state.WeatherApi_Provider.lat} , Longitude : {this.state.WeatherApi_Provider.lon}</h4>
      {/* <h4><b style={{'color':'tomato'}}>Longitude :</b> {this.state.APIData.lon}</h4> */}
      
      {this.state.WeatherArray_Server.map(item=>{
return(
  <>
<h4><b style={{'color':'tomato'}}>datetime : </b>{item.datetime} , <b style={{'color':'tomato'}}>description :</b> {item.description}</h4>
{/* <h4><b style={{'color':'tomato'}}>description :</b> {item.description}</h4> */}
  </>

)

      })}
   
      <h1>{this.state.noplace}</h1>
     </div>
  }

      {this.state.map &&  <div className='img-div'>
    
        <img className='Map-Img' alt='Map-Img' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_WEATHER_API_KEY}&center=${this.state.WeatherApi_Provider.lat},${this.state.WeatherApi_Provider.lon}&zoom=10` }/>
        </div>
        }


</div>


  <div className='Movies-Div'>

    {this.state.moviesArray.map(ele=>{
return <Movies data={ele} key={ele.id}/>

    })
   
  }
  </div>
  {this.state.map &&
  <footer>
  &copy;mamoun Bursi
  </footer>
  }
      </>
    )
  }
}
export default App;
