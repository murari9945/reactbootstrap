import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from './Product';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container} from 'react-bootstrap';

function Home() {
    const navigate = useNavigate();

   // function navigateHandler() {
   //   navigate('/products');
  
  //}
    const events = [
        {
          date: 'June 20, 2023',
          place: 'City Stadium',
          event: 'Music Concert',
        },
        {
          date: 'July 5, 2023',
          place: 'Convention Center',
          event: 'Conference',
        },
        {
          date: 'August 10, 2023',
          place: 'Outdoor Arena',
          event: 'Sports Tournament',
        },
        {
          date: 'September 15, 2023',
          place: 'Theater Hall',
          event: 'Stage Play',
        },
      ];
  return (
    <div>
        <div>
        <Card className="text-center">
 
 <Card.Body style={{padding :'150px',backgroundColor:"grey"}}>
   <Card.Title style={{color:'white',fontSize:'73px',fontStyle:'italic'}}>THE GENERICS</Card.Title>
   <Button style={{backgroundColor:'ActiveBorder'}}>Get Your Latest Ablum</Button>
   
 </Card.Body>

</Card>
        </div>
        <div>
        <Card className="text-center">
 
 <Card.Body style={{padding :'150px',backgroundColor:"white"}}>
 <Card.Title>Upcoming Events</Card.Title>
        {events.map((event, index) => (
          <div key={index} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px'}}>
            <h6>{event.date}</h6>
            <h6>{event.place}</h6>
            <h6>{event.event}</h6>
            <Button variant="primary">Buy Tickets</Button>
            <hr  style={{color:'black'}}/>
          </div>
        ))}

 </Card.Body>

</Card>
</div>
<footer style={{ backgroundColor: 'blue', padding: '20px' }}>
   <Container>
     <h1>THE GENERICS</h1>
   </Container>
 </footer>
    </div>
   
  

  );
}

export default Home;
