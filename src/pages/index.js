import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentCard from '../components/contentcard/contentcard';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Particles height="210vh" style={{position:`absolute`, maxWidth:'99%',}}
     params={{
      "particles": {
        "number": {
            "value": 130
        },
        "size": {
            "value": 2
        },
    },
      "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse",
            }
        }
        }
      }
      }
      />
    <ContentCard title="Hey, my name's Gabby." type='content' content="I am a software engineer with a focus on frontend technologies in Irvine, California. I'm also studying computer science as a sophomore at Irvine Valley College, planning to transfer Fall 2020 to University of California, Irvine." 
    url='data:image/jpeg;base64,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'/>
    <ContentCard title="What I do." type='nocontent' />
    
  </Layout>

)

export default IndexPage