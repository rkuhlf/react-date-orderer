import React, {Component} from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";

class AddItem extends Component {
  constructor(props) {
    this.state = {
      name: "",
      date: moment(),
      description: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }

  handleDateChange(date) {
    console.log(date);
    this.setState({
      date: date
    });
  }

  handleDescriptionChange(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: "",
      date: moment(),
      description: ""
    });
  }

  render() {
    console.log("passed date", this.state.date)
    return (
      <div>
        <h3 className="mx-3">Add Event</h3>
        <form className="px-5 py-0" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Event: </label>
            <input className="col-sm-10 form-control" type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </div>
          
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description: </label>
            <textarea className="col-sm-10 form-control" type="text" value={this.state.description} onChange={this.handleDescriptionChange}/>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Date: </label>
            <DatePicker className="form-control" selected={Date.parse(this.state.date) /* only sets default value*/} onChange={this.handleDateChange}/>
          </div>

          <input className="btn btn-primary mb-2" type="submit" value="Add Event" />
        </form>
      </div>

      
    );
  }
}

export default AddItem;