import React from "react"; 
import '../../sass/element.css'
import '../../a new-font-awesome/css/all.min.css'
function Element() {
    return (
        <div className='element'>
            <div className="content-offers">
                <div className="offers">
                    
                    <div>
                        <span><i class="fa-solid fa-helmet-safety"></i></span>
                        <h5>Architect Sketch</h5>
                        <p>Lorem ipsum dolor sit amet dolor .</p>
                    </div>
                    <div>
                        <span><i class="fa-solid fa-truck-pickup"></i></span>
                        <h5>Equipment</h5>
                        <p>Lorem ipsum dolor sit amet dolor .</p>
                    </div>
                    <div>
                        <span><i class="fa-solid fa-screwdriver-wrench"></i></span>
                        <h5>Tools</h5>
                        <p>Lorem ipsum dolor sit amet dolor .</p>
                    </div>
                    <div>
                        <span><i class="fa-solid fa-ruler"></i></span>
                        <h5>Implementation</h5>
                        <p>Lorem ipsum dolor sit amet dolor .</p>
                    </div>
                </div>
                <div className="img"></div>
            </div>
        </div>
    )
}
export default Element;