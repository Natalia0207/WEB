import './App.css'
import PropTypes from 'prop-types';
import { useState } from 'react'

const Challenge3 = ({value}) => {

    const [counter, setCounter] = useState(value)
    
    const handledAdd = () => {
        console.log('calling handleadd');
        setCounter (counter+1)
    }
    const resta = () => {
        console.log('calling resta');
        setCounter(counter-1)
    } 
    const reset = () => { 
        setCounter(value)
        console.log('calling reset');
    }
    return <>
        <h1> Counter </h1>
        <span> { counter } </span>
        <button onClick={()=> handledAdd ()}> +1 </button>
        <button onClick={()=> resta ()}> -1 </button> 
        <button onClick={() => reset ()}> reset </button>
        </>
   }
    FirstApp.propTypes = {
        value: PropTypes.number.isRequired,
    }
    FirstApp.defaultProps = {
        value : 0
    }
     

    export default FirstApp