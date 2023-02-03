import {Link} from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../assets/img/Logo.png';
import "../../assets/styles/FormLogin.css";

function FormLogin() {
    
  const navigate = useNavigate();

  const form = useRef();

  const handlerClick = (e) => {
      e.preventDefault();
      const newForm = new FormData(form.current);
      let options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usuario: newForm.get("usuario"),
            contrasenia: newForm.get("contraseña"),
              
          })
      };

      fetch("http://34.225.239.102/api/iniciar" , options)
      .then(response => response.json())
      .then(data => {
          alert(JSON.stringify(data));
          if(data.status)
          navigate("/autobus")
      });

  };

    return (
     
        <div className='Login'>
            <img src={Login} alt="Logo"/>
         <form action="" ref={form}>
          <input type="user" name='usuario' placeholder="Nombre del usuario"></input>
          <input type="password" name='contraseña' placeholder="Contraseña"></input>
          <div >
          <button className='sesion' onClick={handlerClick}>Iniciar Sesion</button>
          </div>
          <div>
          <Link to="/register"><button className='usuario' >Crear Usuario</button></Link>
          </div>
          </form>
        </div>
       
      );
}

export default FormLogin;