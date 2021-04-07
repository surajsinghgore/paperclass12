import './All.css';
import Header from './Header';
import Footer from './Footer';
import hin1 from './pdf/hin1.pdf';
const Hindi = () => {
    return (
        <div>
            <Header />
            <div className="all">
<h1>Hindi</h1>
<h2>Paper 1</h2>
<div className="here">
<embed src={hin1} />
</div>
</div>
<Footer />
        </div>
    )
}

export default Hindi
