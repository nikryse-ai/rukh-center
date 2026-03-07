import ProgramsInit from '@/components/layout/ProgramsInit'

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramsInit />
      {children}
    </>
  )
}
