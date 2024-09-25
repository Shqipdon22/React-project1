import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LikeButton({ article }) {
  const [liked, setLiked] = useState(false)
  const [user, saveUser] = useLocalStorage('user', {})
  const [userLikes, setUserLikes] = useLocalStorage(`likes${user.email}`, [])
  const [globalLikes, setGlobalLikes] = useLocalStorage(`globalLikes${article.title}`, 0)

  useEffect(() => {
    const isLiked = userLikes.some(like => like.title === article.title)
    setLiked(isLiked)
  }, [article, userLikes])

  const toLikedNews = () => {
    let updatedUserLikes;
    if (liked === false) {
      updatedUserLikes = [...userLikes, article]
      setGlobalLikes(globalLikes + 1)
    } else {
      updatedUserLikes = userLikes.filter(news => news.title !== article.title)
      setGlobalLikes(globalLikes - 1)
    }

    setUserLikes(updatedUserLikes)
    setLiked(!liked)
  }

  return (
    <>
      {
        (user && user.email) &&   
        <Button 
          variant='outline-primary'
          style={{ margin: "4px" }} 
          className="btn btn-light mb-2 px-3 py-2 text-dark rounded-pill border border-primary hover:bg-primary hover:text-white transition-colors"
          
          onClick={(e) => {
            e.preventDefault()
            toLikedNews()
          }}
        >
           <span>
            {liked ? <i className="fas fa-thumbs-up"></i> : <i className="far fa-thumbs-up"></i>} 
            {` ${globalLikes}`}
          </span>
        </Button>
      }
    </>
  )
}

export default LikeButton

