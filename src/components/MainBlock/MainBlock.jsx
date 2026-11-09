import './MainBlock.css'

const MainBlock = () => {

    const handleAlert = () => {
        console.log('handleAlert')
    }

    return (
        <section className="main">
            <div className="main__overlay" />

            <div className="main__content">
                <span className="main__badge">
                    <span className="main__badge-dot" />
                    Премиальные автомобили с 2005 года
                </span>

                <h1 className="main__title">
                    Твоя машина мечты
                    <span className="main__title-accent"> уже здесь</span>
                </h1>

                <p className="main__subtitle">
                    Более 500 проверенных автомобилей в наличии. Прозрачная история,
                    гарантия качества и выгодный trade-in. Найди свою за 5 минут.
                </p>

                <div className="main__actions">
                    <button className="main__btn main__btn--primary" onClick={handleAlert}>
                        Смотреть каталог
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="main__btn main__btn--ghost">
                        Записаться на тест-драйв
                    </button>
                </div>

                <div className="main__stats">
                    <div className="main__stat">
                        <span className="main__stat-value">500+</span>
                        <span className="main__stat-label">авто в наличии</span>
                    </div>
                    <div className="main__stat-divider" />
                    <div className="main__stat">
                        <span className="main__stat-value">18 лет</span>
                        <span className="main__stat-label">на рынке</span>
                    </div>
                    <div className="main__stat-divider" />
                    <div className="main__stat">
                        <span className="main__stat-value">4.9★</span>
                        <span className="main__stat-label">рейтинг клиентов</span>
                    </div>
                </div>
            </div>

            <div className="main__scroll">
                <span>Листай вниз</span>
                <div className="main__scroll-line" />
            </div>
        </section>
    )
}

export default MainBlock;