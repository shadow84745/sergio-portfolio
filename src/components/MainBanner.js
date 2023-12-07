import React from 'react'
import './styles/MainBanner.css'
import { Button } from 'react-bootstrap'

const MainBanner = () => {
    return (
        <div className='mainBannerContainer'>
            <div className='mainBannerContent'>
                <div className='leftSideMainBannerContent'>
                    <h3>MY PORTFOLIO</h3>
                    <h2>SOFTWARE ENGINEER & DEVELOPER</h2>
                </div>
                <div className='rightSideMainBannerContent'>
                    <h3>
                        My name is <strong>Sergio Guevara</strong>. I am a software engineer and developer specialized in technologies like
                        <span style={{ color: '#00BCD4' }}> React JS, React Native, JavaScript, PHP, HTML5, and CSS</span>, with basic knowledge in Laravel 10.
                        Passionate about web and mobile development, I have skills in both
                        <span style={{ color: '#00BCD4' }}> frontend</span> and backend. Additionally, I possess knowledge in project management using
                        <span style={{ color: '#00BCD4' }}> Scrum methodology</span>. My professional focus is to apply and expand my
                        knowledge in dynamic environments, keeping up with technological trends. Bilingual in Spanish and English,
                        I combine technical skills with a constant capacity for learning and adaptation.
                    </h3>


                    <Button className='button-contact'>CONTACT ME</Button>
                </div>
            </div>
        </div>
    )
}

export default MainBanner