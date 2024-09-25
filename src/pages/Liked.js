import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useEffect, useState } from 'react'
import { Button, Card , Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Liked() {

  const [user, setUser] = useLocalStorage('user', {})
  const [likedNews, setLikedNews] = useState([])

  useEffect(() => {
    const userLikedNews = localStorage.getItem(`likes${user.email}`)
    if(userLikedNews){
      setLikedNews(JSON.parse(userLikedNews))
    }
  },[])

 
  return (
    <>
      <div className='d-flex gap-5 mt-5'>
      {
        likedNews && likedNews.map((article,index) => (
          <Card  style={{ width: '18rem' }}>
            <Card.Img style={{height:"150px"}} variant="top" src={article.urlToImage || 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'} />
            <Card.Body style={{height:"110px"} }>
              <Card.Title className='mt-2'>{article.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{height:"65px"}}>
              <ListGroup.Item>{article.author}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Link to={`/news/${article.title}`}>Read More</Link>
            </Card.Body> 
          </Card>
        ))
      } 
      </div>        
    </>
  )
}

export default Liked