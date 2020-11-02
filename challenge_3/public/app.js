class App extends React.Component {
  constructor() {
    super(); // 0 = homepage, 1 = F1, 2 = F2, 3 = F3

    this.state = {
      formState: 0
    };
    this.handleFormState = this.handleFormState.bind(this);
  } //update state function


  handleFormState(page) {
    this.setState({
      formState: page
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormHandler, {
      formState: this.state.formState,
      handleFormState: this.handleFormState
    }));
  }

} //********************* FormHandler Render *****************************/


class FormHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.formState === 0) {
      return /*#__PURE__*/React.createElement(Homepage, {
        handleFormState: this.props.handleFormState
      });
    }

    if (this.props.formState === 1) {
      return /*#__PURE__*/React.createElement(F1, {
        handleFormState: this.props.handleFormState
      });
    }

    if (this.props.formState === 2) {
      return /*#__PURE__*/React.createElement(F2, {
        handleFormState: this.props.handleFormState
      });
    }

    if (this.props.formState === 3) {
      return /*#__PURE__*/React.createElement(F3, {
        handleFormState: this.props.handleFormState
      });
    }

    if (this.props.formState === 4) {
      return /*#__PURE__*/React.createElement(Purchased, {
        handleFormState: this.props.handleFormState
      });
    }
  }

} //********************* Homepage *****************************/


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "HomePage!"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        this.props.handleFormState(1);
      }
    }, "Checkout"));
  }

} //********************* F1 *****************************/


class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    this.props.handleFormState(2);
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "User Details: f1"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "email",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "password",
      onChange: this.handleChange
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit
    }, "Next"));
  }

} //********************* F2 *****************************/


class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      state: '',
      zipcode: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    this.props.handleFormState(3);
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Address Details: f2"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "Street:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "street",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "City:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "city",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "State:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "state",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "Zipcode:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "zipcode",
      onChange: this.handleChange
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit
    }, "Next"));
  }

} //********************* F3 *****************************/


class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      expiryDate: '',
      CVV: '',
      billingZipcode: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    this.props.handleFormState(4);
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Credit Card Details: f3"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "Credit Card Number:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "creditCard",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "Expiration Date:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "expiryDate",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "CVV:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "CVV",
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("label", null, "Billing Zipcode:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "billingZipcode",
      onChange: this.handleChange
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit
    }, "Next"));
  }

} //********************* Purchased *****************************/


