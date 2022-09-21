import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Button, IconButton } from "@mui/material";

import {
  AccessTime,
  CreateOutlined,
  Duo,
  ExpandMore,
  Inbox,
  InsertDriveFileOutlined,
  LabelImportant,
  Person,
  Phone,
  SendOutlined,
  StarOutline,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateOutlined fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={StarOutline} title="Starred" number={54} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={SendOutlined} title="Sent" number={54} />
      <SidebarOption
        Icon={InsertDriveFileOutlined}
        title="Drafts"
        number={54}
      />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
