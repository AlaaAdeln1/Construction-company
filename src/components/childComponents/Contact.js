import React, { Component } from "react";
import "../../a new-font-awesome/css/all.min.css" 
import "../../sass/contact.css"
class Contact extends Component {
    constructor(){
        super();
        this.state = {
            number :0 
        }
    }
    
    WriteHandler(){
        document.getElementById('username').focus();
    }
    render() {
    return (
            <div className='contact'>
            <div className="contain-form">
                <h4> request a quote</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                    nemo placeat dicta,itaque autem illo veniam natus nesciuntvite.</p>
                <form>
                    <input type="text" id="username" name="username" placeholder="Type Your Name"/>
                    <input type="email" name="email" placeholder="Type Your E-mail"/>
                    <input type="number" name="phonenumber" placeholder="Type Your Phone number"/>
                    <input list="country" placeholder="Select Your Country"/>
                        <datalist id="country">
                            Your country
                            <option value="Egypt">Egypt</option>
                            <option value="KSA">KSA</option>
                            <option value="USA">USA</option>
                            <option value="England">England</option>
                            <option value="Garman">Garman</option>
                        </datalist>
                        <textarea className="addtion" placeholder="Additional Details"></textarea>
                        <button className="quote">Write A Quote</button>
                </form>
            </div>
            <div className="img">
            <div>
                <h3>We Creative
                Unique Works</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi fugiat alias, aut velit voluptates cum perspiciatis eaque quasi sint, quo maxime voluptatem assumenda, earum dolor delectus a saepe liberoy</p>
                <button id="btn" onClick={this.WriteHandler}>Wite A Quote</button>
            </div>
            </div>
            </div>
    )
}
}
export default Contact;