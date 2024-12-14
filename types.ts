export type Data = {
  site: {
    title: string;
    description: string;
    since: string;
    contents: {
      title: string;
      path: string;
    }[];
    links: {
      name: string;
      url: string;
    }[];
  };
  // イベント情報
  event: {
    events: {
      name: string;
      description: string;
      date?: string;
      connpass?: string;
    }[];
  };
} & Lume.Data;
