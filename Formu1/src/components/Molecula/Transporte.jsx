import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Transporte.css"
import Login from '../../assets/img/Logo.png'
function Transporte() {
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
                clave: newForm.get("id"),
                placa: newForm.get("placa"),
                numasientos: newForm.get("asientos"),
                fecha: newForm.get("fecha"),
                tipo: newForm.get("tipo"),
                nombre: newForm.get("nombre"),
                licencia: newForm.get("licencia")
            })
        };

        fetch("http://34.225.239.102/api/autobus/register", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
            });
       
    };

    return (
        <form ref={form}>
            <div className="autobus">

              <img src={Login} alt="Logo"/>

             <div className="modul1">

                <input type="text" name="id" placeholder="Clave Autobus"></input>
                <input type="text" name="placa" placeholder="Num. De Placa Del Autobus"></input>

             </div>

             <div className="modul2">

                <input type="text" name="asientos" placeholder="Numero de asientos" ></input>
                <input type="date" name="fecha" placeholder="Fecha de alta"></input>
                
             </div>

             <div className="modul3">

                <select name="tipo" id="">
                    <option >Lujo</option>
                    <option >Economico</option>
                    <option >Turismo</option>
                    <option >Corrida directa</option>

                </select>

                <input type="chofer" name="nombre" placeholder="Nombre del Conductor" ></input>

                <input type="licencia" name="licencia" placeholder="Numero de licencia" ></input>

             </div>

             <button onClick={handlerClick}> Alta de autobus</button>

            </div>
        </form>
    );
}

export default Transporte;
