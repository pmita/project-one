export default function SigninPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container min-h-[100dvh] grid place-content-center">
      {children}
    </div>
  )
}