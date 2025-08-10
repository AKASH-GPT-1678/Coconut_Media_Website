
import { Header } from "./Components/Header";
import { BlogView } from "./Components/BlogView";
import { Footer1 } from "./Components/Footer1";
import Footer from "./Components/Footer";
import { KnowAboutUs } from "./Components/KnowAboutUs";
import Visionpart from "./Components/Visionpart";
import Infopart from "./Components/Infopart";
export default function Home() {
  return (
    <div>
      <Header />

      <KnowAboutUs />
      {/* <div className="mt-[-20]"> */}
      <Infopart />




      <BlogView />
      <Footer1 />
      <Footer />

    </div>
  );
}
