import axios from 'axios';

export default axios.create({
	baseURL:'https://cinema-production.up.railway.app',
    headers: {"ngrok-skip-browser-warning": "true","Access-Control-Allow-Origin": "*"}
});

// previous api at: https://spotlight-cinema-app.onrender.com