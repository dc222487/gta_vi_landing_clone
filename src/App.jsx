import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import ComingSoon from './sections/ComingSoon';

const App = () => {
  return (
    <main>
       <NavBar />
       <Hero />
       <ComingSoon />
    </main>
  )
}

export default App