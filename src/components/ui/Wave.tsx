interface WaveProps {
  fill: string        // цвет волны (цвет следующей секции)
  bgColor?: string    // фон текущей секции под волной
  flip?: boolean      // перевернуть волну
}

export default function Wave({ fill, bgColor = 'transparent', flip = false }: WaveProps) {
  return (
    <div
      style={{
        lineHeight: 0,
        background: bgColor,
        transform: flip ? 'scaleX(-1)' : 'none',
        marginTop: -2,
        marginBottom: -2,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '90px', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,45 C240,90 480,0 720,45 C960,90 1200,10 1440,45 L1440,90 L0,90 Z"
          fill={fill}
          stroke={fill}
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
