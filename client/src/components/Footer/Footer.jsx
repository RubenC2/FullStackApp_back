import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGoogle, faMailchimp, faCreativeCommonsNc } from '@fortawesome/free-brands-svg-icons'; // Importar iconos
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Bewust Opvoeden - Todos los derechos reservados</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/bewust.opvoeden/" target="_blank" className="icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100070513894236" target="_blank" className="icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="mailto:hola@espacioalere.com" className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
