import React, {Component} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false
    }

    this.toggleDescription = this.toggleDescription.bind(this);
    this.getDescription = this.getDescription.bind(this);
  }

  toggleDescription() {
    console.log("toggling");
    this.setState(prevState => ({showDescription: !prevState.showDescription}))
  }

  getDescription() {
    if (!this.state.showDescription) {
      return;
    }

    return (
      <div>
        <hr />
        {this.props.item.description}
      </div>
    );
  }

  render() {
    let dateToRender = this.props.item.date;
    dateToRender = moment(dateToRender).format("M/D/Y");    

    

    return (
      <div className="row hover-parent align-items-center">
        <div className="col-9">
          <div>
            {this.props.item.name}: {dateToRender}
          </div>
          {this.getDescription()}
        </div>
        <div className="col-3 hover-child text-right">
          <div onClick={this.toggleDescription} className="text-info px-1 mr-1 btn">
            <FontAwesomeIcon className="d-inline" icon={faInfoCircle} />
          </div>
          <div onClick={this.props.handleDelete} className="text-danger px-1 btn">
            <FontAwesomeIcon className="d-inline" icon={faTimes} />
          </div>
        </div>
      </div>
    );
  }
}

export default EditItem;