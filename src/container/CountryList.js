import React from 'react';
export const CountryList=(props)=>{
    return(
        <div>
            <button onClick={()=>props.onclick('London')}>LONDON</button>
            <button onClick={()=>props.onclick('Delhi')}>DELHI</button>
            <button onClick={()=>props.onclick('Kolkata')}>KOLKATA</button>
            <button onClick={()=>props.onclick('New York')}>NEW YORK</button>
        </div>
    );
}