// Se implementa una aplicación React con componentes funcionales y props reutilizables

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Titulo from './Titulo';
import Parrafo from './Parrafo';
import Imagen from './Imagen';
import Enlace from './Enlace';
import Lista from './Lista';
import Tabla from './Tabla';
import Formulario from './Formulario';
import Boton from './Boton';

import InputText from './InputText';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

function App() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    clave: ''
  });

  const manejarCambio = (e) => {
    setFormulario(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(Enviado:\nNombre: ${formulario.nombre}\nCorreo: ${formulario.correo});
  };

  return (
    <div className="container mt-4 text-center">
      <Imagen
        src="https://www.espe.edu.ec/wp-content/uploads/2018/10/LOGO-ESPE_500.png"
        alt="Logo ESPE"
        width="250"
        height="auto"
      />
      <Titulo contenido="Proyecto React - Componentes HTML" tipo={1} />
      <Parrafo>
        Este proyecto demuestra el uso de componentes funcionales que representan elementos HTML, utilizando props para personalización.
      </Parrafo>
      <Enlace destino="https://reactjs.org" texto="Ir a documentación React" />

      <hr />
      <Titulo contenido="Lista de tareas" tipo={2} />
      <Lista items={['Estudiar React', 'Crear componentes', 'Aplicar Bootstrap']} />

      <hr />
      <Titulo contenido="Tabla de datos" tipo={2} />
      <Tabla
        encabezado={['Nombre', 'Correo']}
        registros={[
          ['Ana', 'ana@correo.com'],
          ['Luis', 'luis@correo.com']
        ]}
      />

      <hr />
      <Titulo contenido="Formulario" tipo={2} />
      <Formulario onSubmit={manejarEnvio}>
        <InputText
          nombre="nombre"
          placeholder="Nombre completo"
          valor={formulario.nombre}
          alCambiar={manejarCambio}
        />
        <InputEmail
          nombre="correo"
          placeholder="Correo electrónico"
          valor={formulario.correo}
          alCambiar={manejarCambio}
        />
        <InputPassword
          nombre="clave"
          placeholder="Contraseña"
          valor={formulario.clave}
          alCambiar={manejarCambio}
        />
        <Boton etiqueta="Enviar" />
      </Formulario>
    </div>
  );
}

export default App;