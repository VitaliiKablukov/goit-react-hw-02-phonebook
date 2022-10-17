import { Component } from 'react';

export class Filter extends Component {
  filterText = e => {
    this.props.filterInputText(e.target.value);
  };
  render() {
    return <input type="text" name="filter" onChange={this.filterText} />;
  }
}
