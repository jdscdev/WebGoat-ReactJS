import React from "react";

class XSSForm3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'', fileRes:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // TP 2 - result found Client_Potential_XSS
  vulnMethod2() {
    var txtStr = (this.state.value != '') ? this.state.value : 'Link'; // javascript:alert`3`
    return txtStr;
  }
  
  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
        {/* VULNERABLE ELEMENTS - TP 2 - result found Client_Potential_XSS */}
        <a href={this.vulnMethod2()}>Click Here</a><br/>
      </form>
    );
  }
}
export default XSSForm3;
