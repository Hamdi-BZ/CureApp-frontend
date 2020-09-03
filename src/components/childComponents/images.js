import React, { Component } from "react";
import Axios from "axios";
export default class images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  handleChangePic = (event) => {
    console.log(event.target.files[0].name);
    this.setState({ image: event.target.files[0].name });
  };
  submitHandler = (event) => {
    /*let formData = new FormData(); //formdata object
    formData.append("file", this.state.image); //append the values with key, value pair

    Axios.post("http://localhost:8080/upload", formData)
      .then((Response) => {
        console.log("res:" + Response);
      })
      .catch((err) => {
        console.log(err);
      });*/
    localStorage.setItem("image", this.state.image);
  };
  render() {
    var img = localStorage.getItem("image");
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mt-3">
            <form
              class="mt-4"
              action="http://localhost:8080/upload"
              method="POST"
              enctype="multipart/form-data"
            >
              <div class="form-group" style={{ display: "flex" }}>
                <input
                  type="file"
                  name="file"
                  id="input-files"
                  class="form-control-file border"
                  onChange={this.handleChangePic}
                />
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={this.submitHandler}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
