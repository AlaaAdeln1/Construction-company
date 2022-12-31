import React, { Component } from "react"; 
import '../../sass/clients.css'
import '../../a new-font-awesome/css/all.min.css'
class Clients extends Component {
    render(){
        const massage = () =>{
            console.log("this is button made to change the client image and client opinion")
        }
    return (
        <div className='clients'>
            <div  id="img" className="img"></div>
            <div className="opinion-client">
                <h3>What Our Client Say ?</h3>
                <p>
                "There Are Many Variations Of Passages Of
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Et temporibus eius suscipit repellat quasi tenetur
                deserunt sapiente ad incidunt amet assumenda requerments
                quaerat necessitatibus magnam officia consequatur.
                If You Are Going To Use A Passage"
                </p>
                <div className="arrow">
                    <span onClick={massage} className="left"><i class="fa-solid fa-arrow-left"></i></span>
                    <span onClick={massage} className="right"><i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    )
    }
}
export default Clients ; 