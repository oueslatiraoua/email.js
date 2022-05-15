import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gy2k1fu",
        "template_ekwfe6c",
        e.target,
        "TnaQETN73ZLgFaw8M"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Form onSubmit={sendEmail}>
      <h2>contact us</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name" />
        <Form.Text className="text-muted">Put your name please</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="message">
        <Form.Control
          as="textarea"
          placeholder="Leave a message here"
          name="message"
          style={{ height: "100px", marginBottom: "20px" }}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default Mailer;
