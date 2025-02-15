import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import logo from "@/assets/images/logo-white.png"
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { LiaBlogSolid } from "react-icons/lia";
import { RiUserSharedLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa";
import { GoDot } from "react-icons/go";

const Links = [
    {
        title: "Home",
        icons: IoHomeOutline,
        route: ""
    }
    ,
    {
        title: "categories",
        icons: TbCategory2,
        route: ""
    }
    ,
    {
        title: "Blogs",
        icons: LiaBlogSolid,
        route: ""
    }
    ,
    {
        title: "users",
        icons: RiUserSharedLine,
        route: ""
    }
    ,
    {
        title: "comments",
        icons: FaRegComments,
        route: ""
    }

]

const categories=[
    {
        title:"Category1",
        route: "",
        icons:GoDot
    }
    ,
    {
        title:"Category1",
        route: "",
        icons:GoDot
    }
    ,
    {
        title:"Category1",
        route: "",
        icons:GoDot
    },
    {
        title:"Category1",
        route: "",
        icons:GoDot
    }
]
const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader className=" bg-white ">
                <img src={logo} alt="Logo" width={120} />

            </SidebarHeader>
            <SidebarContent className=" bg-white ">
                <SidebarGroup>
                    <SidebarMenuItem>
                        {
                            Links.map((link, i) => {
                                return (
                                    <SidebarMenuButton key={i}>
                                        <link.icons />
                                        <Link to={link.route}>{link.title}</Link>
                                    </SidebarMenuButton>
                                )
                            })
                        }
                    </SidebarMenuItem>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel> Categories </SidebarGroupLabel>
                    <SidebarMenuItem>
                        {
                            categories.map((link, i) => {
                                return (
                                    <SidebarMenuButton key={i}>
                                        <link.icons />
                                        <Link to={link.route}>{link.title}</Link>
                                    </SidebarMenuButton>
                                )
                            })
                        }
                    </SidebarMenuItem>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar