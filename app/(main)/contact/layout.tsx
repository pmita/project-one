export default function ContactPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container min-h-[90dvh] w-full grid place-items-center">
      {children}
    </main>
  )
}