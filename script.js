'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Be like Me';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Ami onk Joss'
    );
  }
}

const domContainer = document.querySelector('#nory');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
