const initialState={
    weather:[],
    check:true
}
export const weatherd=(state=initialState,action)=>{
    switch(action.type){
        case "ON_CLICK":{
                    return{...state,check:true,weather:action.payload}
                }
        //case "ERROR":{return{...state,check:false}}
        default: 
                return state;
    }
}