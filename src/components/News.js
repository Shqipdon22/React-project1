import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import {Card , Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'




function News({id,urlToImage,title,author,article}) {
  return (
    <section className='row gap-1 mx-auto mt-5'>
        <>
           <div className=''>
           {
                <Card key={id} style={{ width: '18rem' }}>
                    <Card.Img style={{height:"150px"}} variant="top" src={urlToImage || 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'} />
                    <Card.Body style={{height:"110px"} }>
                      <Card.Title className='mt-2'>{title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{height:"65px"}}>
                      <ListGroup.Item>{author}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Link to={`/News/${encodeURIComponent(title)}`}>Read More</Link>
                    </Card.Body>
                    <Container className='d-flex gap-2 mt-1 mb-3'>
                        <LikeButton article={article}/>
                    </Container>  
                </Card>    
            }
           </div>
        </>
           
        </section>
  )
}

export default News