import React from 'react'
import styled from 'styled-components'
import linkedin from '../images/icons/linkedin.jpg'
import github from '../images/icons/github.svg'
import gmail from '../images/icons/gmail.png'

const Contact = () => {
    return (
        <>
            <Container>
                <h2 id='contacto' className='sub-title'>Contacto</h2>
                <div className='rrss'>
                    <a href="https://www.linkedin.com/in/mayosamuel/"><img src={linkedin} alt="linkedIn" /></a>
                    <a href="https://github.com/SamuelMayo"><img src={github} alt="Github" /></a>
                    <a href="mailto:samuelmayo456@gmail.com"><img src={gmail} alt="Gmail" /></a>
                </div>
            </Container>
        </>
    )
}

export default Contact

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
    width:90px;
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

.rrss{
    width:500px;
    height:200px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media(max-width:769px){
        width:250px;
        height:50px;
        margin-top:30px;
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

margin: 170px auto;
    width:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:80px;
    @media(max-width:769px){
        width:80%;
        margin: 100px auto;
    }

`