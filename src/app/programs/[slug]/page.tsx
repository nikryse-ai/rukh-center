import { notFound } from 'next/navigation'
import { programs, getProgramBySlug } from '@/lib/programs'
import ProgramHero from '@/components/program/ProgramHero'
import ProgramProjects from '@/components/program/ProgramProjects'
import ProgramModules from '@/components/program/ProgramModules'
import ProgramPricing from '@/components/program/ProgramPricing'
import ContactForm from '@/components/sections/ContactForm'

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug)
  if (!program) return {}
  return {
    title: `${program.title} — РУХ Молодёжный Центр`,
    description: program.shortDesc,
  }
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug)
  if (!program) notFound()

  return (
    <main>
      <ProgramHero program={program} />
      <ProgramProjects program={program} />
      <ProgramModules />
      <ProgramPricing />
      <ContactForm />
    </main>
  )
}
