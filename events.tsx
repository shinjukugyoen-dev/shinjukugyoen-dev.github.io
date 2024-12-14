export const layout = "layouts/main.vto";

export const title = "イベント開催情報";

type Data = {
  event: {
    events: {
      name: string;
      description: string;
      date?: string;
      connpass?: string;
    }[];
  };
} & Lume.Data;

export default function ({ event, title }: Data) {
  const { events } = event;
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {events.map(({ name, description, date, connpass }) => (
          <li>
            <h2>{name}</h2>
            <dl>
              <dt>概要</dt>
              <dd>{description}</dd>
              <dt>開催日</dt>
              <dd>{date ?? "準備中"}</dd>
              <dt>募集</dt>
              <dd>
                {connpass ? <a href={connpass}>Connpass</a> : "準備中"}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
