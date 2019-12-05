import { key } from "./key";

export const getData = (page, query) => {
  const url = `https://content.guardianapis.com/search?api-key=${key}&p=${page}&q=${query}`;

  console.log(page, "page");

  return fetch(url)
    .then(res => res.json())
    .then(responseJSON => {
      return responseJSON.response;
    })
    .catch(err => console.log(err, "error"));
};
