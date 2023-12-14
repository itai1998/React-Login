import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const MyForm = () => {

    let emailPass = '';
    let passwordPass = '';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        emailPass = email;
        passwordPass = password;
        console.log('Email:', emailPass);
        console.log('Password:', passwordPass);
        setEmail('');
        setPassword('');
    }

    const testEvent = (e) =>{
        console.log(e);
    }

    return ( 
        <div className="form-container d-flex align-items-center justify-content-center">
            <Form>
                <h6>LOGIN</h6>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
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
