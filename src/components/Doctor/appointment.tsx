"use client"
import { CheckCircleOutlined, EyeOutlined, WechatOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, GetProps, Input, Row } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
const Appointment = () => {
  return (<>
    <Row justify={'space-between'}>
      <Col className='text-2xl font-bold'>Appointments</Col>
      <Col>
        <Search placeholder="input search text" />
      </Col>
    </Row>
    <hr className='mt-5 mb-5' />
    <Row gutter={16}>
      <Col>
        <Button type="primary" className='rounded-lg py-4 font-bold text-md'>Upcoming <span className='bg-white text-black px-2 rounded-lg'>21</span></Button>
      </Col>
      <Col>
        <Button className='rounded-lg py-4 font-bold text-md'>Upcoming <span className='bg-white text-black px-2 rounded-lg'>16</span></Button>
      </Col>
      <Col>
        <Button className='rounded-lg py-4 font-bold text-md'>Upcoming <span className='bg-white text-black px-2 rounded-lg'>214</span></Button>
      </Col>
    </Row>

    <div className="mt-5 flex justify-between items-center hover:bg-green-100 p-4 rounded-lg">
      <div className="flex items-center gap-x-3">
        <Avatar shape="square" size={70} src="/drimg.jpg" />
        <div className="font-medium">
          <span>#2465655</span>
          <h1 className="text-xl">Amit</h1>
        </div>
      </div>

      <div className="text-nowrap font-medium">
        <p className="">11 nov 2024 10.20 AM</p>
        <p className="  ">General Visit | Audio Coll</p>
      </div>
      <div className="font-medium">
        <p className="">kiya@sk.com</p>
        +1212 3223 3232
      </div>
      <div className="flex gap-3 text-2xl ">
        <EyeOutlined />
        <WechatOutlined />
        <CheckCircleOutlined />
      </div>
      <a href="#" className='underline text-lg font-medium '>Start Now</a>
    </div>

    <div className="flex justify-between items-center hover:bg-green-100 p-4 rounded-lg">
      <div className="flex items-center gap-x-3">
        <Avatar shape="square" size={70} src="/drimg.jpg" />
        <div className="font-medium">
          <span>#2465655</span>
          <h1 className="text-xl">Amit</h1>
        </div>
      </div>

      <div className="text-nowrap font-medium">
        <p className="">11 nov 2024 10.20 AM</p>
        <p className="  ">General Visit | Audio Coll</p>
      </div>
      <div className="font-medium">
        <p className="">kiya@sk.com</p>
        +1212 3223 3232
      </div>
      <div className="flex gap-3 text-2xl ">
        <EyeOutlined />
        <WechatOutlined />
        <CheckCircleOutlined />
      </div>
      <a href="#" className='underline text-lg font-medium '>Start Now</a>
    </div>

    <div className=" flex justify-between items-center hover:bg-green-100 p-4 rounded-lg">
      <div className="flex items-center gap-x-3">
        <Avatar shape="square" size={70} src="/drimg.jpg" />
        <div className="font-medium">
          <span>#2465655</span>
          <h1 className="text-xl">Amit</h1>
        </div>
      </div>

      <div className="text-nowrap font-medium">
        <p className="">11 nov 2024 10.20 AM</p>
        <p className="  ">General Visit | Audio Coll</p>
      </div>
      <div className="font-medium">
        <p className="">kiya@sk.com</p>
        +1212 3223 3232
      </div>
      <div className="flex gap-3 text-2xl ">
        <EyeOutlined />
        <WechatOutlined />
        <CheckCircleOutlined />
      </div>
      <a href="#" className='underline text-lg font-medium '>Start Now</a>
    </div>

    <div className=" flex justify-between items-center hover:bg-green-100 p-4 rounded-lg">
      <div className="flex items-center gap-x-3">
        <Avatar shape="square" size={70} src="/drimg.jpg" />
        <div className="font-medium">
          <span>#2465655</span>
          <h1 className="text-xl">Amit</h1>
        </div>
      </div>

      <div className="text-nowrap font-medium">
        <p className="">11 nov 2024 10.20 AM</p>
        <p className="  ">General Visit | Audio Coll</p>
      </div>
      <div className="font-medium">
        <p className="">kiya@sk.com</p>
        +1212 3223 3232
      </div>
      <div className="flex gap-3 text-2xl ">
        <EyeOutlined />
        <WechatOutlined />
        <CheckCircleOutlined />
      </div>
      <a href="#" className='underline text-lg font-medium '>Start Now</a>
    </div>

  </>

  )
}

export default Appointment
