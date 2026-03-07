export default function MapSection() {
  const address = 'Казань, ул. Павлюхина, 108Б к2'
  const yandexQuery = encodeURIComponent('Казань, улица Павлюхина, 108Б корпус 2, Рух')

  return (
    <section className="map-section">
      <div className="map-header">
        <div className="container">
          <div className="map-header-inner">
            <h2>Как нас найти</h2>
            <div className="map-title-line" />
            <div className="map-address-badge">📍 {address}</div>
            <p className="map-hint">Напротив ТЦ KazanMall · Остановка «Ипподромная улица»</p>
          </div>
        </div>
      </div>

      <div className="map-iframe-wrap">
        <iframe
          src={`https://yandex.ru/map-widget/v1/?text=${yandexQuery}&z=17&lang=ru_RU`}
          title="Карта расположения МЦ Рух"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="map-footer-bar">
        <div className="container">
          <div className="map-footer-bar-inner">
            <div className="map-footer-info">
              <span className="map-footer-item">📍 Казань, ул. Павлюхина, 108Бк2</span>
              <span className="map-footer-item">🕐 Пн–Вс: 8:00 – 22:00</span>
              <span className="map-footer-item">📞 +7 (927) 444-18-44</span>
            </div>
            <a
              href={`https://yandex.ru/maps/?text=${yandexQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-open-btn"
            >
              Открыть в Яндекс Картах →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
