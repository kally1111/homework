
import {useEffect} from 'react'


function App1(props){

    useEffect(()=>{
       
        console.log('counter is'+ ''+ props.value)
      }, [props.value] )

    return (
        <p> counter is : {props.value}</p>
      )


}
export default App1