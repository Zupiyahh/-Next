
import React from 'react';
import '../css/page17.css';
import { mockdata } from '../mock/mockdata';
import { Layout, Avatar, Menu, Dropdown, Button, message, Space, Row, Col, Card } from 'antd';
import { PieChartOutlined, DownOutlined, FileTextOutlined, UserOutlined, PhoneOutlined, LoginOutlined, UserSwitchOutlined} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item className="textpro" key="1" icon={<UserOutlined />}>
      โปรไฟล์ของฉัน
    </Menu.Item>
    <Menu.Item className="textlogout" key="2" icon={<LoginOutlined />}>
      <a href={"/LoginScreen"}>ออกจากระบบ</a>
    </Menu.Item>
  </Menu>
);

function pScreen() {
  return (
    <Layout>
      <Sider className="box">
        <Menu className="text5"
          defaultSelectedKeys={['4']}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            แดชบอร์ด
          </Menu.Item>
          <Menu.Item className="box1" key="2" icon={<FileTextOutlined />}>
            <a href={"/page17"}>การประเมินผลสัมฤทธิ์</a>
          </Menu.Item>
          <Menu.Item key="4" icon={<PhoneOutlined />}>
            02 186 7111
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="head">
          <Space wrap>
            <Dropdown overlay={menu}>
              <Button className="botton">
                <DownOutlined />
              </Button>
            </Dropdown>
            {/* <h2 className="text3">สมหมาย วงศ์เสรี</h2>
          <p className="text4">แอดมิน</p> */}
          </Space>
          <Avatar className="pro" src='./dp.jpg' />
          <h2 className="text1">การประเมินผลสัมฤทธิ์</h2>
          <p className="text2">การพิจารณาของเจ้าหน้าที่</p>
        </Header>
        <Content style={{ padding: '0 40px' }}>
          <div style={{ padding: 1 }}>
            <Row gutter={[12, 12]}>
              <Col span={4} offset={-10}>
                <div className="box4">
                  <Card className="cradmenu" style={{ width: 300 }}>สมาคม</Card>
                  <Card className="cradmenu" style={{ width: 300 }}>ผู้จัด</Card>
                  <Card className="cradmenu" style={{ width: 300 }}>สโมสร</Card>
                </div>
              </Col>
              <Col span={4} offset={2} >
                <div className="box5">
                  <h1 className="text7">เลือกประเภทกีฬา</h1>
                  <center>
                    {mockdata.map((data, key) => {
                      return (
                        <div key={key}>
                          <Stock
                            key={key}
                            company={data.company}
                          />
                        </div>
                      );
                    })}
                  </center>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

const Stock = ({ company }) => {
  if (!company) return <div />;
  return (
    <div>
        <Card className="crad" style={{ width: 800 }}>{company}
          <center>
            <Button className="cradgrid" type="primary" icon={<UserSwitchOutlined />} >
              อยู่ระหว่างการพิจารณาของเจ้าหน้าที่
            </Button>
          </center>
        </Card>
    </div>
  );
};

export default pScreen;
