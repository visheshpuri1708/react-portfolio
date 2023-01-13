import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/my.jpg"
const About = () => {




  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span style={{ color: 'yellow' }}>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -20, x: -20 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>AWS Certified <span style={{ color: 'yellow' }}>Security Specialist</span> & <span style={{ color: 'yellow' }}>Cloud Practitioner</span>, Computer Science 3rd year student
            enrolled in <span style={{ color: 'yellow' }}>Memorial University of
              Newfoundland</span> Bachelor of Science
            Program with hands-on experience
            gained through a <span style={{ color: 'yellow' }}>growth oriented
              internship</span>. Eager to work with
            industry leaders to drive personal and
            professional development in the field
            of <span style={{ color: 'yellow' }}>software development</span> and <span style={{ color: 'yellow' }}>cloud
              computing</span>.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}

          <motion.a href='VISHESH PURI.pdf' download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            target="_blank"
          >
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>

      </div >

    </div >
  )
}

export default About