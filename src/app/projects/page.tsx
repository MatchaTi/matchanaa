import Header from "@/components/ui/header"
import { fetchPages } from "@/lib/notion"
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const metadata = {
  title: "Projects | Matchanaa",
  description: "Projects that I've been working on",
}

export default async function Projects() {
  const pages = await fetchPages();

  return (
    <section className='h-full w-full'>
      <div className='mb-6'>
        <Header>{`Projects that I've been working on✍`}</Header>
      </div>
      <ul className='grid h-full min-h-fit w-full grid-cols-2 gap-2 overflow-y-auto'>
        {pages.results.map((page) => (
          <li key={page.id} className='rounded border border-lighterBackground p-4'>
            <Link href={page.properties.link.rich_text[0].plain_text} target='_blank' className='flex h-full w-full flex-col gap-3'>
              <div className='flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center'>
                <Icon icon='octicon:repo-16' />
                {page.properties.Name.title[0].plain_text}
              </div>
              <div className='text-xs'>
                {page.properties.description.rich_text[0].plain_text}
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                {page.properties.icon.multi_select.map((icon) => (
                  <Icon key={icon.name} icon={icon.name} className='text-xs text-whiteCustom' />
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

