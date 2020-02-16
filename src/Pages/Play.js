import React, {Component} from "react";
import {Link} from "react-router-dom";
import Nav from "../Components/Navigation";
import GameItem from "../Components/GameItem";
import {ReactSortable} from "react-sortablejs";
import moment from "moment";

class Play extends Component {
  constructor(props) {
    this.itemFunctions = props.itemFunctions;

    this.state = {
      itemList: this.itemFunctions.getItems(),
      gameState: "sorting"
    }

    this.setStateItems = this.setStateItems.bind(this);
    this.check = this.check.bind(this);
    this.mainHtml = this.mainHtml.bind(this);
  }

  setStateItems(newList) {
    // reset the gameState too
    this.setState({
      itemList: newList,
      gameState: "sorting"
    })
  }

  check() {
    const currentItems = this.state.itemList;

    let inOrder = true;
    for (let i = 1; i < currentItems.length; i++) {
      if (moment(currentItems[i].date) < moment(currentItems[i - 1].date)) {
        inOrder = false;
      }
    }

    console.log(inOrder);
    // set this.state to have the gameState by win or lose
    // style accordingly
    // reset the gameState as soon as anything is dragged
    this.setState({
      gameState: inOrder ? "win" : "lose"
    });
  }

  showResult() {
    if (this.state.gameState == "win") {
      return (
        <div className="mt-n2 alert alert-success" role="alert">
          Yay! You ordered the events correctly.
        </div>
      );
    } else if (this.state.gameState == "lose") {
      return (
        <div className="mt-n3 mb-4 alert alert-danger" role="alert">
          Oh no! Some of your events are out of order.
        </div>
      );
    }

    return;
  }

  mainHtml() {
    if (this.itemList.length == 0) {
      return (
        <div>
          You haven't added any events to learn yet.
          <Link className="btn-link" to="/edit">Create events</Link>
        </div>
      )
    }


    return (
      <div>
        <ul className="m-4 list-group">
          <ReactSortable id="sortable-list" list={this.state.itemList} setList={this.setStateItems}>
            {
              this.state.itemList.map((item) => {
                return <li key={item.id} className="list-group-item"><GameItem item={item} /></li>
              })
            }
          </ReactSortable>
        </ul>

        {this.showResult()}

        <div className="text-center mt-n3">
          <button className="btn btn-primary" onClick={this.check}>Check</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Nav />
        {mainHtml()}
      </div>
    );
  }
}

export default Play;