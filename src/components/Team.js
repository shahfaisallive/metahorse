import React from 'react';
import { ReactComponent as PrevBtn } from '../media/prevbtn.svg'
import { ReactComponent as NextBtn } from '../media/nextbtn.svg'
import { ReactComponent as ActiveLine } from '../media/activeline.svg'
import { ReactComponent as InactiveLine } from '../media/inactiveline.svg'
import MetaSami from '../media/MetaSami.JPG'
import MetaWin from '../media/MetaWin.JPG'
import MetaJun from '../media/MetaJun.JPG'
import MetaJoseph from '../media/MetaJoseph.JPG'
import MetaJohn from '../media/MetaJohn.JPG'


const Team = () => {
    return (
        <div className='team-wrapper container-fluid justify-content-center' id='team'>
            <div className='row container ml-auto mr-auto'>
                <p className='heading1 mt-4'>Core Team</p>
                <p className='text-center text-light'>The team always plays an important role in the success of a project.As a team, we have been working with each other for more than 5years, with everyone being highly experienced in their own expertise</p>
            </div>

            <div className='container-fluid team-inner d-flex justify-content-center'>
                <div className='container row d-flex justify-content-center'>
                    <div className='col-sm team-member-div justify-content-center'>
                        <div className='row team-info-member justify-content-center'>
                            <img src={MetaSami} alt='metasami' className='memberImg' />
                        </div>
                        <div className='row team-info-member justify-content-center'>
                            <p className='text2 '>MetaSami</p>
                        </div>
                        <div className='row team-info-member justify-content-center'>
                            <p className='text3'>PRESIDENT & CO-FOUNDER</p>
                        </div>
                    </div>

                    <div className='col-sm  team-member-div justify-content-center'>
                        <div className='row team-info-member justify-content-center'>
                            <img src={MetaWin} alt='metawin' className='memberImg' />
                        </div>

                        <div className='row team-info-member justify-content-center'>
                            <p className='text2 '>MetaWin</p>
                        </div>
                        <div className='row team-info-member justify-content-center'>
                            <p className='text3'>CEO & CO-FOUNDER</p>
                        </div>
                    </div>

                    <div className='col-sm  team-member-div justify-content-center'>
                        <div className='row team-info-member justify-content-center'>
                            <img src={MetaJun} alt='metajun' className='memberImg' />
                        </div>

                        <div className='row team-info-member justify-content-center'>
                            <p className='text2 '>MetaJun</p>
                        </div>
                        <div className='row team-info-member justify-content-center'>
                            <p className='text3'>CMO & CO-FOUNDER</p>
                        </div>
                    </div>

                    <div className='col-sm  team-member-div justify-content-center'>
                        <div className='row team-info-member justify-content-center'>
                            <img src={MetaJoseph} alt='metajoseph' className='memberImg' />
                        </div>

                        <div className='row team-info-member justify-content-center'>
                            <p className='text2 '>MetaJoseph</p>
                        </div>
                        <div className='row team-info-member justify-content-center'>
                            <p className='text3 text-center'>HEAD OF STRATEGIC PARTNERSHIP</p>
                        </div>
                    </div>

                    <div className='col-sm  team-member-div justify-content-center'>
                        <div className='row team-info-member justify-content-center'>
                            <img src={MetaJohn} alt='MetaJohn' className='memberImg' />
                        </div>
                        <div className='row team-info-member justify-content-center'>
                            <p className='text2 '>MetaJohn</p>
                        </div>
                        <div className='row team-info-member justify-content-center'>
                            <p className='text3 text-center'>HEAD OF COMMUNITY MANAGEMENT</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='container d-flex justify-content-center row pt-5 pb-5 ml-auto mr-auto'>
                <div className='col-2 d-flex'>
                    <PrevBtn className='btn1' />
                    <p className='text1 ml-1'>PREVIOUS</p>
                </div>

                <div className='col-8 d-flex'>
                    <ActiveLine className='line mr-auto ml-auto mt-auto mb-auto' />
                    <InactiveLine className='line mr-auto ml-auto mt-auto mb-auto' />
                    <InactiveLine className='line mr-auto ml-auto mt-auto mb-auto' />
                </div>

                <div className='col-2 d-flex'>
                    <p className='text1 mr-1'>NEXT</p>
                    <NextBtn className='btn1' />
                </div>
            </div> */}
        </div>
    )
}

export default Team;
