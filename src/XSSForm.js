import React from "react";

class XSSForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  // FN 1
  handleChange(event) {
    this.setState({value: event.target.value}); // <img src=x onerror=alert`1`>
    var lblElem = document.getElementById('divID');
    lblElem.innerHTML = event.target.value;
  }

  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
        {/* VULNERABLE ELEMENTS - FN 1 */}
        <div id="divID">Div 1</div><br/>
      </form>
    );
  }
}
export default XSSForm;
