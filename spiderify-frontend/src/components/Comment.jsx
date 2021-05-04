import React , {Component}from 'react'
import {} from 'reactstrap'
import propTypes from 'prop-types'

class Comment extends Component {
    constructor(props) {
        super(props);
        
        this.state = 
        {
            title : props.title ,
            date : props.date , 
            author : props.author ,
            sentiment : props.sentiment , 
            content : props.content , 
            verified : props.verified
        }


    }
    


    render() {
        return (
            <div>
                <div style = {{backgroundColor : 'rgb(4, 158, 209)'}}>
                   {this.state.title} is the title
                </div>
            </div>
        );
    }


}

Comment.propTypes = {
    title : propTypes.string ,
    date : propTypes.string ,
    author : propTypes.string , 
    sentiment : propTypes.number , 
    content : propTypes.string ,
    verified : propTypes.bool
};

export default Comment ;