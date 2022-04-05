import {useState} from 'react'

function sum(){

    // let a = 10;
    // let b = 20;

    let [a, changeA] = useState(0);
    let [b, changeB] = useState(0);
    return (

        <div>

        <input 
        
        onChange={e => {
            changeA(parseInt(e.target.value))
            
        }}
        
        />
        
        <input 
        
        onChange={e => {
            changeB(parseInt(e.target.value))
            
        }}
        
        />
        
        <p>sum:{a+b}</p>    
        

        </div>



    );

}

export default sum;