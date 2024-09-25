import axios from 'axios'
import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'




function Create() {
  
  const createNews = e => {
    e.preventDefault()
    const elements = e.target.elements
    const title = elements.title.value
    const description = elements.description.value
    const content = elements.content.value 
    const publishDate = elements.publishDate.value
    const author = elements.author.value
    axios({
      method: "POST",
      url:'https://66b20dd01ca8ad33d4f6556f.mockapi.io/api/v1/createdNews',
      data: {title,description,content,publishDate,author}
    })
    .then(() => {
      e.target.reset()  
    })
    .catch((error) => {
      console.error("There was an error creating the news!", error);
    });
  }


  return (
    <>
        <form onSubmit={createNews} className='w-50 mx-auto mt-5'>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Title
            </InputGroup.Text>
            <Form.Control name='title'
              aria-label="Title"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
            <Form.Control name='description'
              aria-label="Description"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Content</InputGroup.Text>
            <Form.Control name='content'
              aria-label="Content"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Publish Date</InputGroup.Text>
            <Form.Control name='publishDate'
              aria-label="Publish Date"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Author</InputGroup.Text>
            <Form.Control name='author'
              aria-label="Author"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Button variant='success' type='submit' className='w-100 mb-2' style={{ borderRadius: '0.375rem' }}>
            Create
          </Button>
       </form>
    </>
  )
}

export default Create