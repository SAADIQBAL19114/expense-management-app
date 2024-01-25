import React from 'react'
import { Button, Form, Input } from "antd";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className="register-page">
        <Form layout="vertical">
          <h1>Register Form</h1>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login ">Already Register? Click Here to login</Link>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Register