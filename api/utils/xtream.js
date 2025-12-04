import fetch from "node-fetch";

const BASE = "http://belize-transport33.sbs:80/player_api.php?username=Daniel2145&password=ME23824";

export async function getXtreamData(action, id) {
  const url = `${BASE}&action=${action}&${action.includes("series") ? "series_id" : "vod_id"}=${id}`;

  const res = await fetch(url);
  return await res.json();
}
