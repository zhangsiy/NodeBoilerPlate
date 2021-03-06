var React = require('react');

var CommentForm = React.createClass({
    getInitialState: function() {
        return { author: '', text: '' };
    },
    resetState: function(){
        this.setState(this.getInitialState());
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!author || !text) {
            return;
        }

        this.props.onCommentSubmit({author: author, text: text});
        this.resetState();
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input 
                    type="text" 
                    placeholder="Say Something..." 
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input 
                    type="submit" 
                    value="Post" 
                />
            </form>
        );
    }

});

module.exports = CommentForm;