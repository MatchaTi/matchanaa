export type NotionProperties = {
  Name: {
    title: Array<{ plain_text: string }>;
  },
  description: {
    rich_text: Array<{ plain_text: string }>;
  },
  icon: {
    multi_select: Array<{ name: string }>;
  },
  link: {
    rich_text: Array<{ plain_text: string }>;
  }
}

export type NotionPage = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  properties: NotionProperties;
  url: string;
}
