import "./Reset.css";

function Reset() {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-inputs">
          <img src="logo.png" alt="Image" />
          <h1>Izmjena lozinke</h1>
          <div className="inputs">
            <label htmlFor="username">E-mail adresa</label>
            <input
              type="email"
              id="email"
              placeholder="Unesite svoju email adresu"
              required
            />
          </div>

          <div className="login-button">
            <button
              onClick={() => (window.location.href = "/newpass")}
              className="button"
            >
              Pošalji
            </button>
          </div>
          <div className="footer1">
            <p>© INSIDICO | Sva prava pridržana. v.1.0.0.622</p>
          </div>
        </div>
      </div>
      <div className="image-container ">
        <img src="slika1.png" alt="building" />
      </div>
    </div>
  );
}

export default Reset;
