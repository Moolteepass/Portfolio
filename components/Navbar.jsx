import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image
        className="navbar-image"
        src="https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/Monkey+Media+transparent+small.png"
        width={70}
        height={70}
        loading={"eager"}
      />
    </nav>
  )
}

export default Navbar
