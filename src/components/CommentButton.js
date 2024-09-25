import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'



function CommentButton({postId}) {
  const [vissibility, setVisibility] = useState(false)
  const [newComment,setNewComment] = useState([])
  const [comments, setComments] = useLocalStorage(`comments-${postId}`, [])
  const [user,saveUser] = useLocalStorage('user',{})

  const showFormOnSubmit = e => {
    e.preventDefault()
    setVisibility(!vissibility)
  }
  const changeComment = e => {
    e.preventDefault()
    const comment = e.target.value
    setNewComment(comment)
  }
  const printComment = e => {
    e.preventDefault()
    if(comments == []){
      setComments(
        [{
          comment: newComment,
          authorName: user.name,
          authorSurname: user.surname
        }]
      )
    }
    else{
      setComments([...comments,{
        comment: newComment,
        authorName: user.name,
        authorSurname: user.surname,
        email: user.email
      }])
    }
    setNewComment('')
  }
  const deleteComment = indexToDelete => {
    setComments(comments.filter((comment, index) => index !== indexToDelete));
  }
 
  return (
    <>
      {user && user.email ? (
        <>
          <div className="mb-2 ms-1">
            <Button 
              onClick={showFormOnSubmit} 
              variant="outline-primary" 
              className="rounded-pill px-3 py-1"
            >
              <i className="fa-regular fa-comment"></i>
            </Button>
          </div>
          {vissibility && (
            <Form onSubmit={printComment} className="d-flex align-items-center mb-3">
              <Form.Control 
                type="text" 
                placeholder="Type your comment" 
                value={newComment} 
                onChange={changeComment} 
                className="me-2" 
              />
              <Button 
                type="submit" 
                variant="primary"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </Button>
            </Form>
          )}
          <div className="mt-3">
            {vissibility && comments.map((comment, index) => (
              <Card key={index} className="mb-3 shadow-sm border-0 rounded-3">
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Card.Text className="mb-0">
                    <span className="fw-bold">{comment.authorName} {comment.authorSurname}</span>
                  </Card.Text>
                  {comment.authorName === user.name && (
                    <Button 
                      variant="link" 
                      onClick={() => deleteComment(index)} 
                      className="text-danger p-0"
                      title="Delete Comment"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  )}
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                  <Card.Text className="text-secondary">
                    {comment.comment}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}

export default CommentButton