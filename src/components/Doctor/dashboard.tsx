"use client"
import { ArrowUpOutlined, CalendarOutlined, CheckCircleOutlined, CloseCircleOutlined, DownOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Col, Dropdown, Flex, MenuProps, Row, Space } from 'antd'
import React from 'react'
import Header from '../common/header';

const items: MenuProps['items'] = [
  {
    label: 'Today',
    key: '0',
  },
  {
    label: 'This Month',
    key: '1',
  },

  {
    label: 'Last 7 Days',
    key: '3',
  },
];


const Dashbaord = () => {
  return (
<>
    <Header/>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Flex vertical gap={10}>
          <Card>
            <p className='text-lg'>Total Patient</p>
            <div className='flex justify-between items-center'>
              <p className='text-2xl font-bold'>978</p>
              <Avatar shape="square" size={57} icon={<UserOutlined />} />
            </div>
            <div className='flex text-green-500'>
              <ArrowUpOutlined />
              <p>15% From Last Week</p>
            </div>
          </Card>

          <Card>
            <p className='text-lg'>Patients Today</p>
            <div className='flex justify-between'>
              <p className='text-2xl font-bold'>80</p>
              <Avatar shape="square" size={57} icon={<UserSwitchOutlined />} />
            </div>
            <div className='flex text-red-500'>
              <ArrowUpOutlined />
              <p>15% From Yesterday
              </p>
            </div>
          </Card>
          <Card>
            <p className='text-lg'>Appointments Today
            </p>
            <div className='flex justify-between'>
              <p className='text-2xl font-bold'>50</p>
              <Avatar shape="square" size={57} icon={<CalendarOutlined />} />
            </div>
            <div className='flex text-green-500'>
              <ArrowUpOutlined />
              <p>20% From Yesterday
              </p>
            </div>
          </Card>
        </Flex>
      </Col>
      <Col span={16}>
        <Card>
          <div className='flex justify-between'>
            <div className='text-xl font-bold'>Appointment</div>
            <div className='float-right'>
              <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Button>
                      Last 7 Days
                      <DownOutlined />
                    </Button>
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <hr className='mt-5 mb-5' />

          <Row className='flex justify-between items-center'>
            <Col className='flex items-center gap-3'>
              <Avatar
                shape='square'
                size={55}
                src={<img src={"/profile-02.jpg"} alt="avatar" />}
              />
              <div>
                <p> #Apt0001</p>
                <p>Adrian Marshall</p>
              </div>
            </Col>
            <Col >
              <p>11 Nov 2024 10.45 AM</p>
              <span className='bg-emerald-500 px-2 py-1 rounded-lg'>General</span>
            </Col>
            <Col className='flex gap-2'>
              <CheckCircleOutlined className='text-2xl text-green-500' />
              <CloseCircleOutlined className='text-2xl text-red-500' />
            </Col>
          </Row>
          <Row className='flex justify-between items-center mt-5'>
            <Col className='flex items-center gap-3'>
            <Avatar
                shape='square'
                size={55}
                src={<img src={"/drimg.jpg"} alt="avatar" />}
              />
              <div>
                <p> #Apt0001</p>
                <p>Adrian Marshall</p>
              </div>
            </Col>
            <Col >
              <p>11 Nov 2024 10.45 AM</p>
              <span className='bg-emerald-500 px-2 py-1 rounded-lg'>General</span>
            </Col>
            <Col className='flex gap-2'>
              <CheckCircleOutlined className='text-2xl text-green-500' />
              <CloseCircleOutlined className='text-2xl text-red-500' />
            </Col>
          </Row>
          <Row className='flex justify-between items-center mt-5'>
            <Col className='flex items-center gap-3'>
            <Avatar
                shape='square'
                size={55}
                src={<img src={"/profile-02.jpg"} alt="avatar" />}
              />
              <div>
                <p> #Apt0001</p>
                <p>Adrian Marshall</p>
              </div>
            </Col>
            <Col >
              <p>11 Nov 2024 10.45 AM</p>
              <span className='bg-emerald-500 px-2 py-1 rounded-lg'>General</span>
            </Col>
            <Col className='flex gap-2'>
              <CheckCircleOutlined className='text-2xl text-green-500' />
              <CloseCircleOutlined className='text-2xl text-red-500' />
            </Col>
          </Row>
          <Row className='flex justify-between items-center mt-5'>
            <Col className='flex items-center gap-3'>
            <Avatar
                shape='square'
                size={55}
                src={<img src={"/drimg.jpg"} alt="avatar" />}
              />
              <div>
                <p> #Apt0001</p>
                <p>Adrian Marshall</p>
              </div>
            </Col>
            <Col >
              <p>11 Nov 2024 10.45 AM</p>
              <span className='bg-emerald-500 px-2 py-1 rounded-lg'>General</span>
            </Col>
            <Col className='flex gap-2'>
              <CheckCircleOutlined className='text-2xl text-green-500' />
              <CloseCircleOutlined className='text-2xl text-red-500' />
            </Col>
          </Row>
          <Row className='flex justify-between items-center mt-5'>
            <Col className='flex items-center gap-3'>
            <Avatar
                shape='square'
                size={55}
                src={<img src={"/profile-02.jpg"} alt="avatar" />}
              />
              <div>
                <p> #Apt0001</p>
                <p>Adrian Marshall</p>
              </div>
            </Col>
            <Col >
              <p>11 Nov 2024 10.45 AM</p>
              <span className='bg-emerald-500 px-2 py-1 rounded-lg'>General</span>
            </Col>
            <Col className='flex gap-2'>
              <CheckCircleOutlined className='text-2xl text-green-500' />
              <CloseCircleOutlined className='text-2xl text-red-500' />
            </Col>
          </Row>
        </Card>
      </Col>

    </Row>
    </>
  )
}

export default Dashbaord
