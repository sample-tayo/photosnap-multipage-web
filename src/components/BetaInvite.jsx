import "../styles/betainvite.css";
import { BsArrowRight } from "react-icons/bs";

export default function BetaInvite() {
  return (
    <div>
      <div className="beta-image-container">
        <div className="beta-background-image"></div>
        <div className="beta-text-container">
          <div className="beta-text-left">
            WERE IN BETA. GET YOUR INVITE TODAY!
          </div>
          <div className="beta-text-right">
            <div className="footer-right-text">
              <p>GET AN INVITE</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
