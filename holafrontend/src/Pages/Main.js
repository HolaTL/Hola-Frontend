import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Navbar = () =>{
    return(
        
    <ul style = {{'text-align':'left',color:'orange'}}>
        <h3>Inicio</h3>
        <h3>Nosotros</h3>
        <h3>Agendar</h3>
        <h3>Contacto</h3>
    </ul>
    

    )
}


const Images = () =>{
    const Images = [{
        url: 'holafrontend/public/logo512.png',
        caption: 'Imagen1'
    }];
    return(
        <>
        <Slide>
            {Images.map((Image,index) => (
<div classname = "Image" key = {index}>
<div style = {{'Bimage': `url(${Image.url})` }}> </div>
<span>{Image.caption}</span>
</div>
            ))}
          
        </Slide>
        </>
    )
}

const Main = ()=>{
    return(
        <>
        <h1 style = {{backgroundColor:'green',color:"white"}}> Hola Terapia de lenguaje </h1>
        <h3> Cambiamos Vidas! </h3>
        <Navbar/>
        <Images/>
        </>
    )
}

export default Main;