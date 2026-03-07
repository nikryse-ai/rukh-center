import Hero from '@/components/sections/Hero'
import Banner from '@/components/sections/Banner'
import Programs from '@/components/sections/Programs'
import Gallery from '@/components/sections/Gallery'
import Objections from '@/components/sections/Objections'
import Projects from '@/components/sections/Projects'
import Reviews from '@/components/sections/Reviews'
import Team from '@/components/sections/Team'
import ContactForm from '@/components/sections/ContactForm'
import About from '@/components/sections/About'
import MapSection from '@/components/sections/MapSection'
import Wave from '@/components/ui/Wave'
import ParallaxSection from '@/components/sections/ParallaxSection'
export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxSection />
      <Wave fill="#2D5140" bgColor="#1A2E24" />
      <About />
      <Programs />
      <Banner
        text="Не знаешь с чего начать? Приходи на <strong>бесплатную консультацию</strong> и мы подберём программу!"
        buttonText="Получить консультацию"
      />
      <Wave fill="#EAF2EC" bgColor="#1A2E24" />
      <Gallery />
      <Wave fill="#2D5140" bgColor="#EAF2EC" />
      <Objections />
      <Wave fill="#EAF2EC" bgColor="#2D5140" />
      <Projects />
      <Wave fill="#fff" bgColor="#EAF2EC" />
      <Reviews />
      <Wave fill="#EAF2EC" bgColor="#fff" />
      <Team />
      <ContactForm />
      <MapSection />
    </main>
  )
}
