import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      GPA: "",
      coffee: "",
      weight: "",
      Gender: "",
      breakfast: "",
      fruit_day: "",
      veggies_day: "",
      eating_out: "",
      soup: "",
      fries: "",
      result: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeGPA = this.handleChangeGPA.bind(this);
    this.handleChangeCoffee = this.handleChangeCoffee.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangeBreakfast = this.handleChangeBreakfast.bind(this);
    this.handleChangeFruit_day = this.handleChangeFruit_day.bind(this);
    this.handleChangeVeggies_day = this.handleChangeVeggies_day.bind(this);
    this.handleChangeEating_out = this.handleChangeEating_out.bind(this);
    this.handleChangeSoup = this.handleChangeSoup.bind(this);
    this.handleChangeFries = this.handleChangeFries.bind(this);
  }

  handleChangeGender(event) {
    this.setState({
      Gender: event.target.value,
    });
  }
  handleChangeFries(event) {
    this.setState({
      fries: event.target.value,
    });
  }
  handleChangeVeggies_day(event) {
    this.setState({
      veggies_day: event.target.value,
    });
  }
  handleChangeEating_out(event) {
    this.setState({
      eating_out: event.target.value,
    });
  }
  handleChangeSoup(event) {

    this.setState({
      soup: event.target.value,
    });
    
  }
  handleChangeFruit_day(event) {
    this.setState({
      fruit_day: event.target.value,
    });
  }
  handleChange(event) {
    this.setState({
      coffee: event.target.value,
    });
  }

  handleChangeBreakfast(event) {
    this.setState({
      breakfast: event.target.value,
    });
  }

  handleChangeGPA(event) {
    this.setState({
      GPA: event.target.value,
    });
  }

  handleChangeCoffee(event) {
    this.setState({
      coffee: event.target.value,
    });
  }

  handleChangeWeight(event) {
    this.setState({
      Weight: event.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    { this.state.Breakfast==="yes" ? console.log("ok") : console.log("notok") }
    { this.state.Gender==="Woman" ? this.state.Gender = 2 : this.state.Gender = 1 }
    { this.state.Breakfast==="yes" ? this.state.Breakfast = 1 : this.state.Breakfast = 0 }
    { this.state.coffee==="Yes" ? this.state.coffee = 2 : this.state.coffee = 1 }
    console.log(this.state.Breakfast);

    let result = fetch("http://8008e9a8.ngrok.io/result/" +
    this.state.coffee +
    "/" +
    this.state.Gender +
    "/" +
    this.state.Breakfast +
    "/" +
    this.state.fruit_day +
    "/" +
    this.state.veggies_day +
    "/" +
    this.state.eating_out +
    "/" +
    this.state.soup +
    "/" +
    this.state.fries )
        .then(response => {
            response.json()
                .then(value => {
                    if (response.status === 200) {
                      this.setState({
                        GPA: value,
                        result: true,
                      });
                       
                    }
                });
        });
}

  render() {
    return (
      <div>
        <div style={{float: "left"}}>
          <div style={{width:"1500px"}}>
            <form onSubmit={this.handleSubmit}>
              <div class="form-group col-md-4">
                <label for="inputState">Do you drink coffee</label>
                <select
                  id="brand"
                  name="brand"
                  onChange={this.handleChange}
                  class="form-control"
                >
                  <option brand>Choose...</option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>

                <label for="gender">sexe</label>
                <select
                  id="gender"
                  name="gender"
                  onChange={this.handleChangeGender}
                  class="form-control"
                >
                  <option breakfast>Choose...</option>
                  <option>Woman</option>
                  <option>Man</option>
                </select>

                <label for="eating_out">Enter How many times a week you eating out?</label>
                <select
                  id="eating_out"
                  name="gender"
                  onChange={this.handleChangeEating_out}
                  class="form-control"
                >
                  <option eating_out>Choose...</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>

                <label for="soup">Enter how many times you drink soup a week?</label>
                <select
                  id="fruit_day"
                  name="gender"
                  onChange={this.handleChangeSoup}
                  class="form-control"
                >
                  <option breakfast>Choose...</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>

                <label for="fruit_day">
                How likely to eat fruit in a regular day 
                </label>
                <select
                  id="fruit_day"
                  name="gender"
                  onChange={this.handleChangeFruit_day}
                  class="form-control"
                >
                  <option breakfast>Choose...</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label for="inputState">Do you take a breakfast on the morning</label>
                <select
                  id="breakfast"
                  name="breakfast"
                  onChange={this.handleChangeBreakfast}
                  class="form-control"
                >
                  <option breakfast>Choose...</option>
                  <option>yes</option>
                  <option>No</option>
                </select>
                <label for="fries">Enter how many fries you eat by week</label>
                <select
                  id="fries"
                  name="fries"
                  onChange={this.handleChangeFries}
                  class="form-control"
                >
                  <option fries>Choose...</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label for="veggies_day">
                  Enter how many a week you make a veggie day
                </label>
                <select
                  id="fries"
                  name="veggies_day"
                  onChange={this.handleChangeVeggies_day}
                  class="form-control"
                >
                  <option veggies_day>Choose...</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>

                <MDBBtn type="submit">Accéder à mon bilan</MDBBtn>
              </div>

              
            </form>
          </div>
          
        </div>

        <div style={{width:"500px"}}>
              {this.state.result ? (
                <div >
                  {this.state.GPA === 1 ? (
                    <div>
                     < h1> Bilan</h1>
                     
                     <h2>You have great chance to pass your exams.
                      Continue like that</h2> 
                    </div>
                  ) : (
                    <div ><h1> Bilan</h1><h1> </h1>
                     <h2> Ohhh you are alimentation is not very good</h2> <h2> You have to change it if you want to pass your exams!
                      </h2>
                    </div>
                  )}
                </div>
              ) : (
                console.log("ok")
              )}
              </div>

      </div>
      
    );
    
  }
  
}
export default Cards;
