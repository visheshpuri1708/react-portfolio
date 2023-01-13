import React from 'react'
import portfolio from "../../../assets/new1.png"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (

    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >


      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Vishesh Puri</span> </h3>
        <span className='text'>Passionate<br /> to craft <span style={{ color: 'yellow' }}>innovative</span> <br />  products that bring a <br /> <span style={{ color: 'yellow' }}>difference!</span></span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          LET'S CONNECT</motion.a>


        <div
          className="web"

        >
          AWS Certified Security Specialist
        </div>

        <div
          className="freelance"
        >
          Aspiring Software Developer

        </div>


      </div>




    </motion.div>


  )
}

export default Home