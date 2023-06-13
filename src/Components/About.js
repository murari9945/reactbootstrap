import Nav from 'react-bootstrap/Nav';
import {Navbar,Container} from 'react-bootstrap';
// import {footer} from 'react-bootstrap';
const About=()=>{
return(
    <div>
        <header style={{display:'flex',color:"white",backgroundColor:'blue',justifyContent:"center",padding:'20px',fontSize:'40px'}}>
            The Generics
        </header>
   

      <Container style={{display:'flex',justifyContent:'center',backgroundColor:'white',padding:'50px'}} >
    
        <p style={{color:"black",backgroundColor:'white',padding:'20px',fontSize:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It has revolutionized the way businesses operate and consumers shop. With the rise of digital technologies and the widespread use of the internet, e-commerce has experienced significant growth and has become a fundamental part of the global economy.

One of the key advantages of e-commerce is its convenience. Online shopping allows consumers to browse and purchase products from the comfort of their homes or any location with internet access. This convenience eliminates the need for physical store visits and enables customers to shop at any time of the day or night, making it highly convenient for busy individuals or those with limited mobility.

E-commerce offers a wide range of products and services, catering to diverse consumer needs. From clothing and electronics to groceries and services like travel bookings and online education, almost anything can be bought and sold online. This extensive product availability provides customers with greater choices and the a


        </p>
      </Container>

      <footer style={{ backgroundColor: 'lightgray', padding: '20px' }}>
        <Container>
          <p>© 2023 My Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
)
}
export default About;