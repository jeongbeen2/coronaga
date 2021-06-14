import axios from 'axios';
const { DOMESTIC, LOCAL } = require('./personalKey')[0];
export function domestic() {
  const domesticCounterApi = `https://api.corona-19.kr/korea/?serviceKey=${DOMESTIC}`;
  const localCounterApi = `https://api.corona-19.kr/korea/country/new/?serviceKey=${LOCAL}`;
  return Promise.all([
    axios.get(domesticCounterApi),
    axios.get(localCounterApi),
  ]).then(([domesticResp, localResp]) => {
    return Promise.all([domesticResp.data, localResp.data]).then(
      ([json1, json2]) => {
        let obj = {
          domestic: json1,
          local: json2,
        };
        return new Promise((resolve) => {
          return setTimeout(() => resolve(obj), 1000);
        });
      }
    );
  });
}
