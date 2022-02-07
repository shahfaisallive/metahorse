import React from 'react'
import { NavLink } from 'react-bootstrap'
import { ReactComponent as Logo } from '../media/logo.svg'
import { ReactComponent as Title } from '../media/title.svg'
import { ReactComponent as ConnectText } from '../media/connectwallet.svg'



const Navbar = () => {
    const navHomeHandler = () => {
        const element = document.getElementById("home");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }

    const navRoadmapHandler = () => {
        const element = document.getElementById("roadmap");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navTeamHandler = () => {
        const element = document.getElementById("ourteam");
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    const navContactHandler = () => {
        const element = document.getElementById("contact");
        element.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className='container-fluid ml-5 mr-5'>
                <div className='logo-div d-flex'>
                    <Logo className='logo-img' />
                    <Title className='title-text' />
                </div>

                <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav nav-item-div mt-3">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one ' onClick={navHomeHandler}>HOME</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' onClick={navTeamHandler}>TEAM</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' onClick={navRoadmapHandler}>ROADMAP</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#"><p className='text_one ' onClick={navContactHandler}>CONTACT</p></NavLink>
                        </li>
                    </ul>
                    {/* <Rectangle className='rectangle' /> */}
                    <button className='connect-btn'>
                        <ConnectText />
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
