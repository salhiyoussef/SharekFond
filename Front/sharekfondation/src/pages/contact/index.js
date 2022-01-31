import React, { Component } from "react";
import "./style.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import axios from 'axios'

export default class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.OnChange = this.OnChange.bind(this);
  }
  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
    
  }
  async handleSubmit(e) {
    e.preventDefault();
    const {firstname , lastname , email , message} = this.state
    console.log(firstname , lastname , email , message);
    const form = await axios.post('/api/form' ,{
        firstname,
        lastname,
        email,
        message
    })
    // fetch("http://localhost:3001/send", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.status === "success") {
    //       alert("Message Sent.");
    //       this.resetForm();
    //     } else if (response.status === "fail") {
    //       alert("Message failed to send.");
    //     }
    //   });
  }
  resetForm() {
    this.setState({ firstname: "", lastname: "", email: "", message: "" });
  }
  render() {
    return (
      <div className="container contact">
        <Form onSubmit={this.handleSubmit} method="POST">
          <FormGroup>
            <Label for="firstname">الإسم الشخصي</Label>
            <Input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.OnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">الإسم العائلي</Label>
            <Input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.OnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleInputEmail1">البريد الإلكتروني</Label>
            <Input
              type="email"
              name="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.OnChange}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <Label for="message">الرسالة</Label>
            <Input
              type="textarea"
              name="message"
              rows="5"
              value={this.state.message}
              onChange={this.OnChange}
            />
          </FormGroup>
          <Button type="submit">إرسال</Button>
        </Form>
      </div>
    );
  }
}
