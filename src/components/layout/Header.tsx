'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'О нас',     href: '#about' },
  { label: 'Программы', href: '#programs' },
  { label: 'Галерея',   href: '#gallery' },
  { label: 'Отзывы',    href: '#reviews' },
  { label: 'Команда',   href: '#team' },
  { label: 'Контакты',  href: '#contact' },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isMobile,  setIsMobile]  = useState(true)

  useEffect(() => {
    const onScroll  = () => setScrolled(window.scrollY > 10)
    const onResize  = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollTo = (href: string, close?: () => void) => (e: React.MouseEvent) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    close?.()
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hdr {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #fff;
          height: 70px;
          display: flex;
          align-items: center;
          transition: box-shadow 0.3s;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .hdr.scrolled { box-shadow: 0 2px 24px rgba(0,0,0,0.1); }
        .hdr-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .hdr-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .hdr-logo img { height: 46px; width: auto; display: block; }
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .hdr-link {
          color: var(--green-dark);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.88rem;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.2s;
        }
        .hdr-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.25s;
          transform-origin: left;
        }
        .hdr-link:hover { color: var(--gold); }
        .hdr-link:hover::after { transform: scaleX(1); }
        .hdr-cta {
          background: var(--gold);
          color: #fff;
          border: none;
          border-radius: 20px;
          padding: 9px 20px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-main);
          text-decoration: none;
          transition: background 0.2s;
          box-shadow: 0 4px 14px rgba(184,147,90,0.35);
          white-space: nowrap;
        }
        .hdr-cta:hover { background: var(--gold-light); }

        .burger-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          padding: 10px;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
        }
        .burger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--green-dark);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .burger-btn.open .burger-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .burger-btn.open .burger-line:nth-child(2) { opacity: 0; }
        .burger-btn.open .burger-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mob-backdrop {
          position: fixed;
          inset: 0;
          top: 70px;
          z-index: 997;
          background: rgba(0,0,0,0.45);
        }
        .mob-menu {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          z-index: 998;
          background: var(--green-dark);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-height: calc(100vh - 70px);
          overflow-y: auto;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .mob-menu a {
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s;
          display: block;
        }
        .mob-menu a:last-child { border-bottom: none; }
        .mob-menu a:hover { color: var(--gold); }
        .mob-cta {
          margin-top: 16px;
          background: var(--gold) !important;
          color: #fff !important;
          border-radius: 20px;
          padding: 14px 24px;
          font-size: 1rem;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          display: block;
          transition: background 0.2s;
          border-bottom: none !important;
        }
        .mob-cta:hover { background: var(--gold-light) !important; }
      `}} />

      <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="hdr-inner">

            <Link href="/" className="hdr-logo">
              <Image src="/logo.png" alt="РУХ" width={160} height={46}
                style={{ height: '46px', width: 'auto' }} priority />
            </Link>

            {/* Десктоп-навигация */}
            <nav className="hdr-nav" style={{ display: isMobile ? 'none' : 'flex' }}>
              {navLinks.map((l) => (
                <Link key={l.label} href={l.href} className="hdr-link"
                  onClick={scrollTo(l.href)}>{l.label}</Link>
              ))}
              <Link href="#contact" className="hdr-cta" onClick={scrollTo('#contact')}>
                Записаться
              </Link>
            </nav>

            {/* Бургер — только мобильный */}
            <button
              className={`burger-btn${menuOpen ? ' open' : ''}`}
              style={{ display: isMobile ? 'flex' : 'none' }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Меню"
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>

          </div>
        </div>
      </header>

      {menuOpen && isMobile && (
        <>
          <div className="mob-backdrop" onClick={() => setMenuOpen(false)} />
          <nav className="mob-menu">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href}
                onClick={scrollTo(l.href, () => setMenuOpen(false))}>
                {l.label}
              </Link>
            ))}
            <Link href="#contact" className="mob-cta"
              onClick={scrollTo('#contact', () => setMenuOpen(false))}>
              Записаться
            </Link>
          </nav>
        </>
      )}
    </>
  )
}
