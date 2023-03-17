import camara from "../../Components/img/camara.svg";
import group from "../../Components/img/group.svg";
import phone from "../../Components/img/camara.svg";
import { Link } from "react-router-dom";
import "./contact.css";

const SocialLinks = () => {
  return (
    <div className="mb-3">
      <div className="text-center">
        <h2 className="bg-light d-inline px-3">Redes sociales</h2>
        <div className="text-center mt-3 d-flex justify-content-center">
          <Link
            as={Link}
            to="https://ar.instagram.com/"
            className="btn btn-warning button-height mx-2 text-light"
          >
            <img src={camara} alt="camara" /> Instagram
          </Link>
          <Link
            as={Link}
            to="https://facebook.com/"
            className="btn btn-primary button-height mx-2"
          >
            <img src={group} alt="group" /> Facebook
          </Link>
          <Link
            as={Link}
            to="https://web.whatsapp.com/"
            className="btn btn-success button-height mx-2"
          >
            <img src={phone} alt="phone" /> WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
