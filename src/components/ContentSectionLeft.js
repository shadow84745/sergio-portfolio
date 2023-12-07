import React, { useEffect } from 'react';
import './styles/ContentSectionLeft.css'
import { motion } from 'framer-motion';
import agile from '../images/scrumMethod.png';

const ContentSectionLeft = (props) => {
  const [hover, setHover] = React.useState(false);

  const animation = {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 360, 360, 0],
    borderRadius: ["25%", "25%", "50%", "50%", "25%"]
  };

  const transition = {
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1]
  };

  // Restablecer el estado hover después de la duración de la animación
  useEffect(() => {
    if (hover) {
      const timer = setTimeout(() => {
        setHover(false);
      }, transition.duration * 1000); // Convierte la duración a milisegundos

      return () => clearTimeout(timer);
    }
  }, [hover, transition.duration]);


  return (
    <div className='section-content-container'>
      <div className='content-section'>
        <div className='content-text'>
          <div dangerouslySetInnerHTML={{ __html: props.text }} className='text'></div>
        </div>
        <div className='content-image'>
          <motion.div
            className="box"
            animate={hover ? animation : ""}
            transition={transition}
            onClick={() => setHover(true)}
          >
            <img src={agile} alt='agile-scrum' className='animated-image' />
          </motion.div>
          <p className="click-instruction">Click the image</p>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionLeft;
