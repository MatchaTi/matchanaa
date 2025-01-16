type HeaderProps = {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <h2 className='text-lg'>{children}</h2>
  )
}

