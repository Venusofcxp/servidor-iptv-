export default function categorize(items) {
  return {
    live: items.filter(i =>
      i.group.toLowerCase().includes("channel") ||
      i.url.includes("live")
    ),
    vod: items.filter(i =>
      i.group.toLowerCase().includes("movie") ||
      i.url.includes("vod")
    ),
    series: items.filter(i =>
      i.group.toLowerCase().includes("series") ||
      i.url.includes("series")
    )
  };
}
