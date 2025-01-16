type BadgeProps = {
  children: React.ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className='rounded bg-lighterBackground px-1 py-0.5'>{children}</div>
  )
}

