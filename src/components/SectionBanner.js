import React from 'react'
import './styles/SectionBanner.css'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const SectionBanner = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='section-container' ref={ref}>
            <div className='section-content'>
                <motion.h1
                    className='section-title'
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {props.title}
                </motion.h1>
            </div>
        </div>
    )
}

export default SectionBanner