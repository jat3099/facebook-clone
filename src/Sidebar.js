import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/545403_10152155961110508_106312793_n.jpg?_nc_cat=102&ccb=2&_nc_sid=de6eea&_nc_ohc=ULrp7NSdMqcAX-zuQ7P&_nc_ht=scontent.fmia1-1.fna&oh=d2d096d7507be85f4aa7401aa5b48763&oe=602715EC' title='Augusto R. Almeida' />
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title='pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
            
            
        </div>
    )
}

export default Sidebar
