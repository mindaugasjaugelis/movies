import React from 'react';
import { connect } from "react-redux";
import {
    setSelectedAuthor,
    setAsFavoriteAuthor,
    removeAuthor
} from "./js/actions/index";

const mapDispatchToProps = dispatch => {
    return {
        setSelectedAuthor: key => dispatch(setSelectedAuthor(key)),
        setAsFavoriteAuthor: key => dispatch(setAsFavoriteAuthor(key)),
        remove: key => dispatch(removeAuthor(key))
    };
};

const mapStateToProps = state => {
    return {
        selectedAuthorKey: state
            ? (state.selectedAuthor ? state.selectedAuthor.key : null)
            : null
    };
};

class AuthorModel extends React.Component {
    render() {
        return (
            <tr>
                <td
                    className={`item ${this.props.authorKey === this.props.selectedAuthorKey ? "item-selected" : null}`}
                    onClick={() => this.props.setSelectedAuthor(this.props.authorKey)}>
                    {this.props.name}
                </td>
                <td>
                    <div
                        className={`item-fav ${this.props.isFavorite ? "item-fav-true" : null}`}
                        onClick={() => this.props.setAsFavoriteAuthor(this.props.authorKey)}>
                    </div>
                </td>
                <td>
                    <div className={"btn del-btn"} onClick={() => this.props.remove(this.props.authorKey)}>-</div>
                </td>
            </tr>
        );
    }
}

var Author = connect(mapStateToProps, mapDispatchToProps)(AuthorModel);
export default Author;