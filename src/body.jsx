import banner from './images/banner.jpg'
import member from './images/member-1.jpg';
import left from './images/left.png';
import right from "./images/right.png";
import item from './images/item.jpg'
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';
import item4 from './images/item4.jpg';
import item5 from './images/item5.jpg';
import item6 from './images/item6.jpg';
import { useState } from 'react';
const recentWorkSilderData = [
                                {
                                    id : 0,
                                    data: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Quam dolore officia labore in similique dolorem qui nisi, cum 
                                            illo. Sequi perferendis exercitationem eius ab veniam aspernatur 
                                            ad laboriosam veritatis provident?`,
                                },
                                {
                                    id : 1,
                                    data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Similique necessitatibus numquam architecto, quaerat esse earum quis 
                                            itaque ducimus temporibus laudantium hic veniam excepturi.
                                             In ut illo vitae 
                                            fugiat sequi maxime?
                                            
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Quam dolore officia labore in similique dolorem qui nisi, cum 
                                            illo. Sequi perferendis exercitationem eius ab veniam aspernatur 
                                            ad laboriosam veritatis provident?`,
                                },
                                {
                                    id : 2,
                                    data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Similique necessitatibus numquam architecto, quaerat esse earum quis 
                                            itaque ducimus temporibus laudantium hic veniam excepturi. In ut illo 
                                            vitae 
                                            fugiat sequi maxime?
                                            
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Quam dolore officia labore in similique dolorem qui nisi, cum 
                                            illo. Sequi perferendis exercitationem eius ab veniam aspernatur 
                                            ad laboriosam veritatis provident?`,
                                }

] 

const testimonialSilderData = [
    {
        id : 0,
        data: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quam dolore officia labore in similique dolorem qui nisi, cum 
                illo. Sequi perferendis exercitationem eius ab veniam aspernatur 
                ad laboriosam veritatis provident?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quam dolore officia labore in similique dolorem qui nisi, cum 
                illo. Sequi perferendis exercitationem eius ab veniam aspernatur `,
    },
    {
        id : 1,
        data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Similique necessitatibus numquam architecto, quaerat esse earum quis 
                itaque ducimus temporibus laudantium hic veniam excepturi.
                 In ut illo vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. 
                 Quam dolore officia labore in similique dolorem qui nisi, cum 
                 illo. Sequi perferendis exercitationem eius ab veniam aspernatur ` 
    },
    {
        id : 2,
        data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Similique necessitatibus numquam architecto, quaerat esse earum quis 
                itaque ducimus temporibus laudantium hic veniam excepturi. In ut illoLorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quam dolore officia labore in similique dolorem qui nisi, cum 
                illo. Sequi perferendis exercitationem eius ab veniam aspernatur  `,
    }

] 


const Body =()=>{
    const [margin,setMargin] = useState(0);
    const [sliderNumber,setSliderNumber] = useState(1)
    const onLeftClick= ()=>{
        if (sliderNumber === 1){
            setSliderNumber(3)
            setMargin(200)
        }else if(sliderNumber ===2){
            setSliderNumber(1)
            setMargin(0)
        }else{
            setSliderNumber(2)
            setMargin(100)
        }
    }
    
    const onRightClick = ()=>{
        
        if (sliderNumber === 1){
            setSliderNumber(2)
            setMargin(100)
        }else if(sliderNumber ===2){
            setSliderNumber(3)
            setMargin(200)
        }else{
            setSliderNumber(1)
            setMargin(0)
        }

    }
  
      return(
          <>
            <Header/>      
            <Home onLeftClick={onLeftClick} onRightClick={onRightClick} margin={margin}/>  
            <Service/>
            <Portfolio/>
            <Testimonial onLeftClick={onLeftClick} onRightClick={onRightClick} margin={margin}/>
            <Price/>
            <Contact/>
            <Footer/>
        </>
      )
}

export default Body;

const Header = ()=>{
    const [showMenu,onShowMenu] = useState(false)
    const onMenuButton = ()=>{
        showMenu===false?onShowMenu(true):onShowMenu(false)
    }
    return(
    <div className="header_div">
        <header>
            <h1><a>BLUE</a></h1>
            <li style={showMenu === false?{maxHeight:'0px',borderTop: '0px solid #101010'}:{maxHeight:'600px',borderTop: '1px solid #101010'}}>
                <ul><a href="#home">HOME</a></ul>
                <ul><a href="#service">SERVICE</a></ul>
                <ul><a href="#portfolio">PORTFOLIO</a></ul>
                <ul><a href="#testimonial">TESTIMONIAL</a></ul>
                <ul><a href="#price">PRICE</a></ul>
                <ul><a href="#contact">CONTACTS</a></ul>
            </li>
            <button className='header_button' onClick={onMenuButton}>
                <span><hr/></span>
                <span><hr/></span>
                <span><hr/></span>
            </button>
        </header>
       
        </div>
)
}

