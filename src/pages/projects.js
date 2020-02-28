import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from '../components/projectcard/projectcard';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div style={{
      paddingTop:`15vh`,
      background:`white`,
      color:`black`,
    }}>
    <h1 style={{
          fontWeight:`500`,
          textAlign:`left`,
          marginLeft:`1.45rem`,
          fontSize:`3rem`,
      }}>What I've Done.</h1>
      <ProjectCard  title="IVC Computer Science Club" summary="Front-end development. UI/UX design." url="/images/Screen Shot 2020-02-27 at 10.52.15 PM.png" tech="ReactJS, CSS3, HTML5"/>
      <ProjectCard  title="LifeCost" summary="Front-end development. UI/UX design." url="/images/Screen Shot 2020-02-27 at 10.52.15 PM.png" tech="ReactJS, CSS3, HTML5" hack="HackUCI"/>
      </div>
  </Layout>

)

export default ProjectsPage
