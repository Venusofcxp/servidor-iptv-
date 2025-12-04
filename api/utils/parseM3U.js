export default function parseM3U(m3u) {
  const lines = m3u.split("\n");
  const items = [];
  let current = {};

  for (let line of lines) {
    line = line.trim();

    if (line.startsWith("#EXTINF")) {
      const nameMatch = line.match(/,(.*)$/);
      const logoMatch = line.match(/tvg-logo="(.*?)"/);
      const groupMatch = line.match(/group-title="(.*?)"/);

      current = {
        name: nameMatch ? nameMatch[1] : "",
        logo: logoMatch ? logoMatch[1] : "",
        group: groupMatch ? groupMatch[1] : "",
      };

    } else if (line.startsWith("http")) {
      current.url = line;
      items.push(current);
      current = {};
    }
  }

  return items;
}
