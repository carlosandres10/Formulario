import {Link} from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/FormRegister.css";
import login from "../../assets/img/Logo.png"

function FormRegister() {

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
                nombre: newForm.get("nombre"),
                correo: newForm.get("correo"),
                contrasenia: newForm.get("contraseña"),
                
            })
        };

        fetch("http://34.225.239.102/api/registrar/usuario", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
            });

            
    };
 
   
    return ( 
        <form  ref={form}>
            <div className='register'>
                <img src={login} alt="Logo" />
             <input type="text"  name="nombre" placeholder="Nombre"></input>

             <input type="mail" name="correo"placeholder="E-mail"></input>

             <input type="user" name="usuario" placeholder="Username"></input>

             <input type="password" name="contraseña" placeholder="Password"></input>

             <Link to="/autobus" ><button className='cuenta' onClick={handlerClick}>Crear Cuenta</button></Link>
            
            </div>
        </form>
     );

    }

export default FormRegister;