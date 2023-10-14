import React from 'react'
import styled from 'styled-components'
import projectCM from '../images/project-CM.jpg'
import veo from '../images/veo-pod.jpg'
import vlt from '../images/logo.png'
import back from '../images/node.jpg'

const Portfolio = () => {
    return (
        <>
            <Container>
                <h2 id='portfolio' className='sub-title'>Portfolio</h2>
                <div className='project'>
                    <div className='project-card'>
                        <a href="https://cesarmayo.netlify.app/">
                            <img src={projectCM} alt="" />
                        </a>
                    </div>
                    <div className='project-info'>
                        <h3>
                            Perfil Profesional
                        </h3>
                        <p>
                            CesarMayo.com, es un perfil profesional donde es proporcionado toda la informacion de un desarrollador,
                            lenguajes y videos educativos. Utilizando: <span>HTML5, SASS, Bootstrap y AOS animate.</span>
                        </p>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-card'>
                        <a href="https://veo-podcast.netlify.app/">
                            <img src={veo} alt="" />
                        </a>
                    </div>
                    <div className='project-info'>
                        <h3>
                            Vlog de Emprendedores
                        </h3>
                        <p>
                            Vos en Off Podcast, es un espacio destinado a la interaccion y captacion de nuevos oyentes, 
                            contando con un apartado para ingresar a los capitulos, 
                            leer reseñas y mas. Utilizando: <span>HTML5, Bootstrap y AOS animate.</span>
                        </p>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-card'>
                        <a href="https://github.com/SamuelMayo/Vende-Lo-Tuyo">
                            <img src={vlt} alt="" />
                        </a>
                    </div>
                    <div className='project-info'>
                        <h3>
                            E-commerce
                        </h3>
                        <p>
                            Vende lo Tuyo, Es un ecommerce el cual presenta la posibilidad de vender articulos 
                            usados o nuevos, donde los usuarios podrian realizar compras sin necesidad de un registro.
                            Utilizando: <span>ReactJS, JavaScript, React Router Dom, entre otros hooks.</span>
                        </p>
                    </div>
                </div>


                <div className='project'>
                    <div className='project-card'>
                        <a href="https://github.com/SamuelMayo/Backend-E-commerce">
                            <img className='back-img' src={back} alt="" />
                        </a>
                    </div>
                    <div className='project-info'>
                        <h3>
                            Backend Express
                        </h3>
                        <p>
                            E-commerce, este fue hecho en express y contiene desde el registro de usuarios, 
                            registro de administradores, carrito de compra, entre otras.
                            Utilizando: <span>Express, MongoDB,bcrypt,cookie-parser,multer,json webt oken, entre otras librerias.</span>
                        </p>
                    </div>
                </div>


            </Container>
        </>
    )
}

export default Portfolio

const Container = styled.div`

:root{
    --principal-color:#343a40;
}
*{
    font-family:'Poppins', sans-serif;
}   

.sub-title{
    position:relative;
    text-align:center;
    color:#1c7c54;
    font-size:2rem;
    @media(max-width:769px){
        font-size:1.7rem;
        height:30px;
    }
}
.sub-title::after{
    position:absolute;
    content:"";
    top:3rem;
    width:80px;
    height:5px;
    left:0;
    right:0;
    margin:auto;
    background-color:#1c7c54;
    @media(max-width:769px){
        top:2.2rem;   
        height:4px;
    }   
}

.project{
    display:flex;
    justify-content:space-around;
    margin-top:70px;
    align-items:center;
    @media(max-width:769px){
        flex-direction: column-reverse;
        margin-top:40px;
        margin-bottom:50px;
    }
}

.project-card{
    width:500px;
    height:524px;
    display:flex;
    justify-content:center;
    align-content:center;
    box-shadow: 0 4px 25px rgba(14,36,49,.15);
    overflow:hidden;
    a{
        display:flex;
        justify-content:center;
        align-content:center;
    }
    img{
        width:300px;
        object-fit:contain;
    }
    @media(max-width:769px){
        width:285px;
        height:390px;
    }
}

.project-info{
    width:470px;
    @media(max-width:769px){
        width:250px;
        margin-bottom:12px;
    }
    h3{
        color: var(--principal-color);
        font-size:27px;
        @media(max-width:769px){
            font-size:20px;
            margin-bottom:0px;
        }
    }
    p{
        font-size:18px;
        span{
            color:#1c7c54;
        }
        @media(max-width:769px){
            font-size:15px;
            }
    }
}
}

margin: 170px auto;
    width:70%;
    @media(max-width:769px){
        width:80%;
        margin: 100px auto;
    }
`