import Link from 'next/link'

interface BannerProps {
  text?: string
  buttonText?: string
}

export default function Banner({
  text = 'Приходите на <strong>бесплатное вводное занятие</strong> и получите подарок!',
  buttonText = 'Записаться',
}: BannerProps) {
  return (
    <div className="banner-section">
      <div className="banner-inner animate">
        <p className="banner-text" dangerouslySetInnerHTML={{ __html: text }} />
        <Link href="/#contact" className="btn-gold">{buttonText}</Link>
      </div>
    </div>
  )
}
