const initialState={
    weather:[]
}
export const weather=(state=initialState,action)=>{
    switch(action.type){
        case 'ON_CLICK':{
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=989aeb61637efc432e57044c6c5bd577`).then(
                    (Response)=>{
                        return Response.json()
                    }).then((json)=>{return{
                        ...state,
                        weather:json.weather
                    },
                    console.log(json.weather)
                    });
                    };
        default: 
                return state;
    }
}