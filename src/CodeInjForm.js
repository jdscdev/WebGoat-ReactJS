import React from "react";

class CodeInjForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // TP 1 - Client_Potential_Code_injection
  vulnMethod4() {
    var filepath = this.state.value; // http://localhost:3000/attack.js
    
    if (filepath != '') {
      const script = document.createElement('script');
      script.src = filepath;
      script.async = true;
  
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
        {/* VULNERABLE ELEMENTS - TP 1 - Client_Potential_Code_injection */}
        {this.vulnMethod4()}<br/>
      </form>
    );
  }
}
export default CodeInjForm;
