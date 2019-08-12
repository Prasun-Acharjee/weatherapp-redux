import React from 'react';
export const CountryList=(props)=>{
    
    return(
        <div>
           <input value={props.value} placeholder="Country..." onChange={props.change} type="text"/>
           <button onClick={()=>props.onclick(`${props.value}`)}>Send</button>

        </div>
    );
}