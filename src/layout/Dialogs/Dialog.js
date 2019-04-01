import { Component } from "react";
import ReactDOM from "react-dom";

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById("modal-root");
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.modalRoot);
    //return <div style={style.dialog}>snehal dangroshiya</div>;
  }
}
export default Dialog;
