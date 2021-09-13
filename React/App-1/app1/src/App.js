import React, {Component} from 'react';
import './App.css'
import * as styles from './styles';
import Component1 from './functional/component1';
import Contanier1 from './containers/contanier1';
import ReduxContainer from './containers/reduxContainer';
import Routes from './routes';

class App extends Component{

  renderFunction1 = () => {
    if(true){
      return(
        <div>
          Condition 11
        </div>
      )
    } else{
      return (
        <div>
          Condition 2
        </div>
      )
    }
  }
  
  render() {
   /*
    {true
          ? true ? <div>Condition 1 </div> : <div> Condition 2 </div>
          : false ? <div> Condition 3 </div> : <div> Condition 4 </div>
        }
        <br/>
        {this.renderFunction1()}


       <Component1 name='moe' age={25}/>
       <Contanier1 nickname='Mo'/>
       {}

   */


     return (
      <div className="App">
        <Routes/>
        
       
       
       
      </div>
    );
  
    
    
  }
}


export default App;
