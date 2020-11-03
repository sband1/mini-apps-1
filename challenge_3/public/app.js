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
    axios.get('/details').then(response => {
      console.log('hi!');
      console.log(response.data);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1TdGF0ZSIsImhhbmRsZUZvcm1TdGF0ZSIsImJpbmQiLCJwYWdlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJGb3JtSGFuZGxlciIsInByb3BzIiwiSG9tZXBhZ2UiLCJGMSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJGMiIsInN0cmVldCIsImNpdHkiLCJ6aXBjb2RlIiwiRjMiLCJjcmVkaXRDYXJkIiwiZXhwaXJ5RGF0ZSIsIkNWViIsImJpbGxpbmdaaXBjb2RlIiwiUHVyY2hhc2VkIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixZQURZLENBRVo7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFNBQVMsRUFBRTtBQURBLEtBQWI7QUFJQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0QsR0FUK0IsQ0FVaEM7OztBQUNBRCxFQUFBQSxlQUFlLENBQUNFLElBQUQsRUFBTztBQUNwQixTQUFLQyxRQUFMLENBQWM7QUFDWkosTUFBQUEsU0FBUyxFQUFFRztBQURDLEtBQWQ7QUFHRDs7QUFFREUsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0Usb0JBQUMsV0FBRDtBQUFhLE1BQUEsU0FBUyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsU0FBbkM7QUFB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TUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFBcEQsTUFGRixDQUxGLGVBU0Usd0RBRUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLEtBQXhCO0FBQThCLE1BQUEsUUFBUSxFQUFFLEtBQUtBO0FBQTdDLE1BRkYsQ0FURixlQWFFLG9FQUVFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxnQkFBeEI7QUFBeUMsTUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFBeEQsTUFGRixDQWJGLENBRkYsZUFvQkU7QUFBUSxNQUFBLE9BQU8sRUFBRSxLQUFLQztBQUF0QixjQXBCRixDQURGO0FBd0JEOztBQW5EOEIsQyxDQXVEakM7OztBQUVBLE1BQU1vQixTQUFOLFNBQXdCdEMsS0FBSyxDQUFDQyxTQUE5QixDQUF3QztBQUN0Q0MsRUFBQUEsV0FBVyxDQUFDUyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtPLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQlosSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFDRFksRUFBQUEsWUFBWSxHQUFHO0FBQ2I7QUFFQSxTQUFLUCxLQUFMLENBQVdOLGVBQVgsQ0FBMkIsQ0FBM0I7QUFDRDs7QUFDREksRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0UsNkNBREYsZUFFRTtBQUFRLE1BQUEsT0FBTyxFQUFFLEtBQUtTO0FBQXRCLG1CQUZGLENBREY7QUFNRDs7QUFqQnFDOztBQXFCeENxQixRQUFRLENBQUM5QixNQUFULGVBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUIrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gMCA9IGhvbWVwYWdlLCAxID0gRjEsIDIgPSBGMiwgMyA9IEYzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1TdGF0ZTogMCxcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUZvcm1TdGF0ZSA9IHRoaXMuaGFuZGxlRm9ybVN0YXRlLmJpbmQodGhpcyk7XG4gIH1cbiAgLy91cGRhdGUgc3RhdGUgZnVuY3Rpb25cbiAgaGFuZGxlRm9ybVN0YXRlKHBhZ2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1TdGF0ZTogcGFnZSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybUhhbmRsZXIgZm9ybVN0YXRlPXt0aGlzLnN0YXRlLmZvcm1TdGF0ZX0gaGFuZGxlRm9ybVN0YXRlPXt0aGlzLmhhbmRsZUZvcm1TdGF0ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKiBGb3JtSGFuZGxlciBSZW5kZXIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEZvcm1IYW5kbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybVN0YXRlID09PSAwKSB7XG4gICAgICByZXR1cm4gPEhvbWVwYWdlIGhhbmRsZUZvcm1TdGF0ZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGV9Lz47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZvcm1TdGF0ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIDxGMSBoYW5kbGVGb3JtU3RhdGU9e3RoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlfS8+O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5mb3JtU3RhdGUgPT09IDIpIHtcbiAgICAgIHJldHVybiA8RjIgaGFuZGxlRm9ybVN0YXRlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZX0vPjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybVN0YXRlID09PSAzKSB7XG4gICAgICByZXR1cm4gPEYzIGhhbmRsZUZvcm1TdGF0ZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGV9Lz47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZvcm1TdGF0ZSA9PT0gNCkge1xuICAgICAgcmV0dXJuIDxQdXJjaGFzZWQgaGFuZGxlRm9ybVN0YXRlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZX0vPjtcbiAgICB9XG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogSG9tZXBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Ib21lUGFnZSE8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZSgxKX19PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogRjEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgLy8gYXhpb3MgcG9zdCByZXF1ZXN0XG4gICAgYXhpb3MuZ2V0KCcvZGV0YWlscycpXG4gICAgLnRoZW4gKChyZXNwb25zZSkgPT4ge2NvbnNvbGUubG9nKCdoaSEnKTsgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSl9KVxuICAgIHRoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlKDIpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VXNlciBEZXRhaWxzOiBmMTwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKiBGMiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY2xhc3MgRjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RyZWV0OiAnJyxcbiAgICAgIGNpdHk6ICcnLFxuICAgICAgc3RhdGU6ICcnLFxuICAgICAgemlwY29kZTogJycsXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAvLyBheGlvcyBwb3N0IHJlcXVlc3RcblxuICAgIHRoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlKDMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+QWRkcmVzcyBEZXRhaWxzOiBmMjwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgU3RyZWV0OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ2l0eTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBTdGF0ZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgWmlwY29kZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBjb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogRjMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEYzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNyZWRpdENhcmQ6ICcnLFxuICAgICAgZXhwaXJ5RGF0ZTogJycsXG4gICAgICBDVlY6ICcnLFxuICAgICAgYmlsbGluZ1ppcGNvZGU6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgLy8gYXhpb3MgcG9zdCByZXF1ZXN0XG5cbiAgICB0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZSg0KVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNyZWRpdCBDYXJkIERldGFpbHM6IGYzPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDcmVkaXQgQ2FyZCBOdW1iZXI6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlZGl0Q2FyZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRXhwaXJhdGlvbiBEYXRlOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGlyeURhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENWVjpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJDVlZcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEJpbGxpbmcgWmlwY29kZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsaW5nWmlwY29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8qKioqKioqKioqKioqKioqKioqKiogUHVyY2hhc2VkICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jbGFzcyBQdXJjaGFzZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIC8vIGF4aW9zIHBvc3QgcmVxdWVzdFxuXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGUoMCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UHVyY2hhc2VkITwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlB1cmNoYXNlZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19