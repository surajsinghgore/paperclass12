
import { Link } from 'react-router-dom';
import './Cards.css';
import img1 from './images/eng.jpg'
import img2 from './images/hindi.jpg'
import img3 from './images/it.jpg'
import img4 from './images/web.jpg'



export const Cards = () => {

 
    

    return (
        
        <div className="main">

     
           <div className="child1" >
           <Link to="/info"><img src={img3}  alt="eng not dispalyed" /></Link> 
            <p>Information Technology</p>
            </div>

            <div className="child2">
            <Link to="/web"><img src={img4}  alt="eng not dispalyed"/></Link>
            <p>Web Application</p></div>
            <div className="child3"><Link to="/eng"><img src={img1}  alt="eng not dispalyed"/></Link><p>English</p></div>
            <div className="child4"><Link to="/hindi"><img src={img2}  alt="eng not dispalyed"/></Link><p>Hindi</p></div>

            
        </div>
    )
}

export default Cards;