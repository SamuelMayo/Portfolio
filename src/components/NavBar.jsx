import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton.jsx'

const NavBar = () => {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }


    return (
        <header style={clicked ? styles.headerAct : styles.header}>
            <NavContainer>
                <div className='logo'>
                    <a href="#home">
                        <h1>Samuel Mayo</h1>
                    </a>
                </div>
                <nav className={`links ${clicked ? 'active' : ''} `}>
                    <a onClick={clicked ? handleClick : ''} href="#sobre-mi">Sobre mí</a>
                    <a onClick={clicked ? handleClick : ''} href="#portfolio">Portafolio</a>
                    <a onClick={clicked ? handleClick : ''} href="#contacto">Contacto</a>
                </nav>
                <div className='burger'>
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`} />
            </NavContainer>
        </header>
    )
}

export default NavBar

const styles={
    headerAct:{
        position:'fixed',
        width:'100%',
        height:'100%',
        'z-index':'1'
    },

    header:{
        position:'fixed',
        width:'100%',
        height:'62px',
        'z-index':'1'
    }
}

const NavContainer = styled.div`
    *{
        font-family:'Poppins', sans-serif;
    }
    
    .logo{
        a{
            text-decoration:none;
            h1{
                margin:0;
                font-size: 1rem;
                font-weight:600;
                color: #343a40;
                @media(min-width:769px){
                    font-size: 1.5rem;
                }
            }
            img{
                width:55px;
                height:50px;
            }
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:173px;
            height:60px;
            margin-left:50px;
            @media(min-width:769px){
                width: 250px;
            }
        }
    }
    nav{
        a{
            color: black;
            text-decoration:none;
            padding: .4rem;
        }
        margin-right:20px;
    }
    .links{
        position:absolute;
        top: -300px;
        right: -3000px;
        left:0;
        margin-left:auto;
        margin-right:auto;
        text-align:center;
        transition: all .6s ease;
        a{
            color:white;
            font-size:1.5rem;
            display:block;   
        }
        @media(min-width:769px){
            position: initial;
            margin:0;
            margin-right:25px;
            a{
                color:#343a40;
                margin-right:15px;
                font-size:1.1rem;
                display:inline;
            }
        }
    }
    .links.active{
        width:50%;
        display:block;
        position:absolute;
        top: 20%;
        left:0;
        right: 0;
        margin-left:auto;
        margin-right:auto;
        text-align:center;
        z-index:1;
    }
    .burger{    
        width: 55px;
        margin-right:20px;
        align-items:center;
        @media(min-width:769px){
            display:none;
        }
    }
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom: 2px solid #92a1b026;
    width: 100%;
    height:60px;
    background-color:white;
`

const BgDiv = styled.div`
    *{
        font-family:'Poppins', sans-serif;
    }
    position:absolute;
    background-color: #343a40;
    top:-700px;
    right:-1000px;
    z-index:-1;
    transition: all .6s ease ;
    width: 100%;
    height: 100%;
    &.active{
        top: 0px;
        right:0;
        width: 100%;
        height: 100%;
        border-radius: 0 0 0 80% ;
    }
`