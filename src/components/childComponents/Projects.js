import React from "react"; 
import '../../sass/projects.css'
import '../../a new-font-awesome/css/all.min.css'
function Projects() {
    return (
        <div className='projects'>
            <span className="title">Manage My Works</span>
            <div className="header">
            <h3>Latest Work We Have</h3>
            <button> See All Works</button>
            </div>
        <div className="content-models">
            <div className="models">
                <div className="model_1">
                    <div>
                    <span><i class="fa-solid fa-plus"></i></span>
                    <h4>plus iconFlyover Constructions</h4>
                    <p>Bulding & intraior</p>
                    </div>
                </div>
                <div className="model_2">
                <div>
                    <span><i class="fa-solid fa-plus"></i></span>
                    <h4>plus iconFlyover Constructions</h4>
                    <p>Bulding & intraior</p>
                    </div>
                </div>
                <div className="model_3">
                <div>
                    <span><i class="fa-solid fa-plus"></i></span>
                    <h4>plus iconFlyover Constructions</h4>
                    <p>Bulding & intraior</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Projects ;