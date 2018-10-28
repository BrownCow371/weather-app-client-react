export const defaultWeatherState = [ {
    weather: [
        {
          id: '',
          main: '',
          description: '',
          icon: '' 
        }
    ],
    main: {
        temp: '',
        pressure: '',
        humidity: '',
        temp_min: '',
        temp_max: ''
      },
    visibility: '',
    wind: {
        speed: '',
        deg: '',
        gust: ''
      },
    cloud: {
        all: ''
      },
    rain: {
        "3h": ''
      },
    snow: {
        "3h": ''
      },
    dt: ''

}]


export const defaultForecastState = [
    {
        dt: '',
        main: {
            temp: '',
            temp_min: '',
            temp_max: '',
            pressure: '',
            sea_level: '',
            grnd_level: '',
            humidity:'',
            temp_kf: ''
        },
        weather: [
            {
              id: '',
              main: '',
              description: '',
              icon: ''
            }
          ],
        clouds:  {
            all: ''
          },
        wind: {
            speed: '',
            deg: ''
        },
        rain: {
             "3h": ''
         },
         snow: {
            "3h": ''
        },
        dt_txt: ""
}]