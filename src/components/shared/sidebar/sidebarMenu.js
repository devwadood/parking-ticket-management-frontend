import { DashboardOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

export const menu=[
    {
        key:1,
        url:"/",
        icon:<DashboardOutlined/>,
        title:"Dashboard"
    },
    {
        key:2,
        url:"/profile",
        icon:<UserOutlined/>,
        title:"Profile"
    },
    {
        key:3,
        url:"/logout",
        icon:<LogoutOutlined/>,
        title:"Logout"
    }
]