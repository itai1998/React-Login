import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';

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

    const handleClick = () => {

        if(email === "123@test.com" && password === "123"){
            console.log('Success Login');
        }else{
            console.log('Wrong Input');
        }
        
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
                
                <Button variant="primary" onClick={() => handleClick()}>
                    LOGIN
                </Button>
            </Form>
        </div>
    );
}

export default MyForm;
