import Hero from '@/components/sections/Hero'
import Banner from '@/components/sections/Banner'
import Programs from '@/components/sections/Programs'
import Gallery from '@/components/sections/Gallery'
import Objections from '@/components/sections/Objections'
import Reviews from '@/components/sections/Reviews'
import Team from '@/components/sections/Team'
import News from '@/components/sections/News'
import ContactForm from '@/components/sections/ContactForm'
import MapSection from '@/components/sections/MapSection'
import Wave from '@/components/ui/Wave'
import ParallaxSection from '@/components/sections/ParallaxSection'
export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxSection />
      <Wave fill="#2D5140" bgColor="#1A2E24" />
      <Objections />
      <Wave fill="#EAF2EC" bgColor="#2D5140" />
      <Gallery />
      <Wave fill="#2D5140" bgColor="#EAF2EC" />
      <Programs />
      <Banner
        text="Не знаешь с чего начать? Приходи на <strong>бесплатную консультацию</strong> и мы подберём программу!"
        buttonText="Получить консультацию"
      />
      <Wave fill="#fff" bgColor="#1A2E24" />
      <Reviews />
      <Wave fill="#EAF2EC" bgColor="#fff" />
      <Team />
      <Wave fill="#fff" bgColor="#EAF2EC" />
      <News />
      <Wave fill="#EAF2EC" bgColor="#fff" />
      <ContactForm />
      <MapSection />
    </main>
  )
}
