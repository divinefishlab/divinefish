import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { fighters } from "../constants";
import GlowCard from './GlowCard';
import ProjectCard from './ProjectCard';

const Moments = () => {
  return (
    <div>
        <Row className='mt-5 mb-5 ml-5 mr-8'>
        {fighters.map((project,index)=>{
            return(
            <ProjectCard key={index} {...project}/>
                    )
                })}
        </Row>

    </div>
  )
}

export default Moments