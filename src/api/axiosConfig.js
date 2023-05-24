import axios from 'axios';

export default axios.create({
	baseURL:'https://spotlight-cinema-app.onrender.com',
    headers: {"ngrok-skip-browser-warning": "true","Access-Control-Allow-Origin": "*"}
});
