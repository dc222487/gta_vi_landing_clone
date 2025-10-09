import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';

const App = () => {
  return (
    <main>
       <NavBar />
       <Hero />

       <FirstVideo/>
       <Jason/>

       <SecondVideo/>
       <Lucia/>
    </main>
  )
}

export default App