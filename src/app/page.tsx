import Image from "next/image";
import Logo from "../../public/template.png"
import { Header } from "./Components/Header";
import { BlogView } from "./Components/BlogView";
import { Footer1 } from "./Components/Footer1";
import Footer from "./Components/Footer";
export default function Home() {
  return (
      <div>
      <Header/>
      <BlogView/>
      <Footer1/>
      <Footer/>

      </div>
  );
}
