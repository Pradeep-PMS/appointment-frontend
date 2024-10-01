"use client"
import { DownOutlined, GlobalOutlined, HeartOutlined, QuestionCircleOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Dropdown, Flex, Input, MenuProps, Row, Space } from 'antd'
import Link from 'next/link'
import React from 'react'


const doctorItems: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: '0',
    },
    {
        label: 'Profile',
        key: '1',
    },
    {
        label: 'Salary',
        key: '2',
    },
    {
        label: 'Appointment',
        key: '3',
    },
];


const patientItems: MenuProps['items'] = [
    {
        label: 'Name',
        key: '0',
    },
    {
        label: 'Address',
        key: '1',
    },
];

const Header = () => {
    return (
        <div>
            <Row justify={'space-around'} className='mt-5 bg-white p-5 items-center'>
                <Col className='text-2xl font-bold'>
                    Pradeep
                </Col>
                <Col>
                    <Flex className='flex gap-5'>
                        <Col>Home</Col>
                        <Col>
                            <Dropdown menu={{ items: doctorItems }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Doctor
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={2}>
                            <Dropdown menu={{ items: patientItems }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Patient
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                    </Flex>
                </Col>
                <Col>
                    <Flex className=" gap-4 ">
                        <div>
                            <Link href={"/signin"}><Button type="primary">Sign in</Button></Link>
                        </div>
                        <div>
                            <Link href={"/signup"}><Button type="primary">Sign up</Button></Link>
                        </div>
                        <div style={{ fontSize: '25px' }}>
                            <ShoppingCartOutlined />
                        </div>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}

export default Header