const Home = ({onLeftClick,onRightClick,margin})=>{
    return(
        <div className='home' id='home'>
        <div className="home_slider">
                <img src={banner} />
                <div className='slider_details'>
                    <h1>BLUE ONEPAGE WEBSITE</h1>
                    <h2>Clean And Professional One Page Website</h2>
                    <button>Join Us</button>
                </div>
    
        </div>
        <div className='home_details'>
            <div>
                <div className='recent_works'>
                    <h2>RECENT WORKS</h2>
                    <div className='slider_container'>
                        <div className='slide' >
                            {recentWorkSilderData.map((work)=>(<p className='a_slide' key={work.id} 
                                                        style={work.id === 0?{marginLeft : `-${margin}%`}:{marginLeft : '1px'}}>
                                {work.data}</p>))}
                        </div>
                     </div> 
                     <p className='slider_controller'>
                        <i className="fa-solid fa-angle-left" onClick={onLeftClick}></i> 
                        <i className="fa-solid fa-angle-right" onClick={onRightClick}></i>
                     </p>
                </div>
                <div className='welcome'>
                    <h2>WELCOME TO OUR SITE</h2>
                    <div>
                        <img src={member}></img>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet, 
                            maiores nam debitis quo harum quibusdam perspiciatis sequi mollitia cum velit 
                            corrupti excepturi neque deserunt delectus nobis nisi dolorem fugiat.
                            <button className='welcome_button'>READ MORE</button>
                        </p>
                       
                    </div>
                    
                </div>
                </div>
            </div>
    </div>
    )
}

const Service = ()=>(
    <div className='service' id='service'>
        <h1>SERVICE</h1>
        <hr />
        <p>The Key Features Of Our Job</p>
        <div className='service_features'>
            <div className='feature'>
                <div className='logo_border'><i className="fa-solid fa-house-chimney"></i></div>
                <h2>SUPPORT</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus uam natus </p>
            </div>
            <div className='feature'>
                <div className='logo_border'><i className="fa-solid fa-server"></i></div>
                <h2>WELL DOCUMENTED</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus repellat </p>
            </div>
            <div className='feature'>
                <div className='logo_border'><i className="fa-regular fa-clock"></i></div>
                <h2>DESIGN UI/UX</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus repellat </p>
            </div>
            <div className='feature'>
                <div className='logo_border'><i className="fa-regular fa-heart"></i></div>
                <h2>WEB SECUIRITY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus repellat </p>
            </div>
        </div>
    </div>
)

const Portfolio = ()=>(
    <div className='portfolio' id='portfolio'>
        <h1>FEATURED PROJECTS</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque iusto officiis vel suscipit! Dolore</p>
        <div className='portfolio_container'>
            <div className='portfolios'>
               <div className='image_div'>
                    <p>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-link"></i>
                    </p>
                    <img src={item}/>
                    <figcaption>
                        <p>Wall Street</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </figcaption>
                </div>
               <div className='image_div'>
                    <p>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-link"></i>
                        </p>
                        <img src={item2}/>
                        <figcaption>
                        <p>Wall Street</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </figcaption>
               </div>
               <div className='image_div'>
                    <p>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-link"></i>
                        </p>
                        <img src={item3}/>
                        <figcaption>
                        <p>Wall Street</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </figcaption>
               </div>
               <div className='image_div'>
                    <p>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-link"></i>
                        </p>
                        <img src={item4}/>
                        <figcaption>
                        <p>Wall Street</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </figcaption>
               </div>
               <div className='image_div'>
                        <p>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-link"/>
                        </p>
                        <img src={item5}/>
                        <figcaption>
                        <p>Wall Street</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </figcaption>
               </div>
               <div className='image_div'>
                    <p>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-link"></i>
                        </p>
                        <img src={item6}/>
                        <figcaption>
                        <p>Wall Street</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </figcaption>
               </div>
            </div>
           
        </div>
    </div>
)

