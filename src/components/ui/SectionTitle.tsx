interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionTitleProps) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '40px' }}>
      <h2
        style={{
          color: light ? '#fff' : 'var(--green-dark)',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: '12px',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: '60px',
          height: '4px',
          background: 'var(--gold)',
          borderRadius: '2px',
          margin: centered ? '0 auto 16px' : '0 0 16px',
        }}
      />
      {subtitle && (
        <p
          style={{
            color: light ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)',
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: centered ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
