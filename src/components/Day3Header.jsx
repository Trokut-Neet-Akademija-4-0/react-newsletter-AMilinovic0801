import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Day3Main from './Day3Main';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './Layout';
import { Error } from './Error';
import articleData from './articleData.js'
import Day3MainContent from './Day3MainContent.js'
import './Day3ComponentS.scss'


function MainContentWrapper() {
    return (
        <div className="main-content-wrapper">
            <Day3Main />
            <About />
            <Contact />
        </div>
    );
}

function Day3Header (){

    return(
        <nav>
                <BrowserRouter className='nav-list'>
                    <Routes>
                        <Route path='/'element={<Layout />}>
                                <Route index element={<Day3Main
                                    content = {Day3MainContent}
                                    articleContent = {articleData}
                                />} />
                                <Route path='/about' element={<About/>} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='*' element={<Error/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
    </nav>
    )
}

export default Day3Header;