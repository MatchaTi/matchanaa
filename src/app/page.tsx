import Badge from "@/components/ui/badge";
import Header from "@/components/ui/header"
import Link from "next/link";

export default async function Home() {
  return (
    <section className='h-full w-full overflow-hidden'>
      <div className='mb-6'>
        <Header>Hi! Folks👋</Header>
      </div>
      <div className='max-h-full w-full overflow-y-auto'>
        <p className='mb-6'>
          Saya Adi Muhammad Syifai, mahasiswa dari Universitas Mulawarman yang nak jadi front-end handal
        </p>
        <ul className='w-full list-inside list-disc'>
          <li className='mb-2 flex w-full flex-wrap items-center gap-2'>
            <div className='flex min-w-fit items-center'>
              <span>🌸 Daily:</span>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              <Badge>.ts</Badge>
              <Badge>.tsx</Badge>
              <Badge>.css</Badge>
              <Badge>.py</Badge>
              <Badge>.php</Badge>
            </div>
          </li>
          <li className='mb-2 flex w-full flex-wrap items-center gap-2'>
            <div className='flex min-w-fit items-center'>
              <span>🍀 Tools:</span>
            </div>
            <div className='text-wrap'>
              EndeavourOS, Neovim, Figma, Notion
            </div>
          </li>
          <li className='mb-2 flex w-full flex-wrap items-center gap-2'>
            <div className='flex min-w-fit items-center'>
              <span>💬 Media:</span>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              <Badge>
                <Link href='https://www.linkedin.com/in/adi-muhammad-syifai-30b4362b1/' target='_blank'>Linkedin</Link>
              </Badge>
              <Badge>
                <Link href='https://www.instagram.com/adinewold' target='_blank'>Instagram</Link>
              </Badge>
              <Badge>
                <Link href='https://www.github.com/MatchaTi' target='_blank'>Github</Link>
              </Badge>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
