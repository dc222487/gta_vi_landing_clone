import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';

const App = () => {
  return (
    <main>
       <NavBar />
       <Hero />
       <FirstVideo/>
    </main>
  )
}

export default App