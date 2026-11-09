import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <a href="/" className="header__logo">
                    <span className="header__logo-icon">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                            <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                            <circle cx="7" cy="13" r="1.3" fill="currentColor"/>
                            <circle cx="17" cy="13" r="1.3" fill="currentColor"/>
                        </svg>
                    </span>
                    <span className="header__logo-text">
                        Auto<span className="header__logo-accent">Prime</span>
                    </span>
                </a>

                <nav className="header__nav">
                    <a href="#catalog" className="header__link header__link--active">Каталог</a>
                    <a href="#new" className="header__link">Новые</a>
                    <a href="#tradein" className="header__link">Trade-in</a>
                    <a href="#credit" className="header__link">Кредит</a>
                    <a href="#about" className="header__link">О нас</a>
                    <a href="#contacts" className="header__link">Контакты</a>
                </nav>

                <div className="header__right">
                    <a href="tel:+78001234567" className="header__phone">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
                        </svg>
                        8 800 123-45-67
                    </a>
                    <button className="header__btn">Подобрать авто</button>
                </div>
            </div>
        </header>
    )
}

export default Header;