
var CommentBox = React.createClass({
  render: function() {
    return (
      <p>
        Hello, world! I am a CommentBox.
      </p>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
