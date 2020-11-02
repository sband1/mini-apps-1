class App extends React.Component {
  constructor() {
    super();
    // 0 = homepage, 1 = F1, 2 = F2, 3 = F3
    this.state = {
      formState: 0,
    }

    this.handleFormState = this.handleFormState.bind(this);
  }
  //update state function
  handleFormState(page) {
    this.setState({
      formState: page,
    })
  }

  render() {
    return (
      <div>
        <FormHandler formState={this.state.formState} handleFormState={this.handleFormState}/>
      </div>
    )
  }
}



//********************* FormHandler Render *****************************/

class FormHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.formState === 0) {
      return <Homepage handleFormState={this.props.handleFormState}/>;
    }
    if (this.props.formState === 1) {
      return <F1 handleFormState={this.props.handleFormState}/>;
    }
    if (this.props.formState === 2) {
      return <F2 handleFormState={this.props.handleFormState}/>;
    }
    if (this.props.formState === 3) {
      return <F3 handleFormState={this.props.handleFormState}/>;
    }
    if (this.props.formState === 4) {
      return <Purchased handleFormState={this.props.handleFormState}/>;
    }
  }
}

//********************* Homepage *****************************/

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>HomePage!</h1>
        <button onClick={() => {this.props.handleFormState(1)}}>Checkout</button>
      </div>
    )
  }
}

//********************* F1 *****************************/

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request

    this.props.handleFormState(2)
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})

  }

  render() {
    return (
      <div>
        <h1>User Details: f1</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange}/>
          </label>
        </form>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

//********************* F2 *****************************/

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      state: '',
      zipcode: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request

    this.props.handleFormState(3)
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})

  }

  render() {
    return (
      <div>
        <h1>Address Details: f2</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Street:
            <input type="text" name="street" onChange={this.handleChange}/>
          </label>
          <label>
            City:
            <input type="text" name="city" onChange={this.handleChange}/>
          </label>
          <label>
            State:
            <input type="text" name="state" onChange={this.handleChange}/>
          </label>
          <label>
            Zipcode:
            <input type="text" name="zipcode" onChange={this.handleChange}/>
          </label>
        </form>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

//********************* F3 *****************************/

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      expiryDate: '',
      CVV: '',
      billingZipcode: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // axios post request

    this.props.handleFormState(4)
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})

  }

  render() {
    return (
      <div>
        <h1>Credit Card Details: f3</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Credit Card Number:
            <input type="text" name="creditCard" onChange={this.handleChange}/>
          </label>
          <label>
            Expiration Date:
            <input type="text" name="expiryDate" onChange={this.handleChange}/>
          </label>
          <label>
            CVV:
            <input type="text" name="CVV" onChange={this.handleChange}/>
          </label>
          <label>
            Billing Zipcode:
            <input type="text" name="billingZipcode" onChange={this.handleChange}/>
          </label>
        </form>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}


//********************* Purchased *****************************/

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
    return (
      <div>
        <h1>Purchased!</h1>
        <button onClick={this.handleSubmit}>Purchased</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));