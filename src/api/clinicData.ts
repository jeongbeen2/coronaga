import axios from "axios";
const { CLINIC } = require("./personalKey")[0];
export function clinic(search: string) {
  let SEARCH;
  let goon = ["가평", "가평시", "양평", "양평시", "연천", "연천시"];
  let lastWord = search[search.length - 1];
  if (search) {
    // 군
    if (goon.includes(search)) {
      SEARCH = `${search}군`;
    } else if (lastWord === "시" || lastWord === "군") {
      SEARCH = `${search}`;
    } else {
      SEARCH = `${search}시`;
    }
  }
  SEARCH = SEARCH === undefined ? "" : SEARCH;

  const clinicApi = `https://openapi.gg.go.kr/EmgMedInfo?KEY=${CLINIC}&type=json&SIGUN_NM=`;
  console.log("검색 :", SEARCH);
  return axios
    .get(`${clinicApi}${SEARCH}`)
    .then((resp) => resp.data)
    .then((data) => {
      return new Promise((resolve) => {
        return setTimeout(() => resolve(data), 1000);
      });
    });
}
