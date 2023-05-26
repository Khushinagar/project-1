    import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Services from "./Services";
import '../styles/App.scss'
import '../styles/Mediaquery.scss'

function App(){
    return(
        <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Services" element={<Services/>} />
        
        </Routes>
        <Footer />
        </Router>
    )
}

export default App;






// import React from 'react'
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Header';
// import Home from './Home';
// import '../styles/App.scss'
// import '../styles/header.scss'
// import '../styles/home.scss'

// function App() {
//   return (
//     <Router>
//         <Header />
//         <Routes>
//     <Route path ='/' element={<Home />} />
//     </Routes>
//     </Router>
//   );
// }

// export default App