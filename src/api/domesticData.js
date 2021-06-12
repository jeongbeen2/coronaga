export function domestic() {
  const domesticCounter =
    'https://api.corona-19.kr/korea/?serviceKey=qIbeNQdow7MAvK1yYhCj54lrBkZLPG2Vi';
  const localCounter =
    'https://api.corona-19.kr/korea/country/new/?serviceKey=qIbeNQdow7MAvK1yYhCj54lrBkZLPG2Vi';
  return Promise.all([fetch(domesticCounter), fetch(localCounter)]).then(
    ([domesticResp, localResp]) => {
      return Promise.all([domesticResp.json(), localResp.json()]).then(
        ([json1, json2]) => {
          return {
            domestic: json1,
            local: json2,
          };
        }
      );
    }
  );
}

// return fetch(domesticCounter)
// .then((resp) => resp.json())
// .then((data) => {
//   return new Promise((resolve) => {
//     return resolve(data);
//   });
// });

// return Promise.all([fetch(domesticCounter), fetch(localCounter)]).then(
//   ([domesticResp, localResp]) => {
//     return Promise.all([domesticResp.json(), localResp.json()]).then(
//       ([json1, json2]) => {
//         return {
//           domestic: json1,
//           local: json2,
//         };
//       }
//     );
//   }
// );

// return fetch(domesticCounter).then((resp1) =>
// resp1.json().then((json1) => {
//   return fetch(localCounter)
//     .then((resp2) => resp2.json())
//     .then((json2) => {
//       return {
//         domestic: json1,
//         local: json2,
//       };
//     });
// })
// );
