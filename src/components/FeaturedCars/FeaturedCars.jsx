import './FeaturedCars.css'

const FeaturedCars = () => {
    return (
        <section className="featured">
            <div className="featured__inner">
                <div className="featured__head">
                    <div>
                        <span className="featured__eyebrow">Каталог</span>
                        <h2 className="featured__title">
                            Популярные модели <span className="featured__title-accent">этого месяца</span>
                        </h2>
                    </div>
                    <button className="featured__all">
                        Все автомобили
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div className="featured__grid">
                    {/* Карточка 1 */}
                    <article className="car-card">
                        <div className="car-card__image">
                            <span className="car-card__tag">Хит</span>
                            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" alt="BMW M5 Competition" />
                            <button className="car-card__favorite" aria-label="В избранное">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="car-card__body">
                            <div className="car-card__brand">BMW</div>
                            <h3 className="car-card__model">M5 Competition</h3>
                            <div className="car-card__specs">
                                <span>2023</span>
                                <span className="car-card__dot" />
                                <span>12 000 км</span>
                                <span className="car-card__dot" />
                                <span>4.4 л · 625 л.с.</span>
                            </div>
                            <div className="car-card__footer">
                                <div className="car-card__price">8 900 000 ₽</div>
                                <button className="car-card__btn">Подробнее</button>
                            </div>
                        </div>
                    </article>

                    {/* Карточка 2 */}
                    <article className="car-card">
                        <div className="car-card__image">
                            <span className="car-card__tag">Новинка</span>
                            <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" alt="Mercedes-Benz GLE 450" />
                            <button className="car-card__favorite" aria-label="В избранное">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="car-card__body">
                            <div className="car-card__brand">Mercedes-Benz</div>
                            <h3 className="car-card__model">GLE 450</h3>
                            <div className="car-card__specs">
                                <span>2022</span>
                                <span className="car-card__dot" />
                                <span>28 500 км</span>
                                <span className="car-card__dot" />
                                <span>3.0 л · 367 л.с.</span>
                            </div>
                            <div className="car-card__footer">
                                <div className="car-card__price">6 450 000 ₽</div>
                                <button className="car-card__btn">Подробнее</button>
                            </div>
                        </div>
                    </article>

                    {/* Карточка 3 */}
                    <article className="car-card">
                        <div className="car-card__image">
                            <span className="car-card__tag">Премиум</span>
                            <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80" alt="Audi RS7 Sportback" />
                            <button className="car-card__favorite" aria-label="В избранное">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="car-card__body">
                            <div className="car-card__brand">Audi</div>
                            <h3 className="car-card__model">RS7 Sportback</h3>
                            <div className="car-card__specs">
                                <span>2023</span>
                                <span className="car-card__dot" />
                                <span>9 800 км</span>
                                <span className="car-card__dot" />
                                <span>4.0 л · 600 л.с.</span>
                            </div>
                            <div className="car-card__footer">
                                <div className="car-card__price">9 200 000 ₽</div>
                                <button className="car-card__btn">Подробнее</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCars;