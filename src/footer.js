const feather = require('feather-icons');

feather.replace();
setTimeout(() => {
    feather.replace();
}, 100);
const Footer = () => {
    return <footer>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Redes Sociales</h3>
                    <a href="https://www.facebook.com/?locale=es_LA"><i data-feather="facebook" ></i> Facebook</a>
                    <br></br>
                    <a href="https://twitter.com/?lang=es"><i data-feather="twitter"></i> Twitter</a>
                    <br></br>
                    <a href="https://www.instagram.com"><i data-feather="instagram"></i>Instagram</a>
                </div>
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p> <i data-feather="mail"></i>Email: mgiliana1@upao.edu.pe</p>
                    <p> <i data-feather="phone"></i>Teléfono: +51960118813</p>
                    <p> <i data-feather="home"></i>Dirección: UPAO</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>LOS MEJORES NFTS DE LA GALAXIA</p>
            </div>
        </footer>
    </footer>;
}

export default Footer;