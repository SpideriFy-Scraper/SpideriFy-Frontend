import React ,{Component} from 'react'
import {Button , Badge , Form , FormGroup , Label , Input } from 'reactstrap'

class Home extends Component {
    render() {
        return (
            <div>
            <div style ={{clear : 'both'}}>
            <h1> <Badge color = "secondary"> Comments in your hands </Badge> </h1>

            <div style = {{margin : '27% 30% 0% 30%'}}>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail"><h3>Your desired Product</h3></Label>
                  <Input name="Your desired product" id="exampleEmail" placeholder="EG: Samsung galaxy S21" style ={{color : 'black'}} />
                </FormGroup>
              
              <Button outline block color = "secondary" style={{color :'silver'}} ><h2> Search </h2></Button>{' '}
            </Form>
            
            </div>
          </div>
            </div>
        );
    }
}



export default  Home ;