export const defaultWeatherState = [
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