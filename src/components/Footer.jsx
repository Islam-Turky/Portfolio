import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
return (
    <section id="footer">
        <div className="links">
            <a href="https://www.facebook.com/profile.php?id=100010869063767&mibextid=ZbWKwL" id='facebook' target='blank'><FaFacebook /></a>
            <a href="https://wa.me/+201554945921" id='whatsapp' target='blank'><FaWhatsapp /></a>
            <a href="https://instagram.com/islam_t_0_r_k_y?igshid=ZDc4ODBmNjlmNQ==" id='instagram' target='blank'><FaInstagram /></a>
            <a href="https://github.com/Islam-Turky" id='github' target='blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/islam-turky-553b86248" id='linkedin' target='blank'><FaLinkedin /></a>
        </div>
        <div className="Copyright">
            2023 Copyright@Islam_Turky 
        </div>
    </section>
);
};
export default Footer;