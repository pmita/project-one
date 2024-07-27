// NEXT
import Link from 'next/link'

export default async function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto bg-neutral py-8 px-5 flex justify-between lg:px-8">
      <Link href="/" className="text-2xl text-secondary font-bold">OurBrand</Link>
      <Link href="/contact" className="text-secondary opacity-50 font-semibold hover:opacity-90">Contact</Link>
    </nav>
  )
}