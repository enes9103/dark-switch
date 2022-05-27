import React from 'react'
import data from '../helper/data.js'
import { Card, Button,Container, Row } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
// import DetailPage from './DetailPage.js';


const Article = () => {
    const [items, setItems] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true)

    const handleDetail = (id) => {
        console.log(id);
        const item = data.filter(item => item.id === id);
        console.log(item);
        setItems(item)
        setIsLoading(!isLoading)
    }
    return (
        <Container>
            <Row xs={2} md={3} lg={4} className="g-4 mt-4">
        { isLoading ? 
            
            data?.map((item) => (
                <Card key={item.id} className='container article-design card-toggle' style={{ width: '18rem', height:'30rem',maxWidth:'18rem',maxHeight:"30rem" }} >
                    <Card.Img className='card-image' variant="top" src={item.image1}  style={{ height:'23rem',maxHeight:"23rem" }}/>
                    <Card.Body>
                        <Card.Title className='post'>{item.title}</Card.Title>
                        {/* <Card.Text className='post-info'>
                        {item.snippet}
                        </Card.Text> */}
                        <Button variant="primary" className='btn btn-dark' onClick={()=>handleDetail(item.id)}>Detail</Button>
                    </Card.Body>
                </Card>
                ))
            : items?.map((item) => (
                <Card key={item.id} className='container article-design card-toggle' style={{ width: '50%', height:'35rem',maxWidth:'50%',maxHeight:"35rem" }} >
                    <Card.Img className='card-image' variant="top" src={item.image1} />
                    <Card.Body>
                        <Card.Title className='post'>{item.title}</Card.Title>
                        <Card.Text className='post-info'>
                        {item.snippet}
                        </Card.Text>
                        <Button variant="primary" className='btn btn-dark' onClick={handleDetail}>Go Home</Button>
                    </Card.Body>
                </Card>
                ))
                    }
                </Row>
            </Container>
    )
}
export default Article