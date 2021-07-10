import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Home = () => { return(<h3>Home</h3>)}
const About = () => { return(<h3>About</h3>)}
const Contact = () => { return(<h3>Contact</h3>)}
const App = ()=> {
    return (
        <Router>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav> 
            <Route path="/" exact component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/contact"  component={Contact} />
     </Router>
    )
}
export default App