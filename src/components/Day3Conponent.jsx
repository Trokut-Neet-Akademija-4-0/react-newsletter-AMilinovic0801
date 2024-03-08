import './Day3ComponentS.scss'
import Day3Header from './Day3Header.jsx';
import Day3Main from './Day3Main.jsx';
import Day3Footer from './Day3Footer.jsx';
import Day3MainContent from './Day3MainContent.js'
import articleData from './articleData.js'


function Day3Component(){
    //start of content definition

    return(
        <div className={'blog-container'}>
            <Day3Header />
            <Day3Main 
                content = {Day3MainContent}
                articleContent = {articleData}
            />
            <Day3Footer />
        </div>
    )
}


export { Day3Component };