import type { Data } from "./types.ts";
import { Event } from "./events.tsx";

export const layout = "layouts/main.vto";
export const title = "新宿御苑.devについて";

export default function ({ title, event, site, search }: Data) {
  const { events } = event;
  return (
    <>
      <h1>{title}</h1>
      <p>
        新宿御苑.devは、
        <a href="https://www.env.go.jp/garden/shinjukugyoen/">新宿御苑</a>
        が好きなエンジニアのための地域コミュニティです。
        新宿御苑内のコワーキングスペースなどを活用したイベント開催を目的としています。
      </p>
      <p>
        新宿御苑を運営している環境省 新宿御苑管理事務所とは一切関係ありません。
      </p>

      <ul>
        {site.links.map(({ name, url }, i) => (
          <li key={i}>
            <a href={url} target="_blanc">
              {name}
            </a>
          </li>
        ))}
      </ul>

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
    </>
  );
}
