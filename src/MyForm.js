import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFetch from './useFetch';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import axios from 'axios';

// test github

const MyForm = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://brightspotcdn.byu.edu/dc/d7/c22c23614dd5870f2fcbbd473f06/jango-graduation-emmalee-169.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Use useHistory hook
    const history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, password})
        .then(res => {
            if(res.data === "Login Successfully"){
                history.push('/welcome');
            } else
            {
                alert("The Email or the Password is incorrect");
            }
        })
        .catch(err => console.log(err));

        setEmail('');
        setPassword('');
    }

    return ( 
        <div className="form-container d-flex  justify-content-center" style={backgroundImageStyle}>
            <Form>
                <h6>LOGIN</h6>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
            
                <Button variant="primary" onClick={(event) => handleSubmit(event)}>
                    LOGIN
                </Button>
            </Form>
        </div>
    );
}

export default MyForm;
