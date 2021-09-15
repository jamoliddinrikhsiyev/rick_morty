import fetch from "node-fetch";

async function fetchData(api) {
  let response = await fetch(api);
  let body = await response.json();
  //console.log(body);
  //console.log(JSON.parse(await body ).results );
  return await body;
}

export default fetchData;
