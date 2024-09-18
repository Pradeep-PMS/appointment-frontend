"use client";
import {
  AppstoreFilled,
  CalendarOutlined,
  LogoutOutlined,

  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Menu, MenuProps, Rate, Row } from "antd";
import { useRouter } from "next/navigation";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "/doctor/dashboard",
    label: "Dashboard ",
    icon: <AppstoreFilled />,
  },
  {
    key: "/doctor/appointment",
    label: "Appointment",
    icon: <CalendarOutlined />,
  },
  {
    key: "logout",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];
const DashboardPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e.key);
    router.push(e.key);
  };
  return (
    <Row className="mt-10  gap-5" justify="center">
      <Col xs={24} md={6}>
        <div className="sticky top-28">
          <Card className="relative z-1" styles={{ body: { padding: 0 } }}>
            <div className="h-32 bg-[var(--theme-color)] bg-sky-400 "></div>
            <div className=" text-center mx-auto leading-10 font-bold absolute top-[30%] left-[32%] ">
              <Avatar
                size={120}
                src={<img src={"/drimg.jpg"} alt="avatar" />}
              />
            </div>
            <div className=" mx-auto font-bold mt-20 w-40 ">
              <p className="text-center">Dr Edalin panda</p>
              <p className="text-center">MBBS</p>
            </div>
          </Card>
          <Card className="font-semibold !mt-5" classNames={{ body: "!px-0" }}>
            <h1 className="text-2xl text-black px-5 my-5">Dashboard</h1>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={["/doctor/dashboard"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </Card>
        </div>
      </Col>
      <Col xs={24} md={16}>
        <Card>{children}</Card>
      </Col>
    </Row>
  );
};
export default DashboardPage;