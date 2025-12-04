import fetch from "node-fetch";
import parseM3U from "../utils/parseM3U.js";
import categorize from "../utils/categorize.js";
import { getXtreamData } from "../utils/xtream.js";

const IPTV_URL = "http://belize-transport33.sbs:80/get.php?username=Daniel2145&password=ME23824&type=m3u_plus";

async function getPlaylist() {
  const res = await fetch(IPTV_URL);
  if (!res.ok) throw new Error("Erro ao baixar playlist");
  return await res.text();
}

export default async function handler(req, res) {
  const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`);

  try {
    const playlist = await getPlaylist();
    const items = parseM3U(playlist);
    const cat = categorize(items);

    if (pathname === "/api/raw") return res.status(200).send(playlist);
    if (pathname === "/api/live") return res.status(200).json(cat.live);
    if (pathname === "/api/vod") return res.status(200).json(cat.vod);
    if (pathname === "/api/series") return res.status(200).json(cat.series);

    if (pathname === "/api/vod/info") {
      const id = searchParams.get("id");
      return res.status(200).json(await getXtreamData("get_vod_info", id));
    }

    if (pathname === "/api/series/info") {
      const id = searchParams.get("id");
      return res.status(200).json(await getXtreamData("get_series_info", id));
    }

    res.status(404).json({ error: "Rota não encontrada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
        }
