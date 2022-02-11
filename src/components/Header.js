import React from 'react';
import { ReactComponent as HorseLogo } from '../media/logo2.svg'
import { ReactComponent as MetaHorse } from '../media/title2.svg'
import { ReactComponent as HeaderText } from '../media/title-text.svg'
import bgVideo from '../media/black.mp4';


const Header = () => {
    return (
        <div className='header-wrap container-fluid justify-content-center' id='home'>
            <video className='videoTag bgVideo' autoPlay loop muted>
                <source src={bgVideo} type='video/mp4' />
            </video>
            <div className=' row container header-inner'>
                <div className='col-md-5 header-left'>
                    <div className='row'>
                        <HorseLogo className='horse-header' />
                    </div>
                    <div className='row'>
                        <MetaHorse className='header-text1' />
                    </div>
                    <div className='row'>
                        <p className='header-text3'>Digital Equates Reality</p>
                    </div>
                </div>
                <div className='col-md-7 header-right d-flex justify-content-center'>
                    <HeaderText className='header-text2' />
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <iframe className='mt-5 video-tag'
                    width="727" height="409" src="https://www.youtube.com/embed/gElfIo6uw4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

        </div>
    )
}

export default Header;
