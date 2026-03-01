import SectionTitle from '@/components/ui/SectionTitle'

const projectBgs = ['#3D6B55', '#2D5140', '#4A7A63', '#4A7A63', '#2D5140', '#3D6B55']

interface Program {
  projectItems: string[]
}

export default function ProgramProjects({ program }: { program: Program }) {
  return (
    <section className="prog-projects-section">
      <div className="container">
        <SectionTitle
          title="Что создадут участники на занятиях?"
          centered
        />
        <div className="prog-projects-grid">
          {program.projectItems.map((item, i) => (
            <div key={i} className="prog-project-cell">
              <div style={{ position: 'absolute', inset: 0, background: projectBgs[i % projectBgs.length] }} />
              <div className="prog-project-label">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
