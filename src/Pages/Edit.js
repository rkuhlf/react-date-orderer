import React, {Component} from "react";
import {Link} from "react-router-dom";
import Nav from "../Components/Navigation";
import EditItem from "../Components/EditItem";
import AddItem from "../Components/AddItem";

class Edit extends Component {
  constructor(props) {
    this.itemFunctions = props.itemFunctions;
    console.log(props);

    this.handleNewItem = this.handleNewItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.mainHtml = this.mainHtml.bind(this);
  }

  handleNewItem(newItemState) {
    this.itemFunctions.addItem(newItemState.name, newItemState.date, newItemState.description)
  }

  handleDelete(id) {
    this.itemFunctions.removeItem(id);
  }

  clearItems() {
    this.itemFunctions.clearItems();
  }

  mainHtml() {
    const items = this.itemFunctions.getItems();
    if (items.length == 0) {
      return;
    }


    return (
      <div>
        <ul className="m-4 list-group">
        {
          items.map((item) => {
            return <li key={item.id} className="list-group-item"><EditItem item={item} handleDelete={() => this.handleDelete(item.id)}/></li>
          })
        }
        </ul>
        <div className="text-center mt-n3 mb-3">
          <button className="btn btn-danger" onClick={this.clearItems}>Clear</button>
        </div>
        <hr />
      </div>
    )
  }

  render() {
    return (
      <div>
        <Nav />
        {this.mainHtml()}
        <AddItem handleSubmit={this.handleNewItem} />
      </div>
    );
  }
}

export default Edit;