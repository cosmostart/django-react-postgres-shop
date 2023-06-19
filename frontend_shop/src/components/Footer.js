import './Footer.css'
function Footer() {
    return(
        <div className="mt-4 container-fluid bg-secondary">
            <footer className="py-4">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-3">
                        <h2 className="text-light">DreamTeam</h2>
                        <button type="button" className="btn btn-light opacity-25 rounded-0">Связаться с нами</button>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">Политика конфиденциальности</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">Пользовательское соглашение</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5 className="text-light">Каталог</h5>
                        <div className="row">
                            <div className="col-6 col-md-3 mb-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Одежда</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Обувь</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Верхняя одежда</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Домашняя одежда</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3 mb-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Купальники</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Аксессуары</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Идеи для подарков</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">Marina Rinaldi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h5 className="text-light">О компании</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">О нас</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">Контакты</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">Доставка</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">Оплата</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-end border-top">
                    <p className="pt-3 ps-4">©DreamTeam, 2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
