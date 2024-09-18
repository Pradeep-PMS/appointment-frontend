"use client"
import { DownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Dropdown, Flex, Input, MenuProps, Row, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
const items: MenuProps['items'] = [
    {
        label: 'Dash board',
        key: '0',
      },
      {
        label: 'Appointment',
        key: '1',
      },
];


const Header = () => {
    const router = useRouter();
    return (
        <div>
            <Row justify={'space-around'} className='mt-5 p-5 items-center bg-black text-white' >
                <Col className='text-2xl font-bold'>
                    Pradeep
                </Col>
                <Col>
                    <Flex className='flex gap-5'>
                        <Col>Home</Col>
                        <Col>  <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Doctor
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        </Col>
                        <Col span={2}>  <Dropdown menu={{ items }}>
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
                            <Link href={"/signin"}><Button type="primary" >Sign in</Button></Link>
                        </div>
                        <div>
                            <Button type="primary" onClick={()=>router.push("/signup")} >Sign up</Button>
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
