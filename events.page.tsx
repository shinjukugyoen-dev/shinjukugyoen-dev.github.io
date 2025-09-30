import type { Data } from "./_data/types.ts";

export const layout = "layouts/main.vto";
export const title = "イベント情報";

export function Event({ event }: { event: Data["event"]["events"][number] }) {
  const { name, description, date, connpass } = event;

  return (
    <>
      <h3>{name}</h3>
      <dl>
        <dt>概要</dt>
        <dd>{description}</dd>

        <dt>開催日</dt>
        <dd>{date ?? "準備中"}</dd>

        <dt>募集</dt>
        <dd>
          {connpass
            ? <a href={connpass} target="_blank">Connpass</a>
            : "準備中"}
        </dd>
      </dl>
    </>
  );
}

export default function ({ event, title }: Data) {
  const { events } = event;
  return (
    <>
      <h1>{title}</h1>
      <p>
        イベントに参加される方は
        <a href="/event-code-of-conduct">イベント行動規範</a>
        に従う必要があります。
      </p>
      {events.map((event, i) => <Event key={i} event={event} />)}
    </>
  );
}
