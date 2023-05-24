import {useEffect, useRef, useState} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from './ReviewForm';
import React from 'react';
import Style from './Reviews.css';


const Reviews = ({movie}) => {

	const textArea = useRef();
	const params = useParams();
	const movieId = params.movieId;
	const [reviews, setReviews] = useState([{"body": ""}]);

	const fetchReviews = async(movieId) => {
		try {
			const response = await api.get(`/api/v1/movies/${movieId}`);
			const currMovie = response.data;

			setReviews(currMovie.reviewIds);
			console.log(reviews);
		}
		catch(err) {
			console.log(err);
		}
	}


	useEffect(() => {
		fetchReviews(movieId);
		console.log("Updated.");
	}, [reviews])


	const addReview = async (e) => {
		e.preventDefault();

		const rev = textArea.current;

		if(rev.value == "")
			return;

		try {
			const response = await api.post("/api/v1/reviews", {reviewBody: rev.value, imdbId: movieId});

			// updating directly from the data entered on the client.
			const updatedReviews = [...reviews, {body: rev.value}];

			rev.value = "";

			setReviews(updatedReviews);
			
		}
		catch(err) {
			console.log(err);
		}

	}


	return (
		<Container className = "reviews-heading">
			<Row>
				<Col><h3>Reviews</h3></Col>
			</Row>
			<Row className = "mt-2 rev">
				<Col className = "review-poster">
					<img src = {movie.poster} alt = "" />
				</Col>
				<Col>
					{
	                    <>
	                        <Row>
	                            <Col>
	                                <ReviewForm handleSubmit={addReview} revText={textArea} labelText = "Write a Review?" />  
	                            </Col>
	                        </Row>
	                  		<Row>
	                            <Col>
	                                <hr />
	                            </Col>
	                        </Row>
	                    </>
	                }
	                {
	                    reviews.filter((r) => r.body != "").map((r) => {
	                        return(
	                            <>
	                                <Row className="review-item">
	                                    <Col>{r.body}</Col>
	                                </Row>
	                                <Row>
	                                    <Col>
	                                        <hr />
	                                    </Col>
	                                </Row>                                
	                            </>
	                        )
	                    })
	                }
	                
				</Col>
			</Row>
			<Row>
	            <Col>
	                <hr />
	            </Col>
	        </Row>  
		</Container>

	)
}

export default Reviews;
