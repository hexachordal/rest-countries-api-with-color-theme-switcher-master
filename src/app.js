'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data =>  console.log(data))
        return "something"
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}

let domContainer = document.querySelector('#app');
ReactDOM.render(<LikeButton />, domContainer);