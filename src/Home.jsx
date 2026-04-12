import { StarfieldBackground } from './components/Background'
import { IslandNavbar } from './components/Navbar'




export default function Home() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-black text-white">
      <StarfieldBackground />
      <IslandNavbar />


    </main>
  )
}
