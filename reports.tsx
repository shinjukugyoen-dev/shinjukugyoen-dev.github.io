import type { Data } from "./types.ts";

export const layout = "layouts/main.vto";
export const title = "開催レポート";

export default function ({ title, search }: Data) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {search.pages("report", "date=desc").map(({ title, url }, i) => (
          <li key={i}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