const Testimonial = ({onLeftClick,onRightClick,margin})=>{
   

    
    
    return(
    <div className='testimonial' id='testimonial'>
        <h1>WHAT PEOPLE SAY</h1>
        <hr />
        <div className='testimonial_slider_container'>
            
            {testimonialSilderData.map(
                (testimonial)=>(<div className={`testimonial_${testimonial.id} testimonial_slider`} key={testimonial.id}
                                    style={testimonial.id === 0?{marginLeft : `-${margin}%`}:{marginLeft : '1px'}}
                                                         >
                                                            
                                                                <img src={member}/>
                                                                <p className='testimonial_name'>KATTY FLOWER</p>
                                                                <p className='a_testimonial'>{testimonial.data}</p>
                                                            
                                                        </div>))}
                     
        </div>
                    <p className='slider_controller'>
                        <i className="fa-solid fa-angle-left" onClick={onLeftClick}></i> 
                        <i className="fa-solid fa-angle-right" onClick={onRightClick}></i>
                     </p>
    </div>
)
}

const Price = ()=>(
    <>
    <div className='price' id='price'>
        <h1>PRICE</h1>
        <hr/>
        <p>Our Price For Your Company</p>
        <div className='price_container'>
            <div className='general_price silver'>
                <h1>Silver</h1>
                <h2>$30<p>month</p></h2>
                <ul className='bonus_list'>
                    <li>No Bonus Point</li>
                    <li>No Bonus Point</li>
                    <li>No Bonus Point</li>
                    <li>No Bonus Point</li>
                    <li className='sign_up'><a href="#home">SIGN UP</a></li>
                </ul>
            </div>
            <div className='general_price gold'>
                <h1>gold</h1>
                <h2>$60<p>month</p></h2>
                <ul className='bonus_list'>
                    <li>Free Trial</li>
                    <li>Free Trial</li>
                    <li>Free Trial</li>
                    <li>Free Trial</li>
                    <li className='sign_up'><a href="#home">SIGN UP</a></li>
                </ul>
            </div>
            <div className='general_price diamond'>
                <h1>gold</h1>
                <h2>$90<p>month</p></h2>
                <ul className='bonus_list'>
                    <li>All Bonus Points</li>
                    <li>All Bonus Points</li>
                    <li>All Bonus Points</li>
                    <li>All Bonus Points</li>
                    <li className='sign_up'><a href="#home">SIGN UP</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className='follow'>
    <h1>FOLLOW US</h1>
        <hr/>
        <p>Beautifully simple follow buttons to help you get followers on</p>
        <div>
            <div className='social_button'>
                <i className="fa-solid fa-thumbs-up"></i>
            </div>
            <div className='social_button'>
                <i className="fa-brands fa-twitter"></i>
            </div>
            <div className='social_button'>
                <i className="fa-solid fa-basketball"></i>
            </div>
        </div>
    </div>
    <div className='fixed_img'>
            <img src={banner}></img>
        </div>
    </>
)

const Contact = ()=>(
    <div className='contact' id='contact'>
    <h1>CONTACT</h1>
    <hr/>
    <p>Leave a Message</p>
    <div className='form_div'>
        <form>
            <input className="form_input"type='text' placeholder='Your Name...'/>
            <input type='email' placeholder='Your email...'/>
            <input type='text' placeholder='Subject...'/>
            <textarea rows='10' cols='50' placeholder='Messages...'/>
            <input type='submit' value='send' className='form_submit'/>
        </form>
        <div className='contact_info'>
            <h1>Contact Me</h1>
            <hr/>
            <div>
                <p>Anthony Akpovire</p>
                <p>lagos,Nigeria</p>
                <p><a href='tel:+2347030234620'>+234 7030234620 click to call</a></p>
                <p><a href='mailto:aakpovire@gmail.com'>aakpovire@gmail.com</a></p>
            </div>
        </div>
        
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301679.11227925256!2d3.2662906732208024!3d6.551475461814127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1659878223538!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} loading="lazy" />
    </div>
)

const Footer = ()=>(
    <footer className='footer'>
        <div className='footer_div'>
            <p>NEWSLETTER SIGNUP</p>
            <p>Get Cool Stuff! We hate spam!</p>
            <input  className='footer_input' placeholder='Enter Your Email...'/>
            <div>
            <i className="fa-solid fa-thumbs-up"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-skype"></i>
            <i className="fa-solid fa-basketball"></i>
            <i className="fa-brands fa-youtube"></i>
            </div>
            <p className='footer_last_p'>Developed By <a>Anthony Akpovire</a></p>
        </div>    
    </footer>
)