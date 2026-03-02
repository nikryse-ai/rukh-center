import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import './sections.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButton from '@/components/layout/FloatingButton'
import ScrollAnimator from '@/components/layout/ScrollAnimator'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CursorGlow from '@/components/ui/CursorGlow'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-main',
})

export const metadata: Metadata = {
  title: 'Молодёжный центр «Рух» — Казань',
  description:
    'Многопрофильный молодёжный центр «Рух» в Казани. Интересные занятия для детей, подростков, взрослых и семей. ул. Павлюхина, 108Бк2, Приволжский район. Тел: +7 (927) 444-18-44.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Мгновенный прыжок к якорю без анимации при первой загрузке */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            if(window.location.hash){
              document.documentElement.style.scrollBehavior='auto';
              window.addEventListener('load',function(){
                setTimeout(function(){
                  document.documentElement.style.scrollBehavior='';
                },50);
              });
            }
          })();
        `}} />
      </head>
      <body className={montserrat.variable}>
        <ScrollProgress />
        <CursorGlow />
        <ScrollAnimator />
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  )
}
