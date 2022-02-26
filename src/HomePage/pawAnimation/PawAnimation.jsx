import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './pawAnimation.css';

const PawAnimation = () => {
  const [angleDeg, setAngleDeg] = useState(60);

  // every 8 seconds generate a new angle for paw prints
  useEffect(() => {
    let prevAngleDeg = 0
    let newAngleDeg =  

    setInterval(() => {
      // generate a new angle
      newAngleDeg = Math.floor(Math.random()*360);
      while (Math.abs(newAngleDeg - prevAngleDeg ) < 90){
        newAngleDeg = Math.floor(Math.random()*360);
      }
      setAngleDeg(newAngleDeg)
      prevAngleDeg = newAngleDeg
    }, 9000);
  }, []);

  return ( 
      <>
        <div className='paw-container'>
          <div className='paw-holder' style={{transform: `rotate(${angleDeg}deg)` }}>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw1"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw2"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw3"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw4"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw5"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw6"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw7"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw8"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw9"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw10"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw11"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw12"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw11"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw12"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw11"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw12"></div></div>
            </div>
            <div className='paw-pair'>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw11"></div></div>
              <div className={useColorModeValue("paw dark-paw", "paw")}><div className="paw12"></div></div>
            </div>
          </div>
        </div>
      </>
   );
}
 
export default PawAnimation;