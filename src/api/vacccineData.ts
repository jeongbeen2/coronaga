import axios from "axios";
export function vaccine(search: string) {
  const vaccineApi = `https://infuser.odcloud.kr/oas/docs?namespace=15077756​/v1​/`;
  return axios
    .get(vaccineApi)
    .then((resp) => resp.data)
    .then((data) => {
      return new Promise((resolve) => {
        return setTimeout(() => resolve(data), 1000);
      });
    });
}
