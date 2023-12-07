import React from 'react'
import './styles/ContentNavigator.css'
import { motion } from 'framer-motion';
import method from '../images/methodItem.png';
import develop from '../images/developItem.png'



const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1 }
};


const ContentNavigator = () => {
    const navigateToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='navigator-container'>
            <div className='navigator-content'>
                <motion.div
                    className='content-item'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    onClick={() => navigateToSection('methodologies-section')}
                >
                    <div className='image-container'>
                        <img src={method} alt='method-item' className='item-image' />
                    </div>
                    <h1>METHODOLOGIES</h1>
                </motion.div>
                <motion.div
                    className='content-item'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <div className='image-container'>
                        <img src={develop} alt='method-item' className='item-image' />
                    </div>

                    <h1>KNOWLEDGES</h1>
                </motion.div>
                <motion.div
                    className='content-item'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <div className='image-container'>
                        <img src={develop} alt='method-item' className='item-image' />
                    </div>
                    <h1>MY OWN PROJECTS & MORE</h1>
                </motion.div>
            </div>
        </div >
    )
}

export default ContentNavigator