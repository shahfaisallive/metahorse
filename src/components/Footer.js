import React from 'react'
import { ReactComponent as HorseLogo } from '../media/logo2.svg'
import { ReactComponent as MetaHorse } from '../media/title2.svg'
import { ReactComponent as FB } from '../media/fb.svg'
import { ReactComponent as IG } from '../media/ig.svg'
import { ReactComponent as TW } from '../media/tw.svg'
import { ReactComponent as DC } from '../media/dc.svg'



const Footer = () => {
    return (
        <div className='footer container-fluid pb-5' id='contact'>
            <div className='row'>
                <div className='col-sm-4'>
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

                <div className='col-sm-5'>
                    <div className='row mt-5'>
                        <div className='col-4'>
                            <a href='/' className='ft-text1'><p>HOME</p></a>
                            <a href='/' className='ft-text1'><p>MARKETPLACE</p></a>
                            <a href='/' className='ft-text1'><p>FAQ</p></a>
                        </div>
                        <div className='col-4'>
                            <a href='/' className='ft-text1'><p>INSTRUCTIONS</p></a>
                            <a href='/' className='ft-text1'><p>CONTACT US</p></a>
                            <a href='/' className='ft-text1'><p>SUPPORT</p></a>
                        </div>
                        <div className='col-4'>
                            <a href='/' className='ft-text1'><p>POLICY</p></a>
                            <a href='/' className='ft-text1'><p>WHITEPAPER</p></a>
                            <a href='/' className='ft-text1'><p>ABOUT US</p></a>
                        </div>
                    </div>
                </div>

                <div className='col-sm-3 justify-content-center mt-4'>
                    <div className='row d-flex justify-content-center'>
                        <p className='ft-text2'>JOIN OUR COMMUNITY</p>
                    </div>
                    <div className='row d-flex'>
                        <div className='col-sm-6 pl-5'>
                            <a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/Metahorse-111578704762976'><img className='ft-img d-block mt-3' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png" alt='fb' /></a>
                            <a target={'_blank'} rel="noreferrer" href='https://discord.gg/KjGqrcAGMg'><img className='ft-img d-block mt-3' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-discord-social-media-justicon-flat-justicon.png" alt="dc" /></a>
                            <a target={'_blank'} rel="noreferrer" href='https://twitter.com/METAHORSEOFFIC1'><img className='ft-img d-block mt-3' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-twitter-social-media-justicon-flat-justicon.png" alt="tw" /></a>
                            <a target={'_blank'} rel="noreferrer" href='https://www.instagram.com/metahorseofficial/'><img className='ft-img d-block mt-3' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-instagram-social-media-justicon-flat-justicon.png" alt="ig" /></a>
                        </div>

                        <div className='col-sm-6'>
                            <a target={'_blank'} rel="noreferrer" href='https://t.me/MetaHorseOfficialTelegram'><img className='ft-img d-block mt-3' src="https://img.icons8.com/stickers/100/000000/telegram-app.png" alt="ig" /></a>
                            <a target={'_blank'} rel="noreferrer" href='https://www.youtube.com/channel/UCrAkghBFxNGpUWNl4Nmzy7Q'><img className='ft-img d-block mt-3' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-youtube-social-media-justicon-flat-justicon.png" alt="ig" /></a>
                            <a target={'_blank'} rel="noreferrer" href='https://new.reddit.com/user/METAHORSE'><img className='ft-img d-block mt-3' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-reddit-social-media-justicon-flat-justicon.png" alt="ig" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer

