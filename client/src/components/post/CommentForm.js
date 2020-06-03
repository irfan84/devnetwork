import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from'react-redux';
import { addComments } from "../../actions/post";


const CommentForm = ({ postId, addComments }) => {
    const [text, setText] = useState('')
    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Leave a Comment</h3>
            </div>
            <form className="form my-1" onSubmit={e => {
                e.preventDefault();
                addComments(postId, {text});
                setText('');
            }}>
          <textarea
              name="text"
              cols="30"
              rows="5"
              placeholder="Create a post"
              required
              value={text}
              onChange={e => setText(e.target.value)}
          ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit"/>
            </form>
        </div>
    )
};

CommentForm.propTypes = {
addComments: PropTypes.func.isRequired
};

export default connect(null, {addComments}) (CommentForm);