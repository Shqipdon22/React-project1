import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import News from '../components/News';



function CategoryPage() {
    const [news, setNews] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=af46123bdec945599259e109ab3ae461`)
        .then(resp => setNews(resp.data.articles))
        .catch(error => {
            console.log(error);
        });
    }, []);
    
  return (
    <>
        <h1 className='d-flex justify-content-center mt-5'></h1>
        <section className='row mx-auto'>
            {   
                news && news.map((article,index) =>(
                    <div className='flex col-4' key={index}>
                        <News 
                        key={article.source.id}
                        id={article.source.id }
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

export default CategoryPage