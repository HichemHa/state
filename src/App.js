import { Component } from 'react';
import './App.css';


class App extends Component{
  state={
    isVisible : false,
    count:0
  }
componentDidMount(){
  setInterval(() => {
    this.setState({ count: this.state.count +1})
  }, 1000);
}

  Person = [{fullName:'Hichem',bio:'web developper junior',imgSrc:'https://fr.reactjs.org/logo-og.png',profession:'student'}]
 toggleVisibility = () =>{
   this.setState({
     isVisible : !this.state.isVisible
   })
 }
render(){
  return (
   
    <div className="App">
      <button  onClick={this.toggleVisibility}> show Profile</button>
      {this.state.isVisible ?(
      
       <header className="App-header">
       { this.Person.map((el) =><div>
           <h1>{el.fullName}</h1> 
           <h2>{el.bio}</h2>
           <img src={el.imgSrc} alt=''/>
       <h3> {el.profession}</h3>
       <h2> {new Date().toLocaleTimeString()}</h2>
       <p>{this.state.count}</p>
       </div>
       
         )}
         </header>) : (<h3> click to show profile</h3>)
      }
      
     
    </div>
  );
}
}

export default App;