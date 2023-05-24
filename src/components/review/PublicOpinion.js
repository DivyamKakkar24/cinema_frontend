import React from 'react';
import Reviews from './Reviews';
import {useState, useEffect} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';


const PublicOpinion = () => {

	const [movie, setMovie] = useState({});
	// const [reviews, setReviews] = useState([{"body": ""}]);

	const params = useParams();
	const movieId = params.movieId;

	const [temp2, setTemp2] = useState('');


	const getMovieData = async(movieId) => {
		try {
			const response = await api.get(`/api/v1/movies/${movieId}`);
			const singleMovie = response.data;

			setMovie(singleMovie);
			setTemp2("OK");

			// const fetchedReviews = [...reviews, singleMovie.reviews];
			// setReviews(fetchedReviews);

			// console.log(reviews);

		}
		catch (error) {
			console.log(error);
		}

	}

	useEffect(() => {
		getMovieData(movieId);
	}, [temp2])


	return (
		<Reviews movie = {movie} />
	)
}

export default PublicOpinion;
