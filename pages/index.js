import { useState } from "react";
import Banner from "../components/banner";
import Header from "../components/header";
// import SideNavLeft from "../components/sideNavLeft";
import SideNav from "../components/sidNav";
export default function Home() {
  // const [model,setModel]=useState(false);
  return (
    <div className="bg-[#111827] min-h-screen ">
      <Header  />
      <div className="flex container ">
        <SideNav />
        <Banner />
      </div>
      {/* <SideNavLeft model={model}/> */}
    </div>
  )
}
