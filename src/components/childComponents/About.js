import React from "react"; 
import '../../sass/about.css';
import '../../a new-font-awesome/css/all.min.css'
function About() {
    const article = () => {
        window.location.href = '/Articels'
    }
    return (
        <div className="about">
        <div className="contain-shapes">
        <div className="text">
                <h1>Providing The Best Global Industry <br/>
                    Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda soluta, ullam delectus quia accusamus laboriosam? Quia tempora ducimus voluptatum nihil illo sunt rerum non explicabo id sit.
                    Iste, deleniti eveniet?</p>
            </div>
        <div className="shapes">
            <div className="shape_1">
                    <span><i class="fa-solid fa-house"></i></span>
                    <h5>Civil Engineering & Constructions</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim culpa excepturi ullam, sit facilis inventore nam vel Read</p>
                    <button onClick={article}>Read More</button>
            </div>
                <div className="shape_2">
                <span><i class="fa-solid fa-house"></i></span>
                    <h5>Civil Engineering & Constructions</h5>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim culpa excepturi ullam, sit facilis inventore nam vel</p>
                    <button onClick={article}>Read More</button>
            </div>
                <div className="shape_3">
                <span><i class="fa-solid fa-house"></i></span>
                    <h5>Civil Engineering & Constructions</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim culpa excepturi ullam, sit facilis inventore nam ve Read</p>
                <button onClick={article}>Read More</button>
            </div>
        </div>
        </div>
        </div>
    )
}
export default About;