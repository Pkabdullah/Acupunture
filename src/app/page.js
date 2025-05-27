import SwiperCarousel from "@/components/carousel";
import News from "@/components/News";
import OurServices from "@/components/OurServices";
import Process from "@/components/Process";
import Testonomials from "@/components/Testonomials";
import WWD from "@/components/WWD";



export default function Home() {
  return (
    <main className="">
    <SwiperCarousel/>
    <OurServices/>
    <WWD/>
    <Testonomials/>
    <Process/>
    <News/>
    
    </main>
  );
}
