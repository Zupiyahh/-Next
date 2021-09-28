
import React from 'react';
import '../css/page39.css';
import { mockdata } from '../mock/mockdata';
import { Layout, Avatar, Menu, Dropdown, Button, message, Space, Row, Col, Card, Title } from 'antd';
import { PieChartOutlined, DownOutlined, FileTextOutlined, UserOutlined, PhoneOutlined, LoginOutlined, CheckCircleFilled } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
   <Menu>
   <Menu.Item className="textpro" key="0" icon={<UserOutlined />}>
      โปรไฟล์ของฉัน
   </Menu.Item>
   <Menu.Item className="textlogout" key="1" icon={<LoginOutlined />}>
   <a href={"/LoginScreen"}>ออกจากระบบ</a>
   </Menu.Item>
 </Menu>
);
const menu1 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item className="dropdown3" key="1" >
      พ.ศ.2564
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
          <Menu.Item key="3" icon={<UserOutlined />}>
            จัดการผู้ใช้
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
              <a className="botton" onClick={e => e.preventDefault()}>
              <DownOutlined />
              </a>
            </Dropdown>
            {/* <h2 className="text3">สมหมาย วงศ์เสรี</h2>
          <p className="text4">แอดมิน</p> */}
          </Space>
          <Avatar className="pro" src='./dp.jpg' />
          <h2 className="text1">การประเมินผลสัมฤทธิ์</h2>
          <p className="text2">แอดมิน</p>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ padding: 1 }}>
            <Row gutter={[12, 12]}>
              <Col span={4} offset={-10}>
                <div className="box4">
                  <Dropdown className="dropdown2" overlay={menu1}>
                    <Button className="text6">
                      ปี 2564
                      <DownOutlined />
                    </Button>
                  </Dropdown>
                  <Card className="cradmenu" style={{ width: 300,height:90, marginTop:20 }}>สมาคม</Card>
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
      <Card className="crad" style={{ width: 790 }}>{company}
        <center>
          <Button className="cradgrid" type="primary" icon={<CheckCircleFilled />} >
            เสร็จสมบูรณ์
          </Button>
        </center>
      </Card>
    </div>
  );
};

export default pScreen;
