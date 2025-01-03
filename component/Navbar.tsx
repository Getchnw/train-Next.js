import Link from "next/link";


function Navbar() {
  return (
    <nav className="flex justify-between text-2xl bg-blue-500">
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href="/info">Info</Link>
        </div>

        <div className="flex gap-4">
            <Link href="/Login">Login</Link>
            <Link href="/Register">Register</Link>
        </div>
    </nav>
  )
}
export default Navbar