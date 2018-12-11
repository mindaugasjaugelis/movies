import React from 'react';
import { connect } from "react-redux";
import { 
    setSelectedAuthor, 
    setAsFavoriteAuthor, 
    removeAuthor, 
    addAuthor
} from "./js/actions/index";

const mapDispatchToProps = dispatch => {
    return {
        setSelectedAuthor: key => dispatch(setSelectedAuthor(key)),
        setAsFavoriteAuthor: key => dispatch(setAsFavoriteAuthor(key)),
        remove: key => dispatch(removeAuthor(key)),
        add: name => dispatch(addAuthor(name))
    };
};

const mapStateToProps = state => {
    return { 
        selectedAuthorKey: state.selectedAuthor ? state.selectedAuthor.key : null
    };
  };

class AuthorModel extends React.Component {
    constructor(props){
        super(props);
        console.log(props.author.isFavorite)
    }
    
    render() {
        return (
            <tr>
                <td
                    className={`item ${this.props.author.key === this.props.selectedAuthorKey ? "item-selected" : null}`}
                    onClick={() => this.props.setSelectedAuthor(this.props.author.key)}>
                    {this.props.author.name}
                </td>
                <td>
                    <div 
                        className={`item-fav ${this.props.author.isFavorite ? "item-fav-true" : null}`} 
                        onClick={() => this.props.setAsFavoriteAuthor(this.props.author.key)}>
                    </div>
                </td>
                <td>
                    <div className={"btn del-btn"} onClick={() => this.props.remove(this.props.author.key)}>-</div>
                </td>
            </tr>
        );
    }
}


var Author = connect(mapStateToProps, mapDispatchToProps)(AuthorModel);
export default Author;