import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
        <div className="hero-blob-gold" />
        <div className="hero-blob-green" />
        <div className="hero-deco hd-1">⭐</div>
        <div className="hero-deco hd-2">✨</div>
        <div className="hero-deco hd-3">🌿</div>
        <div className="hero-deco hd-4">💛</div>
        <div className="hero-deco hd-5">✦</div>

        <div className="container">
          <div className="hero-grid">

            {/* Левая колонка — текст */}
            <div className="animate-left visible">
              <span className="hero-tag">Многопрофильный молодёжный центр</span>
              <h1 className="hero-h1">
                Молодёжный центр<br />
                <span className="name">«Рух» 🚀</span>
              </h1>
              <p className="hero-desc">
                Многопрофильные занятия для детей, подростков, взрослых и семей. Расположены в сердце ЖК «Возрождение» Приволжского района города Казани.
              </p>
              <div className="hero-btns">
                <Link href="/#programs" className="btn-green">Выбрать направление</Link>
                <Link href="/#contact" className="hero-btn-sec">Записаться</Link>
              </div>
            </div>

            {/* Правая колонка — одно большое фото */}
            <div className="hero-gallery animate-right visible">
              <div className="hero-photo hero-photo-1">
                <Image
                  src="/ruh-1.jpg"
                  alt="Молодёжный центр Рух"
                  width={600} height={460}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
