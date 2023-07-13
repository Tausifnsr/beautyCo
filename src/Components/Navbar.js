import { Component } from "react"
import './Navbar.css';
// import { Link } from 'react-router-dom';





class Navbar extends Component {
    render() {
        return(
            <nav className="mainNav">
                <div className="logo">
                <a href="/"><img src="../images/brand.png" height={80} alt="logo"/></a>   
                </div> 

                <div className="navItems">
                    <ul>
                    <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/brands">Our Brands</a>
                            <ul>
                                <a href="/"><li className="dropDown">CND</li></a>
                                <a href="/"><li className="dropDown">BeautyCo</li></a>
                                <a href="/"><li className="dropDown">Loreal</li></a>
                            </ul>
                        </li>
                        <li><a href="/categories">Categories</a>
                            <ul>
                                <a href="/"><li className="dropDown">Nail</li></a>
                                <a href="/"><li className="dropDown">Facial</li></a>
                                <a href="/"><li className="dropDown">Skin Care</li></a>
                            </ul>
                        </li>
                        <li><a href="/paymentterms">Payment</a></li>
                        <li><a href="/deliveryterms">Shipment & Delivery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>  
                <div className="pro-section">
                    <div className="pro-head">
                        <p>Just for Pros</p>
                        <a href="/"><button className="btn">Sign In</button></a>
                    </div>
                    <div className="pro-list">
                        <ul>
                        <li><a href="/">Pro Products</a>
                            <ul>
                                <a href="/"><li className="dropDown">Shellac</li></a>
                                <a href="/"><li className="dropDown">Enhancements</li></a>
                                <a href="/"><li className="dropDown">CND LED Lamp</li></a>
                            </ul>
                        </li>
                        <li><a href="/deliveryterms">Education</a>
                        <ul>
                                <a href="/"><li className="dropDown">Classes</li></a>
                                <a href="/"><li className="dropDown">Certifications</li></a>
                                <a href="/"><li className="dropDown">Master Program</li></a>
                            </ul>
                        </li>
                        <li><a href="/contact">Resources</a>
                        <ul>
                                <a href="/"><li className="dropDown">Product Profiles</li></a>
                                <a href="/"><li className="dropDown">Video Library</li></a>
                                <a href="/"><li className="dropDown">Lamp Warranty</li></a>
                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>     
            </nav>
        )
    }
}

export default Navbar
