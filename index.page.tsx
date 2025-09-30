import type { Data } from "./_data/types.ts";
import { Event } from "./events.page.tsx";

export const layout = "layouts/main.vto";
export const title = "トップ";

export default function ({ event, site, search }: Data) {
  const { events } = event;
  return (
    <>
      <h2>イベント情報</h2>
      {events.slice(0, 3).map((event, i) => <Event key={i} event={event} />)}

      <h2>開催レポート</h2>
      <ul>
        {search.pages("report", "date=desc", 3).map(({ title, url }, i) => (
          <li key={i}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>

      <h2>リンク</h2>
      <ul>
        {site.links.map(({ name, url, description }, i) => (
          <li key={i}>
            <a href={url} target="_blanc">{name}</a>
            <br />
            {description}
          </li>
        ))}
      </ul>
    </>
  );
}
