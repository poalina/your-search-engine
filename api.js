import { key } from "./key";

export const getData = (page, query) => {
  const url = `https://content.guardianapis.com/search?api-key=${key}&page=${page}&q=${query}`;
  return fetch(url)
    .then(res => res.json())
    .then(responseJSON => {
      return responseJSON.response;
    })
    .catch(err => console.log(err, "error"));
};
