export function domestic() {
  const endpoint =
    'https://api.corona-19.kr/korea/?serviceKey=qIbeNQdow7MAvK1yYhCj54lrBkZLPG2Vi';
  return fetch(endpoint)
    .then((resp) => resp.json())
    .then((data) => {
      return new Promise((resolve) => {
        return resolve(data);
      });
    });
}
