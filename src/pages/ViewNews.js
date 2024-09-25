import React, { useEffect, useState } from 'react'
import News from '../components/News'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import LikeButton from '../components/LikeButton';
import CommentButton from '../components/CommentButton';


function ViewNews() {
    const [news, setNews] = useState([]);
    const {title} = useParams()
    useEffect(() => {
        // axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-08-05&to=2024-08-05&sortBy=popularity&apiKey=af46123bdec945599259e109ab3ae461`)
        // .then(resp => setNews(resp.data.articles))
        // .catch(error => {
        //     console.log(error);
        // });
        axios.all([
          axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-08-05&to=2024-08-05&sortBy=popularity&apiKey=532399750e674f8fa5d762b631a90afc'),
          axios.get('https://66b20dd01ca8ad33d4f6556f.mockapi.io/api/v1/createdNews')
        ])
        .then(axios.spread((firstResponse, secondResponse) => {
          const combinedNews = [...secondResponse.data,...firstResponse.data.articles];
          setNews(combinedNews);
          console.log(firstResponse )
        }))
    }, [title]);

    const no_image = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"

    const article = news.find(aNew => aNew.title  === title);


   
  return (
    <div className='mt-5'>
       {article && 
       <div className='w-50 mx-auto'>
            <Card>
                <Card.Img variant="top" src={article.urlToImage ? article.urlToImage : no_image}/>
                <Card.Body>
                  <Card.Title className='text-bold'>
                    {article.title}
                  </Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                  <Card.Text>
                    <b>Description</b>: {article.description}
                    <br/>
                    <b>Content</b>: {article.content}
                    <br/>
                    <b>Publish Date</b>: {article.publishedAt}
                  </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                  <Card.Text>
                  <b>URL</b>: <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a>
                  </Card.Text>
                  <Card.Text>
                  <b>Author</b>: {article.author}
                  </Card.Text>
                </Card.Body>
            </Card>
            <Container className='gap-2 mt-1'>
                <LikeButton article={article} />
                <CommentButton postId={article.title}/>
            </Container>
       </div>
       }
    </div>
  )
}

export default ViewNews