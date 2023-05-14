import "./NewPass.css";

function NewPass() {
  return (
    <div className="main-container1">
      <div className="login-container1">
        <div className="login-inputs1">
          <img src="logo.png" alt="Img" />
          <h1>Unesite novu lozinku</h1>
          <div className="inputs1">
            <label htmlFor="pass">Nova lozinka:</label>
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
          <div className="inputs1">
            <label htmlFor="pass">Ponovite lozinku: </label>
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
          <div className="login-button">
            <button className="button">Pošalji</button>
          </div>
          <div className="footer">
            <p>© INSIDICO | Sva prava pridržana. v.1.0.0.622</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="slika1.png" alt="Img" />
      </div>
    </div>
  );
}

export default NewPass;
