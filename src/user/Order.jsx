import React, { Component } from "react";
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      fields: [],
      item: {},
      warehouses: [1, 2, 3, 4, 5],
      items: [1, 2, 3, 4, 5],
      resItems: [],
      num: 1,
      roles: ["Creator", "executor", "manager"],
      Warehouse: 0,
      type: "",
      status: "",
      creationDate: "",
      updatedDate: "",
      description: "",
      attachments: [],
      comments: []
    };
  }
  handleAdd = () => {
    this.setState({ num: this.state.num + 1 });
  };
  handleSubmit = () => {
    fetch("http://localhost:3010/postOrder", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  render() {
    let items = [];
    let attachments = [];
    let comments = [];
    for (let i = 0; i < 3; i++) {
      attachments.push(<li key={i}>Attachment {i}</li>);
    }
    for (let i = 0; i < 3; i++) {
      comments.push(<h5 key={i}>Comment {i}</h5>);
    }
    for (let i = 0; i < this.state.num; i++) {
      items.push(
        <div key={i} className="form-row">
          <div className="form-group col-md-8">
            <label>Item</label>
            <select
              className="form-control"
              onChange={e => {
                let item = this.state.item;
                item.itemType = e.target.value;
                this.setState({ item });
              }}
            >
              {this.state.items.map(p => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label>Quantity</label>
            <input
              id="quantity"
              className="form-control"
              type="number"
              min="0"
              step="1"
              data-bind="value:replyNumber"
              onChange={e => {
                let item = this.state.item;
                item.itemQuantity = e.target.value;
                this.setState({ item });
                console.log(this.state.item);
              }}
            />
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Name: </h2>
            <input
              className="form-control col-md-4"
              onChange={p => this.setState({ status: p.target.value })}
            />
            <h2>Request Form</h2>
            <h4 className="form-group col-md-3">Status:</h4>

            <h4>Type:</h4>

            {/* <form className="md-form"> */}
            <div className="form-row">
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={p => this.setState({ description: p.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="">Creation Date </label>
              </div>
              <div className="form-group">
                <label className=""> Updated Date </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Warehouse</label>
                <select
                  className="form-control"
                  onChange={e => this.setState({ Warehouse: e.target.value })}
                >
                  {this.state.warehouses.map(p => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {items}

            <button
              onClick={() => this.handleAdd()}
              className="form-group col-md-3 btn btn-lg btn-outline-primary"
            >
              Add
            </button>
            <button
              onClick={() => this.setState({ num: this.state.num - 1 })}
              className={
                this.state.num <= 0
                  ? "form-group col-md-3 btn btn-lg btn-outline-danger disabled"
                  : "form-group col-md-3 btn btn-lg btn-outline-danger"
              }
            >
              Delete
            </button>
            <button
              className="form-group col-md-3 btn btn-lg btn-outline-success"
              onClick={() => this.handleSubmit()}
            >
              Send request
            </button>

            <div className="form-row">
              <label className="form-group col-md-3 btn btn-lg btn-outline-default">
                Add file <input type="file" hidden />
              </label>
            </div>
            {attachments}
            <br />
            <br />
            {comments}
            {/* </form> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Order;
