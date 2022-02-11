import React from 'react';
import BG from '../media/Rectangle.png'
import { ReactComponent as Curve } from '../media/curve.svg'
import { ReactComponent as Circle } from '../media/circle.svg'
import { ReactComponent as Line } from '../media/line.svg'


const Roadmap = () => {
    return (
        <div className='roadmap-wrapper container-fluid justify-content-center pl-0 pr-0' style={{ backgroundImage: `url(${BG})`, backgroundSize: '100%', backgroundRepeat: 'repeat-y' }} id="roadmap">
            {/* <div className='row container ml-auto mr-auto'>
                <p className='heading1 mt-4'>Roadmap</p>
            </div> */}

            <div className='container row justify-content-center mt-5 ml-auto mr-auto rm-graph-div'>
                <div className='col q1'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q1 2022</p>
                            <p className='rm-text2'>Milestone 1</p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Team Formation - Jan 2022</li>
                            <li>Social Media Launch - Feb 2022</li>
                            <li>Gameplay Trailer - Feb 2022</li>
                            <li>Website - Feb 2022</li>
                            <li>Whitepaper - March 2022</li>
                        </ul>
                    </div>
                </div>

                <div className='col q2'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q2 2022</p>
                            <p className='rm-text2'>Milestone 2</p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Pre Sales - April 2022</li>
                            <li>Private Sales - April 2022</li>
                            <li>Metamall museum showcase for Metahorse real horses - April 2022</li>
                            <li>Token Generation Event - May 2022</li>
                            <li>Initial DEX Listing - May 2022</li>
                            <li>Coingecko Listing - May 2022</li>
                            <li>CoinMarketCap Listing - May 2022</li>
                            <li>NFT Sale - May 2022</li>
                            <li>NFT Marketplace - May 2022</li>
                            <li>CEX Listing - June 2022</li>
                            <li>NFT Staking - June 2022</li>
                            <li>NFT Fusion/Breeding - June 2022</li>
                        </ul>
                    </div>
                </div>

                <div className='col q3'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q3 2022</p>
                            <p className='rm-text2'>Milestone 3</p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Gameplay Beta Testing - July 2022</li>
                            <li>Gameplay Launch - August 2022</li>
                            <li>Metahorse Stable Tour - September 2022</li>
                        </ul>
                    </div>
                </div>

                <div className='col q4'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q4 2022</p>
                            <p className='rm-text2'>Milestone 4</p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Coming soon</li>
                        </ul>
                    </div>
                </div>

                <div className='col q5'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Roadmap;
