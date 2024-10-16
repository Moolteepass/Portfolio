"use client"

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image
          className="navbar-image"
          src="https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/Monkey+Media+transparent+small.png"
          width={70}
          height={70}
          loading={"eager"}
          alt="Monkey Media Logo"
          priority
        />
      </Link>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
