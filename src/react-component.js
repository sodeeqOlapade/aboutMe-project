'use strict';

const e = React.createElement;

function Handle(props) {
  return (
    <a href="#" className="handle">
      {props.text}
    </a>
  );
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('.left-container');
const y = <Handle text="@simply_sodeeq" />;
console.log('y: ', y);
ReactDOM.render(y, domContainer);
