import { Component } from 'react';

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handleBtn = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
  render() {
    const { name, lname, id } = this.props;
    const { isHi } = this.state;
    return (
      <h2>
        {isHi ? 'hi' : 'bye'}, {name} {lname} (id = {id})
        <button onClick={this.handleBtn}>switch</button>
      </h2>
    );
  }
}

export default Ciao;
