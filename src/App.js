
import { useState} from 'react'
import App1 from './App1'


function App(){

      const [state,setState]=useState({
        counter:0,
        isActive:true
      });

    const increment=()=>{
      if(state.counter<=9){
        setState({
         counter:state.counter+1
        })
        document.getElementById("decrement").disabled=false;
      }
      else{
        document.getElementById("increment").disabled=true;
      }
    }

    const decrement=()=>{
      if(state.counter>=1){
        setState({
          counter:state.counter-1
        })
        document.getElementById("increment").disabled=false;
      }
      else{
        document.getElementById("decrement").disabled=true;
      }
    }

      const disableButton=()=>{
      document.getElementsByClassName("blockElement")[0].disabled = state.isActive;
      document.getElementsByClassName("blockElement")[1].disabled = state.isActive;
      if(state.isActive===true){
      state.isActive=false;
      }
      else{
        state.isActive=true;
      }


      }


   
    return (
      <div>
        <button id="decrement" className="blockElement" onClick={decrement} 
      
        > - </button>
        <span>
          <App1 value={state.counter}/>
        </span>
        <button id="increment" className="blockElement" onClick={increment} > + </button>
        <p>
          
           <button onClick={disableButton} >disable</button>  

        </p>
      </div>


    )

  }
  
  export default App;