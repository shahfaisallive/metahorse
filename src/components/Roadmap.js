import React from 'react';
import BG from '../media/Rectangle.png'
import { ReactComponent as Curve } from '../media/curve.svg'
import { ReactComponent as Circle } from '../media/circle.svg'
import { ReactComponent as Line } from '../media/line.svg'


const Roadmap = () => {
    return (
        <div className='roadmap-wrapper container-fluid justify-content-center pl-0 pr-0' style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} id="roadmap">
            <div className='row container ml-auto mr-auto'>
                <p className='heading1 mt-4'>Roadmap</p>
            </div>

            <div className='container rm-webview row justify-content-center mt-5 ml-auto mr-auto rm-graph-div'>
                <div className='col q1'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q3 2021</p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Gamefi, NFT, Metaverse research</li>
                            <li>Ideation</li>
                            <li>Brand and Strategy</li>
                            <li>Market Fit research</li>
                            <li>IT, Legal Counsel and Game developer talent sourcing</li>
                        </ul>
                    </div>
                </div>

                <div className='col q2'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q4 2021</p>
                            <p className='rm-text2'>Development phase 1.0 </p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Metahorse (Game) - Pre-production (creation of game design and prototype)</li>
                            <li>Metahorse (Reality) - President horse selection to backup project
                            </li>
                            <li>Seed Fund</li>
                        </ul>
                    </div>
                </div>

                <div className='col q3'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q1 2022</p>
                            <p className='rm-text2'>Development phase 2.0 </p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Metahorse (Game) - Production (confirmation of game design and prototype)</li>
                            <li>Metahorse (Reality) - Attain official business license in dubai </li>
                            <li>Social Media launch</li>
                            <li>Pre-Marketing</li>
                        </ul>
                    </div>
                </div>

                <div className='col q4'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q2 2022 </p>
                            <p className='rm-text2'>Development phase 3.0 </p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Coming</li>
                            <li>Metahorse (Game) - Production and Testing (bug reports, refinement testing, change requests)</li>
                            <li>Metahorse (Reality) - Engage with horse stable for partnership <br /> - First horse securing for giveaway during NFT PRE-SALES</li>
                            <li>Mass Marketing Campaign </li>
                            <li>Token creation</li>
                            <li>Private Sales</li>
                            <li>Metahorse trailer video</li>
                            <li>Metahorse team video</li>
                            <li>NFT PRE-SALES</li>
                            <li>Token Listing</li>
                            <li>NFT marketplace beta test</li>
                        </ul>
                    </div>
                </div>

                <div className='col q5'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q3 2022</p>
                            <p className='rm-text2'>Development phase 4.0 </p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Metahorse (Game) - Public Beta Testing </li>
                            <li>Metahorse (Reality) - Metaverse tournament 1.0 planning</li>
                            <li>NFT marketplace launching</li>
                            <li>Game Beta Launch 1.0</li>
                            <li>Guerilla marketing </li>
                            <li>New exchange listing </li>
                            <li>Team Expansion </li>
                            <li>CSR</li>
                        </ul>
                    </div>
                </div>

                <div className='col q6'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>Q4 2022</p>
                            <p className='rm-text2'>Development Phase 4.0</p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Metahorse (Game) - Game Launch <br />- Metaverse integration </li>
                            <li>Metahorse (Reality) - Hosting first ever METAVERSE TOURNAMENT</li>
                            <li>Brand awareness marketing</li>
                        </ul>
                    </div>
                </div>

                <div className='col q7'>
                    <div className='row d-flex justify-content-start'>
                        <Line className='line1' />
                        <div className='col'>
                            <p className='rm-text1'>2023 onwards</p>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <Circle className='circle' />
                        <Curve className='curve' />
                    </div>
                    <div className='row d-flex rm-info'>
                        <ul>
                            <li>Expansion of the Metahorse Ecosystem</li>
                            <li>Game advanced development </li>
                            <li>Brand Awareness Marketing</li>
                            <li>Metaverse development </li>
                        </ul>
                    </div>
                </div>

            </div>



            {/* MOBILE COMPONENT FOR ROADMAP */}
            {/* MOBILE COMPONENT FOR ROADMAP */}
            <div className='rm-mobview container row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col-2'>
                            <Circle className='circle' />
                        </div>
                        <div className='col-10 pt-2 rm-info-mob'>
                            <p className='rm-text1'>Q3 2021</p>

                            <ul>
                                <li>Gamefi, NFT, Metaverse research</li>
                                <li>Ideation</li>
                                <li>Brand and Strategy</li>
                                <li>Market Fit research</li>
                                <li>IT, Legal Counsel and Game developer talent sourcing</li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>
                            <Circle className='circle' />
                        </div>
                        <div className='col-10 pt-2 rm-info-mob'>
                            <p className='rm-text1'>Q4 2021</p>
                            <p className='rm-text2'>Development phase 1.0 </p>
                            <ul>
                                <li>Metahorse (Game) - Pre-production (creation of game design and prototype)</li>
                                <li>Metahorse (Reality) - President horse selection to backup project
                                </li>
                                <li>Seed Fund</li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>
                            <Circle className='circle' />
                        </div>
                        <div className='col-10 pt-2 rm-info-mob'>
                            <p className='rm-text1'>Q1 2022</p>
                            <p className='rm-text2'>Development phase 2.0 </p>
                            <ul>
                                <li>Metahorse (Game) - Production (confirmation of game design and prototype)</li>
                                <li>Metahorse (Reality) - Attain official business license in dubai </li>
                                <li>Social Media launch</li>
                                <li>Pre-Marketing</li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>
                            <Circle className='circle' />
                        </div>
                        <div className='col-10 pt-2 rm-info-mob'>
                            <p className='rm-text1'>Q2 2022</p>
                            <p className='rm-text2'>Development phase 3.0 </p>
                            <ul>
                                <li>Coming</li>
                                <li>Metahorse (Game) - Production and Testing (bug reports, refinement testing, change requests)</li>
                                <li>Metahorse (Reality) - Engage with horse stable for partnership <br /> - First horse securing for giveaway during NFT PRE-SALES</li>
                                <li>Mass Marketing Campaign </li>
                                <li>Token creation</li>
                                <li>Private Sales</li>
                                <li>Metahorse trailer video</li>
                                <li>Metahorse team video</li>
                                <li>NFT PRE-SALES</li>
                                <li>Token Listing</li>
                                <li>NFT marketplace beta test</li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>
                            <Circle className='circle' />
                        </div>
                        <div className='col-10 pt-2 rm-info-mob'>
                            <p className='rm-text1'>Q3 2022</p>
                            <p className='rm-text2'>Development phase 4.0 </p>
                            <ul>
                                <li>Metahorse (Game) - Public Beta Testing </li>
                                <li>Metahorse (Reality) - Metaverse tournament 1.0 planning</li>
                                <li>NFT marketplace launching</li>
                                <li>Game Beta Launch 1.0</li>
                                <li>Guerilla marketing </li>
                                <li>New exchange listing </li>
                                <li>Team Expansion </li>
                                <li>CSR</li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>
                            <Circle className='circle' />
                        </div>
                        <div className='col-10 pt-2 rm-info-mob'>
                            <p className='rm-text1'>Q4 2022</p>
                            <p className='rm-text2'>Development phase 4.0 </p>
                            <ul>
                                <li>Metahorse (Game) - Game Launch <br />- Metaverse integration </li>
                                <li>Metahorse (Reality) - Hosting first ever METAVERSE TOURNAMENT</li>
                                <li>Brand awareness marketing</li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>
                            <Circle className='circle' />
                        </div>
                        <div className='col-10 pt-2 rm-info-mob'>
                            <p className='rm-text1'>2023 onwards</p>
                            <ul>
                            <li>Expansion of the Metahorse Ecosystem</li>
                            <li>Game advanced development </li>
                            <li>Brand Awareness Marketing</li>
                            <li>Metaverse development </li>
                        </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Roadmap;
