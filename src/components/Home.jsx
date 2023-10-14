import React from 'react'
import styled from 'styled-components'
import myImage from '../images/myImage.jpg'
import linkedin from '../images/icons/linkedin.jpg'
import github from '../images/icons/github.svg'
import gmail from '../images/icons/gmail.png'

const Home = () => {
    return (
        <>
            <Container>
                <div id='home' className='container'>
                    <div className='images-container'>
                        <h1>¡Hola! <br />Soy <span>Samuel,</span><br />Jr.Full Stack Dev.</h1>
                        <div className='rrss'>
                            <a href="https://www.linkedin.com/in/mayosamuel/"><img src={linkedin} alt="linkedIn" /></a>
                            <a href="https://github.com/SamuelMayo"><img src={github} alt="Github" /></a>
                            <a href="mailto:samuelmayo456@gmail.com"><img src={gmail} alt="Gmail" /></a>
                        </div>
                    </div>
                    <img className='myImage' src={myImage} alt="mi imagen" />
                </div>
            </Container>
        </>
    )
}

export default Home

const Container = styled.div`
    :root{
        --principal-color:#343a40;
    }
    *{
        font-family:'Poppins', sans-serif;
    }
    h1{
        width:500px;
        height:210px;
        color:#343a40;
        font-size:2.8rem;
        span{
            color:#1c7c54;
        }
        @media(max-width:769px){
            font-size:1.8rem;
            width:250px;
            height:210px;
        }
    }

    .myImage{
        width:370px;
        height:360px;
        border-radius:20%;
        transform: skew(4deg, 2deg);
        objet-fit:cover;
        @media(max-width:769px){
            width:250px;
            height:250px;
        }
    }

    .images-container{
        @media(max-width:769px){
            width:280px;
            height:350px;
        }
    }

    .container{
        width:90%;
        display:flex;
        justify-content:center;
        align-items:center;
        @media(max-width:769px){
            flex-direction:column;
        }
    }

    .rrss{
        width:350px;
        height:50px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        @media(max-width:769px){
            width:250px;
        }
        a{

            img{
                width:60px;
                @media(max-width:769px){
                    
                    width:30px;
                    height30px;
                    object-fit:cover;
                }
            }
        }
    }

    padding-top:150px;
    width:100%;
    display:flex;
    justify-content:center;
    @media(max-width:769px){
        padding-top:100px;
    }
`