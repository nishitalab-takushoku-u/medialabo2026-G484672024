
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("経度:", data.coord.lon);
  console.log("緯度:", data.coord.lat);
  console.log("天気:", data.weather[0].description);
  console.log("最低気温:", data.main.temp_min);
  console.log("最高気温:", data.main.temp_max);
  console.log("湿度:", data.main.humidity);
  console.log("風速:", data.wind.speed);
  console.log("風向:", data.wind.deg);
  console.log("都市名:", data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let oldResult = document.querySelector('#result');
    if (oldResult !== null) {
        oldResult.remove();
    }
    
    let resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.body.appendChild(resultDiv);

    let h2City = document.createElement('h2');
    h2City.textContent = '都市情報';
    resultDiv.appendChild(h2City);

    let ulCity = document.createElement('ul');
    resultDiv.appendChild(ulCity);

    let liName = document.createElement('li');
    liName.textContent = '都市名: ' + data.name;
    ulCity.appendChild(liName);

    let liLon = document.createElement('li');
    liLon.textContent = '経度: ' + data.coord.lon;
    ulCity.appendChild(liLon); 

    let liLat = document.createElement('li');
    liLat.textContent = '緯度: ' + data.coord.lat;
    ulCity.appendChild(liLat);

    let h2Weather = document.createElement('h2');
    h2Weather.textContent = '天気情報'
    resultDiv.appendChild(h2Weather);

    let liWeather = document.createElement('li');
    liWeather.textContent = '天気: ' + data.weather[0].description;
    resultDiv.appendChild(liWeather);

    let liTempMin = document.createElement('li');
    liTempMin.textContent = '最低気温: ' + data.main.temp_min + '度';
    resultDiv.appendChild(liTempMin);

    let liTempMax = document.createElement('li');
    liTempMax.textContent = '最高気温: ' + data.main.temp_max + '度';
    resultDiv.appendChild(liTempMax);

    let liHumidity = document.createElement('li');
    liHumidity.textContent = '湿度: ' + data.main.humidity + '%';
    resultDiv.appendChild(liHumidity);

    let liWind = document.createElement('li');
    liWind.textContent = '風速: ' + data.wind.speed + 'm/s';
    resultDiv.appendChild(liWind);

    let liWindDeg = document.createElement('li');
    liWindDeg.textContent = '風向: ' + data.wind.deg + '°';
    resultDiv.appendChild(liWindDeg);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
const btn = document.querySelector('#search');
btn.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let selectedCity = document.querySelector('#cityId').value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + selectedCity + '.json';

  axios.get(url)
       .then(showResult)
       .catch(showError)
       .then(finish)
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if(typeof data === 'string') {
    data = JSON.parse(data);
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

