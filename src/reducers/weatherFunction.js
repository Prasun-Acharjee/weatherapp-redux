const initialState = {
  weather: [],
  check: true,
  error: null,
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WEATHER_SUCCESS": {
      return {
        ...state,
        check: true,
        weather: action.payload.map((item) => item.description),
      };
    }

    case "GET_WEATHER_FAILED": {
      return { ...state, error: action.payload };
    }
    //case "ERROR":{return{...state,check:false}}
    default:
      return state;
  }
};
