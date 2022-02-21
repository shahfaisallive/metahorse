import React from 'react';
import { ReactComponent as HorseLogo } from '../media/logo2.svg'
import { ReactComponent as MetaHorse } from '../media/title2.svg'
import bgVideo from '../media/black.mp4';
import headerVideo from '../media/bgVideo.mp4'

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
                    <p className="header-text2 text-center"> World's First Digital Equates Reality Horse NFT and Gamefi on BSC</p>
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <video className='header-video' autoPlay loop muted>
                    <source src={headerVideo} type='video/mp4' />
                </video>
            </div>

        </div>
    )
}

export default Header;
