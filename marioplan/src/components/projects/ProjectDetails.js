import React from 'react'


const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus quibusdam veniam inventore quos vel repellendus, distinctio perferendis ducimus velit cumque, nostrum, consectetur necessitatibus at omnis dolores magnam commodi explicabo.</p>
                </div>

                <div className="card-action gret lighten-4 prey-text">
                    <div>Posted by Lucas</div>
                    <div>18th Dec, 8pm</div>
                </div>
            </div>
        </div>
    )
}


export default ProjectDetails
