import React ,{Component} from "react"; 
import '../../sass/home.css';
class Home extends Component {
    render() {
        const changeUrl = () => {
            window.location.href = '/Projects'
        }
        return (
        <div className="content">
        <div className="text">
        <h3>Best ideas - Best solution - Best result</h3>
        <h1>Manufacture A Variety Of<br/> High Quality Products</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta sint, aliquid quod 
        sapiente <br/>voluptates corrupti delectus autem porro quos dolor est</p>
        <button id="btn" onClick={changeUrl}>More Services</button>
        </div>
        </div>
        )
    
}
}
export default Home;