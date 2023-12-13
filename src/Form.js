import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const from = () => {
    return ( 
        <div className="form-container d-flex align-items-center justify-content-center">
            <Form>
                <h6>LOGIN</h6>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
      </div>
     );
}
 
export default from;