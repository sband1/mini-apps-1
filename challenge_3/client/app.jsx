
class App extends React.Component {
  constructor() {
    super();
    // 0 = homepage, 1 = F1, 2 = F2, 3 = F3
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
      billingZipcode: '',
    }

    this.handleFormState = this.handleFormState.bind(this);
  }
  //update state function
  handleFormState(stateObj) {
    this.setState(stateObj)
  }

  render() {
    return (
      <div>
        <FormHandler details={this.state} formState={this.state.formState} handleFormState={this.handleFormState}/>
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
      return <F2 details={this.props.details} handleFormState={this.props.handleFormState}/>;
    }
    if (this.props.formState === 3) {
      return <F3 details={this.props.details} handleFormState={this.props.handleFormState}/>;
    }
    if (this.props.formState === 4) {
      return <Purchased details={this.props.details} handleFormState={this.props.handleFormState}/>;
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
        <button onClick={() => {this.props.handleFormState({formState: 1})}}>Checkout</button>
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
      formState: 2,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // axios post request
    event.preventDefault();
    axios({
      method: 'post',
      url:'http://localhost:3000/details/',
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
    })
    .then ((response) => {
      console.log('Client sucess');
      this.props.handleFormState(this.state)
    })
    .catch((err) => console.log(err));
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
      formState: 3,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // axios post request
    event.preventDefault();
    axios({
      method: 'put',
      url:'http://localhost:3000/details/',
      data: {
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        name: this.props.details.name,
      }
    })
    .then ((response) => {
      console.log('Client PUT sucess');
      this.props.handleFormState(this.state)
    })
    .catch((err) => console.log('Put', err));
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
      formState: 4,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // axios post request
    event.preventDefault();
    axios({
      method: 'put',
      url:'http://localhost:3000/details/',
      data: {
        creditCard: this.state.street,
        expiryDate: this.state.city,
        CVV: this.state.state,
        billingZipcode: this.state.zipcode,
        name: this.props.details.name,
      }
    })
    .then ((response) => {
      console.log('Client PUT sucess');
      this.props.handleFormState(this.state)
    })
    .catch((err) => console.log('Put', err));
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


//********************* Confirmation *****************************/

class Purchased extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url:'http://localhost:3000/details/',
      params: {
        name: this.props.details.name,
      }
    })
    .then((response) => {
      console.log("WOOT", response.data);
      this.setState({details: response.data})
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleFormState({formState: 0});
  }
  render() {
    return (
      <div>
        <h1>Confirmation!</h1>
        <h4>{this.state.details.name}</h4>
        <button onClick={this.handleSubmit}>Purchased</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));