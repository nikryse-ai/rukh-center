import Link from 'next/link'
import Placeholder from '@/components/ui/Placeholder'

interface Program {
  title: string
  fullDesc: string
  bgColor: string
}

export default function ProgramHero({ program }: { program: Program }) {
  return (
    <section className="prog-hero">
      <div className="container">
        <div className="prog-hero-grid">
          <div>
            <h1 className="prog-hero-h1">{program.title}</h1>
            <p className="prog-hero-desc">{program.fullDesc}</p>
            <Link href="#contact" className="btn-gold">
              Записаться
            </Link>
          </div>
          <div>
            <Placeholder
              height="360px"
              bgColor={program.bgColor}
              label="[Фото программы]"
              borderRadius="16px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
