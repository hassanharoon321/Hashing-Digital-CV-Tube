import NavBar from "./components/Navbar";
import Cover from "./components/Cover";
import ProfileCounter from "./components/ProfileCounter";
import RecentJobs from "./components/RecentJobs";
import CvTubeAd from "./components/CvTubeAd";
import FooterTube from "./components/FooterTube";

function App() {
  return (
    <div>
      <NavBar />
      <Cover />
      <ProfileCounter />
      <RecentJobs />
      <CvTubeAd />
      <FooterTube />
    </div>
  );
}

export default App;
