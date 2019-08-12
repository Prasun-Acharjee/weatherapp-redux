export const onclick=(country)=>dispatch=>
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=989aeb61637efc432e57044c6c5bd577`).then(
        (Response)=>{
            return Response.json()}).then((json)=>{dispatch({type:"ON_CLICK",payload:json.weather})
            })/*.catch((err)=>{
                console.log(err)
                dispatch({type:"ERROR"});*/
            
