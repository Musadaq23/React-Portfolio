import React from "react";
import Project from "../Project"

const projects = [
    {
        name: 'Text Editor',
        github: 'https://github.com/Musadaq23/PWA-Text-Editor',
        deploy: 'https://progressive-web-application19.herokuapp.com/',
        src: '../jate.PNG', 
        srcAlt: 'PWA text editor',
      },
      {
        name: 'Movie Finder',
        github: 'https://github.com/taada33/Movie-Selector',
        deploy: 'https://taada33.github.io/Movie-Selector/',
        src: '../popcorn.png', 
        srcAlt: 'Find movie trailers with reviews',
      },
      {
        name: 'Eats Match',
        github: 'https://github.com/acst52/EatsMatch',
        deploy: 'https://calm-brook-30132.herokuapp.com/',
        src: '../eatsmatch.png', 
        srcAlt: 'look for best price on food',
      },
      {
        name: 'Social Network API',
        github: 'https://github.com/Musadaq23/Social-Network-API',
        src: '../network.png', 
        srcAlt: '',
      }
]

export default function Portfolio() {
    return (
        projects.map((project, index) => {
            return (
                <Project project={project} key={index}/>
            ) 
        })
    )
}