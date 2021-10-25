import React from "react";

class StoredXSSForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fileRes:''};
  }
  
  // FN 2 - Stored XSS
  componentDidMount() {
    fetch("data.json")
      .then(res => res.json())
      .then(
          (res) => {
              this.setState({
                fileRes: res
              });
          },
          (error) => {
              this.setState({
                  error
              });
          }
      );
  }

  render() {
    return (
      <form>
        <label>Stored XSS from JSON File</label><br/>
        {/* VULNERABLE ELEMENTS - FN 2 - Stored XSS */}
        <div {...this.state.fileRes}/><br/>
      </form>
    );
  }
}
export default StoredXSSForm;
