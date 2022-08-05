import Items from "../Items/Items";

import "./App.css";
import { Icon } from "@iconify/react";

const Main_page = () => {
  const items = [
    {
      name: "Sences",
      icon: <Icon icon="cil:window" />,
      path: " ",
    },
    {
      name: "Schedule",
      icon: <Icon icon="akar-icons:schedule" />,
      path: " ",
    },

    {
      name: "Devices",
      icon: <Icon icon="bx:devices" />,
      path: "/Devices",
    },

    {
      name: "Gateways",
      icon: <Icon icon="clarity:two-way-arrows-line" />,
      path: " ",
    },
    {
      name: "Users",
      icon: <Icon icon="ant-design:user-outlined" />,
      path: " ",
    },
    {
      name: "Debugging",
      icon: <Icon icon="akar-icons:bug" />,
      path: " ",
    },
    {
      name: "Firmware",
      icon: <Icon icon="ic:baseline-important-devices" />,
      path: " ",
    },
    {
      name: "Report",
      icon: <Icon icon="ic:baseline-report" />,
      path: "/Report",
    },
  ];

  return (
    <>
      <div className="sidenav">
        <div className="heading">
          <pre className="name"> Syed Talha Hassan</pre>

          <Icon className="icon1" icon="bx:edit-alt" />
        </div>
        <div className="item-align">
          {items.map((value, index) => (
            <Items
              key={index}
              iname={value.name}
              icon={value.icon}
              path={value.path}
            />
          ))}
        </div>

        <div className="logout">
          <Items
            iname="User Manual"
            icon={<Icon icon="arcticons:user-manual" />}
          />
          <Items iname="Logout" icon={<Icon icon="cil:account-logout" />} />
        </div>
        <hr />
        <p className="ver">version 1.0.0</p>
      </div>
    </>
  );
};

export default Main_page;
