import axios from './axios';
import React, { useState, useEffect } from 'react'
import request from './request'
import './Banner.css'

function Banner() {
    
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(request.fetchNetflixOriginals)
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
            return response;
        }
        fetchData();
    }, [])
    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1)+ "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: 'cover',
            background: `url(
                https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
            ) no-repeat center center/cover`,
            backgroundPosition: 'center center',
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 130)}</h1>
            </div>
            <div className="banner--fadeBottom"></div>

            
        </header>
    )
}

export default Banner
