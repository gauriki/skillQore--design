import { Header } from "./header";
import { ImageCard } from "./imageCard";
import { InfoCard } from "./infoCard";
import { Section } from "./section";

export function Main() {
  return (
    <main className="mx-auto container h-fit relative min-h-screen py-4 ">
      <Header />
      <ImageCard />
      <img
        src="images/girl.png"
        alt=""
        className=" hidden md:flex  absolute h-[30rem] left-[64%] top-[6rem] z-10 "
      />
      <div className=" grid grid-cols-2 md:grid md:grid-cols-4 gap-8 px-8 pt-24 bg-white">
        <InfoCard
          images="images/online.svg"
          description="Search for thousands of online courses and other learning content."
        />
        <InfoCard
          images="images/books.svg"
          description="Join for free. Specify Topics and skills in a few easy steps and start learning."
        />
        <InfoCard
          images="images/ml.png"
          description="Skillqore’s AI curates high quality and contextual content for you."
        />
        <InfoCard
          images="images/videos.svg"
          description="Track your learning, contribute content and share with others."
        />
      </div>
      <Section />
    </main>
  );
}
