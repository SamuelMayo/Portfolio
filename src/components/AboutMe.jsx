import React from 'react'
import styled from 'styled-components'
import myImage from '../images/myImage.jpg'



const AboutMe = () => {
    return (
        <>
            <Container>
                <h2 id='sobre-mi' className='sub-title'>Un poco sobre mi</h2>
                <section className='my-info-container'>
                    <img className='section-image' src={myImage} alt="" />
                    <div className='section-info'>
                        <h3>Me llamo Samuel,</h3>
                        <p>Soy un desarrollador web full stack,<span> con estudios certificacos y experencia en proyectos reales.</span>
                            <br /> con una gran pasion por la tecnologia y un buen trabajo en equipo.
                        </p>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default AboutMe

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
            font-size:1.5rem;
            height:30px;
        }
    }
    .sub-title::after{
        position:absolute;
        content:"";
        top:3rem;
        width:120px;
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

    .my-info-container{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:70px;
        @media(max-width:769px){
            display:flex;
            flex-direction:column-reverse;
            margin-top:40px;
        }
    }

    .section-image{
        width:450px;
        height:400px;
        border-radius:30px;
        @media(max-width:769px){
            width:285px;
            height:285px;
        }
    }

    .section-info{
        width:470px;
        h3{
            font-size:27px;
        @media(max-width:769px){
            font-size:20px;
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
        @media(max-width:769px){
            width:250px;
        }
    }

    margin: 190px auto;
    width:70%;
    @media(max-width:769px){
        margin: 100px auto;
        width:80%;
    }
`