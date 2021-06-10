export const getWeather = (country) => {
  return (dispatch) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=989aeb61637efc432e57044c6c5bd577`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: "GET_WEATHER_SUCCESS", payload: data.weather });
      })
      .catch((err) => {
        dispatch({ type: "GET_WEATHER_FAILED", payload: err });
      });
  };
};
