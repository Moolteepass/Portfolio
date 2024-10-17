import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Monkey Media",
  description: "A portfolio for the work of Jacob McCormack",
  icons: {
    icon: "https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/Monkey+Media+transparent+small.png",
  },
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