class Purchased extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    this.props.handleFormState(0);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Purchased!"), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit
    }, "Purchased"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1TdGF0ZSIsImhhbmRsZUZvcm1TdGF0ZSIsImJpbmQiLCJwYWdlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJGb3JtSGFuZGxlciIsInByb3BzIiwiSG9tZXBhZ2UiLCJGMSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJGMiIsInN0cmVldCIsImNpdHkiLCJ6aXBjb2RlIiwiRjMiLCJjcmVkaXRDYXJkIiwiZXhwaXJ5RGF0ZSIsIkNWViIsImJpbGxpbmdaaXBjb2RlIiwiUHVyY2hhc2VkIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixZQURZLENBRVo7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFNBQVMsRUFBRTtBQURBLEtBQWI7QUFJQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0QsR0FUK0IsQ0FVaEM7OztBQUNBRCxFQUFBQSxlQUFlLENBQUNFLElBQUQsRUFBTztBQUNwQixTQUFLQyxRQUFMLENBQWM7QUFDWkosTUFBQUEsU0FBUyxFQUFFRztBQURDLEtBQWQ7QUFHRDs7QUFFREUsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0Usb0JBQUMsV0FBRDtBQUFhLE1BQUEsU0FBUyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsU0FBbkM7QUFBOEMsTUFBQSxlQUFlLEVBQUUsS0FBS0M7QUFBcEUsTUFERixDQURG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TUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFBeEQsTUFGRixDQWJGLENBRkYsZUFvQkU7QUFBUSxNQUFBLE9BQU8sRUFBRSxLQUFLQztBQUF0QixjQXBCRixDQURGO0FBd0JEOztBQW5EOEIsQyxDQXVEakM7OztBQUVBLE1BQU1lLFNBQU4sU0FBd0JqQyxLQUFLLENBQUNDLFNBQTlCLENBQXdDO0FBQ3RDQyxFQUFBQSxXQUFXLENBQUNTLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS08sWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCWixJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUNEWSxFQUFBQSxZQUFZLEdBQUc7QUFDYjtBQUVBLFNBQUtQLEtBQUwsQ0FBV04sZUFBWCxDQUEyQixDQUEzQjtBQUNEOztBQUNESSxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSw4Q0FDRSw2Q0FERixlQUVFO0FBQVEsTUFBQSxPQUFPLEVBQUUsS0FBS1M7QUFBdEIsbUJBRkYsQ0FERjtBQU1EOztBQWpCcUM7O0FBcUJ4Q2dCLFFBQVEsQ0FBQ3pCLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QjBCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gMCA9IGhvbWVwYWdlLCAxID0gRjEsIDIgPSBGMiwgMyA9IEYzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1TdGF0ZTogMCxcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUZvcm1TdGF0ZSA9IHRoaXMuaGFuZGxlRm9ybVN0YXRlLmJpbmQodGhpcyk7XG4gIH1cbiAgLy91cGRhdGUgc3RhdGUgZnVuY3Rpb25cbiAgaGFuZGxlRm9ybVN0YXRlKHBhZ2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1TdGF0ZTogcGFnZSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybUhhbmRsZXIgZm9ybVN0YXRlPXt0aGlzLnN0YXRlLmZvcm1TdGF0ZX0gaGFuZGxlRm9ybVN0YXRlPXt0aGlzLmhhbmRsZUZvcm1TdGF0ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKiBGb3JtSGFuZGxlciBSZW5kZXIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEZvcm1IYW5kbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybVN0YXRlID09PSAwKSB7XG4gICAgICByZXR1cm4gPEhvbWVwYWdlIGhhbmRsZUZvcm1TdGF0ZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGV9Lz47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZvcm1TdGF0ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIDxGMSBoYW5kbGVGb3JtU3RhdGU9e3RoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlfS8+O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5mb3JtU3RhdGUgPT09IDIpIHtcbiAgICAgIHJldHVybiA8RjIgaGFuZGxlRm9ybVN0YXRlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZX0vPjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybVN0YXRlID09PSAzKSB7XG4gICAgICByZXR1cm4gPEYzIGhhbmRsZUZvcm1TdGF0ZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGV9Lz47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZvcm1TdGF0ZSA9PT0gNCkge1xuICAgICAgcmV0dXJuIDxQdXJjaGFzZWQgaGFuZGxlRm9ybVN0YXRlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZX0vPjtcbiAgICB9XG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogSG9tZXBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Ib21lUGFnZSE8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZSgxKX19PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogRjEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgLy8gYXhpb3MgcG9zdCByZXF1ZXN0XG5cbiAgICB0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZSgyKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlVzZXIgRGV0YWlsczogZjE8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogRjIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEYyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0cmVldDogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcGNvZGU6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgLy8gYXhpb3MgcG9zdCByZXF1ZXN0XG5cbiAgICB0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZSgzKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkFkZHJlc3MgRGV0YWlsczogZjI8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFN0cmVldDpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdHJlZXRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENpdHk6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgU3RhdGU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFppcGNvZGU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqIEYzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jbGFzcyBGMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjcmVkaXRDYXJkOiAnJyxcbiAgICAgIGV4cGlyeURhdGU6ICcnLFxuICAgICAgQ1ZWOiAnJyxcbiAgICAgIGJpbGxpbmdaaXBjb2RlOiAnJyxcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIC8vIGF4aW9zIHBvc3QgcmVxdWVzdFxuXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGUoNClcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DcmVkaXQgQ2FyZCBEZXRhaWxzOiBmMzwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ3JlZGl0IENhcmQgTnVtYmVyOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNyZWRpdENhcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEV4cGlyYXRpb24gRGF0ZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcnlEYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDVlY6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiQ1ZWXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBCaWxsaW5nIFppcGNvZGU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYmlsbGluZ1ppcGNvZGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vKioqKioqKioqKioqKioqKioqKioqIFB1cmNoYXNlZCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY2xhc3MgUHVyY2hhc2VkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAvLyBheGlvcyBwb3N0IHJlcXVlc3RcblxuICAgIHRoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlKDApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlB1cmNoYXNlZCE8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5QdXJjaGFzZWQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==