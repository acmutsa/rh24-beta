import Image from "next/image";
import LetsGetRowdy from "@/components/LetsGetRowdy";

export default function About() {
  return (
    <section className="relative z-10 min-h-screen w-full bg-[#7D9037] px-5 py-20">
      <div className="mx-auto max-w-6xl pt-48">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2">
          <div className="flex flex-col gap-y-6">
            <h1 className="font-oswald text-center text-5xl font-bold italic text-[#FEF2E6] md:text-left lg:text-6xl">
              ABOUT US
            </h1>
            <p className="text-center font-mono text-lg font-bold text-[#FEF2E6] md:text-left">
              RowdyHacks is a free, weekend-long, overnight hackathon hosted at
              UTSA! Students can join us to network, code, collaborate, and
              compete. We welcome hackers from all disciplines, backgrounds, &
              technical levels!
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 z-20 h-full w-full bg-gradient-to-r from-[#7D9037]  via-transparent to-[#7D9037]"></div>
            <LetsGetRowdy />
          </div>
          <div>
            <Image
              src="/img/landing/dinos_coding.png"
              height={300}
              width={500}
              alt="Dinosaurs Coding Around A Table"
              className="mx-auto"
            ></Image>
          </div>
          <div className="flex flex-col justify-center gap-y-6">
            <h1 className="font-oswald text-center text-5xl font-bold italic text-[#FEF2E6] md:text-left lg:text-6xl">
              WHO CAN ATTEND?
            </h1>
            <p className="text-center font-mono text-lg font-bold text-[#FEF2E6] md:text-left">
              We're excited to welcome hackers from all disciplines,
              backgrounds, & technical levels! Whether you can't count the
              number of apps you've built, or you have never written a line of
              code before, RowdyHacks has something for everyone!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
