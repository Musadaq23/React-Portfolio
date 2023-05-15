import React, {useState} from "react";

function Project(project) {
    const {name, deploy, github, src, srcAlt} = project.project
    const [hidden, setHidden] = useState(false);
    return (
        <div className="img-container"
            onMouseEnter={() => {
                setHidden(true)
            }}
            onMouseLeave={() => {
                setHidden(false)
            }}>
                <img src={src} alt={srcAlt}/>
                {hidden && (
                    <>
                    <h3 className="title">{name}</h3>
                    <a className="project-github" href={github}>Github</a>
                    {deploy && (<a className="link" href={deploy}>Link</a>)}
                    </>
                )}
        </div>
    )
}

export default Project;