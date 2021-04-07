import './All.css';
import Header from './Header';
import Footer from './Footer';
import it1 from './pdf/it1.pdf';
import it2 from './pdf/it2.pdf';
import it3 from './pdf/it3.pdf';
import it4 from './pdf/it4.PDF';
import it5 from './pdf/it5.pdf';
const Info = () => {
    return (
        <div>
   <Header />
<div className="all">
<h1>Information Technology</h1>
<h2>Paper 1</h2>
<div className="here">
<embed src={it1} />
</div>

<h2>Paper 2</h2>
<div className="here">
<embed src={it2} />
</div>

<h2>Infor tech blue print</h2>
<div className="here">
<embed src={it3} />
</div>

<h2>Paper 4</h2>
<div className="here">
<embed src={it4} />
</div>

<h2>Paper 5</h2>
<div className="here">
<embed src={it5} />
</div>
</div>

   <Footer />
        </div>
    )
}

export default Info;
