import React from "react";

class XSSForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  // TP 1 - result found Client_Potential_XSS
  vulnMethod() {
    var txtStr = (this.state.value != '') ? this.state.value : 'Div 2'; // <img src=x onerror=alert`2`>
    return {__html: txtStr};
  }

  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
        {/* VULNERABLE ELEMENTS - TP 1 - result found Client_Potential_XSS */}
        <div dangerouslySetInnerHTML={this.vulnMethod()}/><br/>
      </form>
    );
  }
}
export default XSSForm2;
