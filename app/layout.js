import { Ubuntu } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Background from "@/components/Background";
import MenuComponent from '@/components/MenuComponent';
import Providers from '@/ReduxGlobal/Providers';
import Backdrop from '@/components/Backdrop';
import {CookiesProvider} from "next-client-cookies/server"

const ubuntu = Ubuntu({ subsets: ['latin'],weight:["300","400","500","700"]})

export const metadata = {
  title: `Vaibhav Nayak's Creative Odyssey: A Portfolio Showcase`,
  description: `Explore the dynamic and imaginative world of Vaibhav Nayak through his meticulously curated portfolio website. As an accomplished and versatile creative professional, Vaibhav's portfolio encapsulates a journey of passion, skill, and innovation.

  Discover a kaleidoscope of projects that span various creative realms, from graphic design and digital art to web development and multimedia production. Vaibhav's commitment to excellence is evident in each piece, showcasing a keen eye for detail, a flair for storytelling, and a deep understanding of design principles.
  
  Navigate through a visually captivating array of projects that not only demonstrate Vaibhav's technical proficiency but also reflect his unique artistic voice. Whether it's a striking logo design, an immersive website interface, or a captivating illustration, each project is a testament to Vaibhav's ability to transform ideas into visual masterpieces.
  
  Immerse yourself in Vaibhav's creative process by exploring project descriptions, case studies, and behind-the-scenes insights. Gain a deeper understanding of the challenges faced, creative solutions implemented, and the thought processes that drive each project to successful fruition.
  
  Vaibhav Nayak's portfolio is not just a collection of works; it's a narrative of growth, exploration, and a commitment to pushing the boundaries of creativity. From concept to execution, each project reflects a dedication to delivering impactful and visually stunning outcomes.
  
  Whether you're seeking a talented creative collaborator, looking for inspiration, or simply appreciating the artistry of design, Vaibhav Nayak's portfolio website is a captivating destination where creativity knows no bounds. Join him on this artistic journey and witness the power of design to transform ideas into visual stories.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Background/>
        <CookiesProvider>
        <Providers>
          <Backdrop/>
          <MenuComponent/>
          <NavBar/>
          {children}
        </Providers>
        </CookiesProvider>
      </body>
    </html>
  )
}
