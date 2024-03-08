import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Day3Main from './Day3Main';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './Layout';
import { Error } from './Error';
import articleData from './articleData.js'
import Day3MainContent from './Day3MainContent.js'
import './Day3ComponentS.scss'


function Day3Header (){

    return(
        <nav>
        <div className='header-nav'>
            <div className='main-h'>
                <h3>Home</h3>
            </div>
            <div className="nav-container">
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
            </div>
        </div>
    </nav>
    )
}

export default Day3Header;