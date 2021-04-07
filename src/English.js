import './All.css';
import Header from './Header';
import Footer from './Footer';
import eng1 from './pdf/eng1.pdf';
import eng2 from './pdf/eng2.pdf';
import eng3 from './pdf/eng3.pdf';
import eng4 from './pdf/eng4.pdf';
const English = () => {
    return (
        <div>
            <Header />
            <div className="all">
<h1>English</h1>
<h2>Paper 1</h2>
<div className="here">
<embed src={eng1} />
</div>

<h2>Paper 2</h2>
<div className="here">
<embed src={eng2} />
</div>

<h2>Paper 3</h2>
<div className="here">
<embed src={eng3} />
</div>

<h2>Paper 4</h2>
<div className="here">
<embed src={eng4} />
</div>

</div>
<Footer />
        </div>
    )
}

export default English
