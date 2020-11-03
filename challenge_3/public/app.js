class App extends React.Component {
  constructor() {
    super(); // 0 = homepage, 1 = F1, 2 = F2, 3 = F3

    this.state = {
      formState: 0,
      name: '',
      email: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      creditCard: '',
      expiryDate: '',
      CVV: '',
      billingZipcode: ''
    };
    this.handleFormState = this.handleFormState.bind(this);
  } //update state function


  handleFormState(stateObj) {
    this.setState(stateObj);
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
        this.props.handleFormState({
          formState: 1
        });
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
      password: '',
      formState: 2
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    axios.post({
      method: 'post',
      url: 'http://localhost:3000/details/',
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    }).then(response => {
      console.log('Client sucess');
      this.props.handleFormState(this.state);
    }).catch(err => console.log(err));
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
      zipcode: '',
      formState: 3
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    this.props.handleFormState(this.state);
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
      billingZipcode: '',
      formState: 4
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    this.props.handleFormState(this.state);
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

} //********************* Confirmation *****************************/


class Purchased extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request
    this.props.handleFormState({
      formState: 0
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Confirmation!"), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit
    }, "Purchased"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1TdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RyZWV0IiwiY2l0eSIsInppcGNvZGUiLCJjcmVkaXRDYXJkIiwiZXhwaXJ5RGF0ZSIsIkNWViIsImJpbGxpbmdaaXBjb2RlIiwiaGFuZGxlRm9ybVN0YXRlIiwiYmluZCIsInN0YXRlT2JqIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJGb3JtSGFuZGxlciIsInByb3BzIiwiSG9tZXBhZ2UiLCJGMSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImF4aW9zIiwicG9zdCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiRjIiLCJGMyIsIlB1cmNoYXNlZCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFEWSxDQUVaOztBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxTQUFTLEVBQUUsQ0FEQTtBQUVYQyxNQUFBQSxJQUFJLEVBQUUsRUFGSztBQUdYQyxNQUFBQSxLQUFLLEVBQUUsRUFISTtBQUlYQyxNQUFBQSxRQUFRLEVBQUUsRUFKQztBQUtYQyxNQUFBQSxNQUFNLEVBQUUsRUFMRztBQU1YQyxNQUFBQSxJQUFJLEVBQUUsRUFOSztBQU9YTixNQUFBQSxLQUFLLEVBQUUsRUFQSTtBQVFYTyxNQUFBQSxPQUFPLEVBQUUsRUFSRTtBQVNYQyxNQUFBQSxVQUFVLEVBQUUsRUFURDtBQVVYQyxNQUFBQSxVQUFVLEVBQUUsRUFWRDtB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QXlDLE1BQUEsUUFBUSxFQUFFLEtBQUtBO0FBQXhELE1BRkYsQ0FiRixDQUZGLGVBb0JFO0FBQVEsTUFBQSxPQUFPLEVBQUUsS0FBS0M7QUFBdEIsY0FwQkYsQ0FERjtBQXdCRDs7QUFwRDhCLEMsQ0F3RGpDOzs7QUFFQSxNQUFNaUIsU0FBTixTQUF3QjFDLEtBQUssQ0FBQ0MsU0FBOUIsQ0FBd0M7QUFDdENDLEVBQUFBLFdBQVcsQ0FBQ21CLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0ksWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCVCxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUNEUyxFQUFBQSxZQUFZLEdBQUc7QUFDYjtBQUVBLFNBQUtKLEtBQUwsQ0FBV04sZUFBWCxDQUEyQjtBQUFDWCxNQUFBQSxTQUFTLEVBQUU7QUFBWixLQUEzQjtBQUNEOztBQUNEZSxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSw4Q0FDRSxnREFERixlQUVFO0FBQVEsTUFBQSxPQUFPLEVBQUUsS0FBS007QUFBdEIsbUJBRkYsQ0FERjtBQU1EOztBQWpCcUM7O0FBcUJ4Q2tCLFFBQVEsQ0FBQ3hCLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QnlCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyAwID0gaG9tZXBhZ2UsIDEgPSBGMSwgMiA9IEYyLCAzID0gRjNcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybVN0YXRlOiAwLFxuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBzdHJlZXQ6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXBjb2RlOiAnJyxcbiAgICAgIGNyZWRpdENhcmQ6ICcnLFxuICAgICAgZXhwaXJ5RGF0ZTogJycsXG4gICAgICBDVlY6ICcnLFxuICAgICAgYmlsbGluZ1ppcGNvZGU6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlRm9ybVN0YXRlID0gdGhpcy5oYW5kbGVGb3JtU3RhdGUuYmluZCh0aGlzKTtcbiAgfVxuICAvL3VwZGF0ZSBzdGF0ZSBmdW5jdGlvblxuICBoYW5kbGVGb3JtU3RhdGUoc3RhdGVPYmopIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlT2JqKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybUhhbmRsZXIgZm9ybVN0YXRlPXt0aGlzLnN0YXRlLmZvcm1TdGF0ZX0gaGFuZGxlRm9ybVN0YXRlPXt0aGlzLmhhbmRsZUZvcm1TdGF0ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKiBGb3JtSGFuZGxlciBSZW5kZXIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEZvcm1IYW5kbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybVN0YXRlID09PSAwKSB7XG4gICAgICByZXR1cm4gPEhvbWVwYWdlIGhhbmRsZUZvcm1TdGF0ZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGV9Lz47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZvcm1TdGF0ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIDxGMSBoYW5kbGVGb3JtU3RhdGU9e3RoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlfS8+O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5mb3JtU3RhdGUgPT09IDIpIHtcbiAgICAgIHJldHVybiA8RjIgaGFuZGxlRm9ybVN0YXRlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZX0vPjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybVN0YXRlID09PSAzKSB7XG4gICAgICByZXR1cm4gPEYzIGhhbmRsZUZvcm1TdGF0ZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGV9Lz47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZvcm1TdGF0ZSA9PT0gNCkge1xuICAgICAgcmV0dXJuIDxQdXJjaGFzZWQgaGFuZGxlRm9ybVN0YXRlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZX0vPjtcbiAgICB9XG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogSG9tZXBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Ib21lUGFnZSE8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZSh7Zm9ybVN0YXRlOiAxfSl9fT5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqIEYxICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jbGFzcyBGMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGZvcm1TdGF0ZTogMixcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIC8vIGF4aW9zIHBvc3QgcmVxdWVzdFxuICAgIGF4aW9zLnBvc3Qoe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kZXRhaWxzLycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4gKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0NsaWVudCBzdWNlc3MnKTtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlKHRoaXMuc3RhdGUpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VXNlciBEZXRhaWxzOiBmMTwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKiBGMiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY2xhc3MgRjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RyZWV0OiAnJyxcbiAgICAgIGNpdHk6ICcnLFxuICAgICAgc3RhdGU6ICcnLFxuICAgICAgemlwY29kZTogJycsXG4gICAgICBmb3JtU3RhdGU6IDMsXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAvLyBheGlvcyBwb3N0IHJlcXVlc3RcblxuICAgIHRoaXMucHJvcHMuaGFuZGxlRm9ybVN0YXRlKHRoaXMuc3RhdGUpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+QWRkcmVzcyBEZXRhaWxzOiBmMjwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgU3RyZWV0OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ2l0eTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBTdGF0ZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgWmlwY29kZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBjb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKiogRjMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIEYzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNyZWRpdENhcmQ6ICcnLFxuICAgICAgZXhwaXJ5RGF0ZTogJycsXG4gICAgICBDVlY6ICcnLFxuICAgICAgYmlsbGluZ1ppcGNvZGU6ICcnLFxuICAgICAgZm9ybVN0YXRlOiA0LFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgLy8gYXhpb3MgcG9zdCByZXF1ZXN0XG5cbiAgICB0aGlzLnByb3BzLmhhbmRsZUZvcm1TdGF0ZSh0aGlzLnN0YXRlKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNyZWRpdCBDYXJkIERldGFpbHM6IGYzPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDcmVkaXQgQ2FyZCBOdW1iZXI6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlZGl0Q2FyZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRXhwaXJhdGlvbiBEYXRlOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGlyeURhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENWVjpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJDVlZcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEJpbGxpbmcgWmlwY29kZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsaW5nWmlwY29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8qKioqKioqKioqKioqKioqKioqKiogQ29uZmlybWF0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jbGFzcyBQdXJjaGFzZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIC8vIGF4aW9zIHBvc3QgcmVxdWVzdFxuXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVGb3JtU3RhdGUoe2Zvcm1TdGF0ZTogMH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNvbmZpcm1hdGlvbiE8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5QdXJjaGFzZWQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==