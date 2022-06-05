import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons-wrap">
        <FacebookOutlinedIcon className="footer-icons" />
        <TwitterIcon className="footer-icons" />
        <InstagramIcon className="footer-icons" />
      </div>
      <hr style={{ color: "white", opacity: "0.5", width: "70%" }} />
      <div className="footer-content-wrap">
        <div className="footer-content-l">
          <img
            src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
            alt="logo"
            height={50}
            style={{ cursor: "pointer" }}
          />
          <p>This Clone is Developed by Yathath</p>
        </div>
        <div className="footer-content-r">
          <img
            src="https://assets.inshorts.com/website_assets/images/contact_icon.png"
            alt="Comtact-logo"
            height={50}
            style={{ cursor: "pointer" }}
          />
          <p>CODE_Y</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
