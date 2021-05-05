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
                <div style = {{backgroundColor : 'rgb(4, 158, 209)' , margin: '15% 10% 5% 10%'}}>
                   <h3>
                   {this.props.title}
                   </h3>
                </div>
            </div>
        );
    }


}

function CommentFunctional(props)
{
    return (
        <div style = {{backgroundImage : 'linear-gradient(to bottom , rgb(4 , 98 , 209) , rgb(0, 189, 255)' , marginBottom : '8px' , marginLeft : '14%' , marginRight : '14%' , borderRadius : '25px'  }}>
            <div >
                <h4 style = {{float : 'left' , marginTop : '1%' , marginLeft : '1%'}}>
                    {props.commentSpec.author} : {props.commentSpec.title}
                </h4>
                <p style = {{float : "right" , marginTop : '1%' , marginRight : '1%' }}>
                    {props.commentSpec.date}
                </p>
                <div style = {{clear : 'both' , backgroundImage : 'linear-gradient(to bottom right , white , rgb(153, 153, 153)'  , margin : '5px' , borderRadius : '5px' , color:'black'}}>
                        <p >
                            {props.commentSpec.content}
                        </p>
                    <div style = {{color : 'white'}}>
                        <p style = {{float : 'left'}}> 
                        analysed result : {props.commentSpec.sentiment}
                        </p>
                        <p style = {{float : 'right' }}>
                        {props.commentSpec.verified && 'costumer is verified'}
                        </p>
                    </div>
                </div>
                <div style = {{clear : 'both'}}>
                </div>
            </div>
        </div>
    )
}
CommentFunctional.propTypes = 
{
    commentSpec : propTypes.object 
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
export {CommentFunctional} ;