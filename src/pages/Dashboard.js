import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header";
import OurServices from "../components/OurServices/OurServices";

function Dashboard() {
  return (
    <>
      <div>
        <Header />
        <OurServices />
        <div className="bg-dark p-5 mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
