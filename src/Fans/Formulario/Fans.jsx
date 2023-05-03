import "../Formulario/Fans.css";
import { Link } from "react-router-dom";
export function Fans() {

  return (
    <>
    <div className="bodyf">     
    <div className="section">
    <div className="login-box">
      <form>
        <h2 className="title-register">¡Registrate!</h2>
        <div className="input-box">
          <span className="icon"><ion-icon name="person-circle"></ion-icon></span>
          <input type="email" required/>
          <label>Nombre completo</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="calendar"></ion-icon></span>
          <input type="email" required/>
          <label>Fecha de nacimiento</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" required/>
          <label>Password</label>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox"/> Remember me</label>
          <a href="#">Olvide la contraseña</a>
        </div>

       <Link className="nav-link" to="/cuestionario"><button type="submit">Registrarme</button></Link>

        <div className="register-link">
          <p>You have an account?<a href="#"> Login</a></p>
        </div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
  
}
  