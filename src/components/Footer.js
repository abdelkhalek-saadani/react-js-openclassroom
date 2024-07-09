import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  return (
    <footer className="jh-footer">
      <div className="jh-footer-elem">For plant enthusiasts 🌿🌱🌵</div>
      
      <div className="jh-footer-elem">Subscribe to our newsletter :</div>
	  <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
		onBlur={emailAlert}
      />
    </footer>
  );
}
function emailAlert(e) {
	if (!e.target.value.includes('@')){
		alert('The email address should contain @');
	}
}

export default Footer;
