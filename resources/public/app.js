'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked || !this.state.liked) {
      console.log("youve clicked this", this.state)
    }

    return e(
      'button',
      {
      onClick: () => this.setState(({ liked }) => ({ liked: !liked }))
       },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
