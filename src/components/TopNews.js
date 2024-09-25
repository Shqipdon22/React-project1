import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from './News';


function TopNews() {
    const [news, setNews] = useState([]);

    // useEffect(() => {
    //     axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-08-05&to=2024-08-05&sortBy=popularity&apiKey=af46123bdec945599259e109ab3ae461')
    //     .then(resp => {
    //         console.log(resp.data.articles)
    //         setNews(resp.data.articles)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }, []);
    useEffect(() => {
        axios.all([
            axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-08-05&to=2024-08-05&sortBy=popularity&apiKey=532399750e674f8fa5d762b631a90afc'),
            axios.get('https://66b20dd01ca8ad33d4f6556f.mockapi.io/api/v1/createdNews')
          ])
          .then(axios.spread((firstResponse, secondResponse) => {
            const combinedNews = [...secondResponse.data , ...firstResponse.data.articles];
            setNews(combinedNews);
            console.log(combinedNews);
          }))
          .catch(errors => {
            console.error(errors);
          });
    }, []);

    const handleSearch = e => {
        e.preventDefault()
        const searchValue = e.target.elements.search.value;
        axios.get(`https://newsapi.org/v2/everything?q=${searchValue}&from=2024-08-04&to=2024-08-04&sortBy=popularity&apiKey=13f9b2ad829d4a1c860a45357480d2f3`)
            .then(resp => {
                setNews(resp.data.articles);
            })
            .catch(error => {
            console.log(error);
        });
        
    }

    
   

    return ( 
        <>
            <form onSubmit={handleSearch} className='search-form d-flex justify-content-center mt-5'>
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
            </form>
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
        
    );
}

export default TopNews;
