import { key } from "./key";
import { URL, URLSearchParams } from "url";

export const getData = (query, page) => {
  // let url = new URL(`https://content.guardianapis.com/search?api-key=${key}`);
  // console.log(URL, "URL");
  // let params = { section: query };
  // url.search = new URLSearchParams(params).toString();

  let url = `https://content.guardianapis.com/search?api-key=${key}&q=${query}&page=${page}`;

  return fetch(url)
    .then(res => res.json())
    .then(responseJSON => {
      return responseJSON.response;
    })
    .catch(err => console.log(err, "error"));
};
