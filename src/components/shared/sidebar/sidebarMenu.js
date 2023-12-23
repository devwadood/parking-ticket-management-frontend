import { CarryOutOutlined, DashboardOutlined, LogoutOutlined, QrcodeOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";

export const menu=[
    {
        key:1,
        url:"/",
        icon:<DashboardOutlined/>,
        title:"Dashboard"
    },
    {
        key:2,
        url:"/all-tickets",
        icon:<UnorderedListOutlined />,
        title:"All Ticket"
    },
    {
        key:3,
        url:"/generate-ticket",
        icon:<QrcodeOutlined />,
        title:"Generate Ticket"
    },
    {
        key:4,
        url:"/receive-ticket",
        icon:<CarryOutOutlined />,
        title:"Confirm Ticket"
    },
    {
        key:5,
        url:"/profile",
        icon:<UserOutlined/>,
        title:"Profile"
    },
    {
        key:6,
        url:"/logout",
        icon:<LogoutOutlined/>,
        title:"Logout"
    }
]