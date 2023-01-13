import React, { useEffect, useState } from 'react';
import "./Portfolio.scss"
import { workImages } from '../../../Data';
import { FiEye } from "react-icons/fi"
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  // eslint-disable-next-line
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter(workImage => {
        return workImage.category.toLowerCase() === tab.name;

      })
      setWorks(newWork)
    }
  }, [tab])

  // eslint-disable-next-line
  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"

      >
        <span style={{ color: "yellow" }}>My Works</span>
        <h1>Awesome Projects</h1>
      </motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage"
              key={work.id}
            >
              <img src={work.img} alt="workImg" />
              <h5 style={{ color: 'white' }}>{work.description}</h5>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='hoverLayer'
              >
                

                <motion.a href={work.githubLink}
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <FiEye />
                </motion.a>



              </motion.div>


            </div>
          )
        })}


      </motion.div>


    </div>
  )
}

export default Portfolio