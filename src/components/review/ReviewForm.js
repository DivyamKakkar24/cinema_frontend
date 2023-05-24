import {Form, Button} from 'react-bootstrap';
import Style from './Reviews.css';

const ReviewForm = ({handleSubmit, revText, labelText}) => {
	return (
		<div>
			<Form>
		        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
		            <Form.Label>{labelText}</Form.Label>
		            <Form.Control ref={revText} as="textarea" rows={3} placeholder="The movie is..." />
		        </Form.Group>

		        <Button className="submit-button" variant="outline-light" onClick={handleSubmit}>Submit</Button>
		    </Form>
		    
		</div>
	)
}

export default ReviewForm;