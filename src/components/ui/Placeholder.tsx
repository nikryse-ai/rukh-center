interface PlaceholderProps {
  width?: string
  height?: string
  label?: string
  bgColor?: string
  borderRadius?: string
}

export default function Placeholder({
  width = '100%',
  height = '200px',
  label = '[Фото]',
  bgColor = 'var(--green-mid)',
  borderRadius = '0',
}: PlaceholderProps) {
  return (
    <div
      style={{
        width,
        height,
        background: bgColor,
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        flexShrink: 0,
      }}
    >
      {label}
    </div>
  )
}
