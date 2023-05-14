import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-inputs">
          <img src="logo.png" alt="Img" />
          <h1>Prijava u aplikaciju</h1>
          <div className="inputs">
            <label htmlFor="username">E-mail adresa </label>
            <input
              type="email"
              id="email"
              placeholder="Unesite svoju email adresu"
              required
              className="input-with-icon"
              style={{
                backgroundImage: `url(${require("../images/visibility.png")})`,
              }}
            />
          </div>
          <div className="inputs">
            <label htmlFor="pass">Lozinka: </label>

            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Unesite svoju lozinku"
              required
              className="input-with-icon"
              style={{
                backgroundImage: `url(${require("../images/visibility.png")})`,
              }}
            ></input>
          </div>
          <div className="password">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Zapamti me</label>
            </div>
            <div className="forgotten">
              <Link to="/reset" className="forgotten-link">
                Izgubljena lozinka
              </Link>
            </div>
          </div>
          <div className="login-button">
            <button className="button">PRIJAVA</button>
          </div>
          <div className="footer">
            <p>© INSIDICO | Sva prava pridržana. v.1.0.0.622</p>
          </div>
        </div>
      </div>
      <div className="image-container image-animation">
        <img src="slika1.png" alt="Img" />
      </div>
    </div>
  );
}

export default Login;
