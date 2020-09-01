import RightTab from './inc/rightTab';
import LeftTab from './inc/leftTab';
import React from 'react';
import {Layout, Row,Col,Image} from 'antd';
const {Sider ,Header ,Content, Footer } =Layout;
const Dashboard  = () => {
    return (
    <Layout style={{background:'none'}}>
      <Sider width={300}>
          <LeftTab />
      </Sider>
      <Layout>
          <Row>
              
              <Col lg={16}>
              <Image src="dfds"/>
              </Col>
              <Col lg={8}>
                  thiss is
              </Col>
          </Row>
      </Layout>
      <Sider width={300} style={{background:'none'}}>
          <RightTab/>
      </Sider>
    </Layout>
    )
}
   
export default Dashboard;