import React from 'react';
import {useState, useEffect} from 'react';
import Hero from '../hero/Hero';
import Style from "../hero/Hero.css";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import api from '../../api/axiosConfig';
import Spinner from '../loader/Spinner';


const Home = () => {

	const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getMovies = async() => {
        try {
            const response = await api.get("/api/v1/movies");

            setMovies(response.data);
            
            // console.log(movies);
        } catch(err) {
            console.log("not working!", err);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

	return (
        <>
    		{!isLoading && <Hero movies = {movies}/>}
    		{isLoading && <Spinner />}
        </>
	)
}

export default Home;