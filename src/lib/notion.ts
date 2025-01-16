import { NotionPage } from '@/type/notionType';
import { Client } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'
import 'server-only';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const fetchPages = React.cache(async (): Promise<{results: NotionPage[]}> => {
  const response = (await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  })) as QueryDatabaseResponse

  return {results: response.results as NotionPage[]}
})
