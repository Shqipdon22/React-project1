import axios from 'axios';
import React, { useEffect, useState } from 'react'
import News from '../components/News';


function CreatedNews() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://66b20dd01ca8ad33d4f6556f.mockapi.io/api/v1/createdNews')
        .then(resp => {
            console.log(resp.data)
            setNews(resp.data)
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

  return (
    <>
    {/* <form onSubmit={handleSearch} className='search-form d-flex justify-content-center mt-5'>
        <div className='input-group w-50'>
          <input
            placeholder='Search for news ...'
            type='text'
            name='search'
            className='form-control search-input'
          />
          <button type='submit' className='btn btn-primary search-button'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
    </form> */}
    <h1 className='d-flex justify-content-center mt-5'>Latest News</h1>
    <section className='row mx-auto'>
    {   
        news && news.map((article,index) =>(
            <div className='flex col-4' key={index}>
                <News 
                id={index}
                urlToImage={article.urlToImage}
                title={article.title}
                author={article.author}
                article={article}
            />
            </div>
        ))
    }
    </section>
    </>
  )
}

export default CreatedNews