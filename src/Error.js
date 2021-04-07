import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const Error = () => {
    return (
        <div>
        <Header />
            <h1>404 PAGE NOT FOUND</h1>

        
            

            
            <Link to="/info">Information Technology</Link>
            <Link to="/web">WEB APPLICATION</Link>
            <Link to="/eng">English</Link>
            <Link to="/hindi">Hindi</Link>
            
           
<Footer />
        </div>
    )
}

export default Error
