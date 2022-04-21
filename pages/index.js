import Banner from "../components/banner";
import Header from "../components/header";
import SideNav from "../components/sidNav";
export default function Home() {
  return (
    <div className="bg-[#111827] min-h-screen ">
      <Header />
      <div className="flex container ">
      <SideNav/>
      <Banner/>
      </div>
    </div>
  )
}
