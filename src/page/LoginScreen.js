import React from "react";
import '../css/Login.css';
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';

function LScreen() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <Row justify="center" align="middle">
      <Col className="box" span={16}>
        <center>
          <h1 className="login">เข้าสู่ระบบ</h1>
          <Form >
            <Form.Item className="form"
              label="อีเมลล์"
              name="อีเมลล์"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item className="form"
              label="รหัสผ่าน"
              name="รหัสผ่าน"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        </center >
      </Col >
    </Row>
  );
}

export default LScreen;

