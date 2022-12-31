import React from "react"; 
import '../../sass/articles.css'
import '../../a new-font-awesome/css/all.min.css'
function Articels() {
    return (
        
        <div className="articles">
            <div className="header">
                <h1>Recent Article</h1>
                <button>More Articles</button>
            </div>
        <div className="content-page"> 
        <div className="contain-articles">
        <article>
            <div className="img"></div>
            <h3>Central Valley Comes Calling <br/>
                With Industrail Options</h3>
            <p>Lorem ipsum dolor sit, amet consectetur
                Dolorum explicabo quod placeat blanditiis nostrum,
                praesentium totam nam aspernatur ipsam delectus optio
                minima! Adipisci, necessitatibus.
                </p>
                <span><i class="fa-solid fa-arrow-right"></i></span>
        </article>
        <article>
        <div className="img"></div>
        <h3>Central Valley Comes Calling <br/>
            With Industrail Options</h3>  
        <p>Lorem ipsum dolor sit, amet consectetur
            Dolorum explicabo quod placeat blanditiis nostrum,
            praesentium totam nam aspernatur ipsam delectus optio
            minima! Adipisci, necessitatibus.
            </p>
            <span><i class="fa-solid fa-arrow-right"></i></span>
        </article>
        <article>
        <div className="img"></div>
        <h3>Central Valley Comes Calling <br/>
            With Industrail Options</h3>  
        <p>Lorem ipsum dolor sit, amet consectetur
            Dolorum explicabo quod placeat blanditiis nostrum,
            praesentium totam nam aspernatur ipsam delectus optio
            minima! Adipisci, necessitatibus.
            </p>
            <span><i class="fa-solid fa-arrow-right"></i></span>
        </article>
        </div>
        </div>
        </div>
    )
}
export default Articels