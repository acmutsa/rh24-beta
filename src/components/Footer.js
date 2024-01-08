"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
  const [showResources, setShowResources] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showHackathons, setShowHackathons] = useState(false);

  return (
    <div className="relative z-[100]">
      <div className="hidden border-t-[1px] border-t-gray-500 bg-black lg:block">
        <div className="mx-auto grid max-w-[1200px] grid-cols-5 bg-transparent md:p-10">
          <div className="col-span-2 flex items-center justify-start ">
            {/* <div className="w-full flex items-start flex-col justify-start h-full">
							<div className="flex flex-col items-center">
								<h1 className="font-sans font-black text-xl text-white">
									RowdyHacks <span className="text-[#7D9037]">2023</span>
								</h1>
								<h2 className="font-bebas text-9xl leading-none text-white">heist</h2>
							</div>
						</div> */}
            <div className="flex h-full items-center justify-center">
              <div>
                <Image
                  src={"/img/logo.png"}
                  height={120}
                  width={120}
                  alt="RowdyHacks 2024 Logo"
                ></Image>
              </div>
              <div className="relative">
                <div className="font-oswald absolute -translate-x-[0.20rem] translate-y-[0.10rem]">
                  <h2 className="text-md m-0 pl-1 font-bold italic text-[#A88567]">
                    A LAND BEFORE
                  </h2>
                  <h1 className="m-0 select-none text-5xl font-bold leading-[0.95] text-[#A88567]">
                    RowdyHacks
                  </h1>
                </div>
                <div className="font-oswald relative">
                  <h2 className="text-md m-0 pl-1 font-bold text-[#FEF2E6] opacity-0">
                    A LAND BEFORE
                  </h2>
                  <h1 className="m-0 text-5xl font-bold leading-[0.95] text-[#FEF2E6]">
                    RowdyHacks
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-sans text-gray-400">
            <h2 className="!text-md text-white">Resources</h2>
            <Link href={"/auth"} className="text-sm hover:underline">
              Register
            </Link>
            <Link href={"/faq"} className="text-sm hover:underline">
              FAQ
            </Link>
            <Link
              href={"https://mlh.io/code-of-conduct"}
              className="text-sm hover:underline"
            >
              Code of Conduct
            </Link>
            <Link href={"/contact"} className="text-sm hover:underline">
              Contact Us
            </Link>
            <Link
              href={"https://acmutsa.org/suborg_acmw/"}
              className="text-sm hover:underline"
            >
              ACM-W
            </Link>
            <Link
              href={"https://acmutsa.org/"}
              className="text-sm hover:underline"
            >
              ACM UTSA
            </Link>
          </div>
          <div className="flex flex-col font-sans text-gray-400">
            <h2 className="!text-md text-white">Links</h2>
            <Link
              href={"https://github.com/acmutsa/CodeQuantum2023"}
              className="text-sm hover:underline"
            >
              Open Source
            </Link>
            <Link
              href={
                "https://github.com/UTSA-ACM/RowdyHacks23/blob/develop/contributions.md"
              }
              className="text-sm text-amber-300 hover:underline"
            >
              Contributions
            </Link>
          </div>
          <div className="flex flex-col font-sans text-gray-400">
            <h2 className="!text-md text-white">Other Hackathons</h2>
            <Link
              href={"https://cqhacks.org/"}
              className="text-sm hover:underline"
            >
              CodeQuantum
            </Link>
            <Link
              href={"https://rowdydatathon.org/"}
              className="text-sm hover:underline"
            >
              RowdyDatathon
            </Link>
            <Link
              href={"https://tamuhack.com/"}
              className="text-sm hover:underline"
            >
              TAMUhack
            </Link>
            <Link
              href={"https://wehackutd.com/"}
              className="text-sm hover:underline"
            >
              WEHack
            </Link>
            <Link
              href={"https://hackutd.co/"}
              className="text-sm hover:underline"
            >
              HackUTD
            </Link>
            <Link
              href={"https://hacktx.com/"}
              className="text-sm hover:underline"
            >
              HackTX
            </Link>
            <Link
              href={"https://unthackathon.com/#/"}
              className="text-sm hover:underline"
            >
              HackUNT
            </Link>
            <Link
              href={"https://hackuta.org/"}
              className="text-sm hover:underline"
            >
              HackUTA
            </Link>
            <Link
              href={"https://hacklahoma.org/"}
              className="text-sm hover:underline"
            >
              Hacklahoma
            </Link>
          </div>
          <div className="col-span-5 h-10"></div>
          <div className="col-span-1 flex h-[44px] w-[212px] justify-center">
            <a href="https://vercel.com/?utm_source=ACM%20UTSA&utm_campaign=oss">
              <img
                className="h-[44px] w-[212px] invert"
                src="https://static.rowdyhacks.org/img/powered-by-vercel.svg"
              />
            </a>
          </div>
          <div className="col-span-3 flex items-center justify-center font-sans text-xs text-white">
            <p className="text-center">
              Made with &lt;/&gt; & ♥ @ RowdyHacks
              <br />© RowdyHacks & Association of Computing Machinery at UTSA
              2024. All Rights Reserved.
            </p>
          </div>
          <div className="flex h-[44px] w-full max-w-[212px] items-center justify-end">
            <div className="flex h-[44px] w-[212px] items-center justify-evenly rounded-lg bg-white p-[5px] text-xl text-gray-900">
              <a href="https://twitter.com/cqhacks" className="mr-2">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/cqhacks/" className="mx-2">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/UTSA.ACM" className="mx-2">
                <FaFacebook />
              </a>
              <a href="https://github.com/acmutsa" className="mx-2">
                <FaGithub />
              </a>
              <a href="https://go.cqhacks.org/discord" className="ml-2">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid min-h-[350px] grid-cols-2 border-t-[1px] border-t-gray-500 bg-black py-5 lg:hidden">
        <div className="col-span-2 md:col-span-1">
          <div className="flex h-full items-center justify-center">
            <div>
              <Image
                src={"/img/logo.png"}
                height={120}
                width={120}
                alt="RowdyHacks 2024 Logo"
              ></Image>
            </div>
            <div className="relative">
              <div className="font-oswald absolute -translate-x-[0.20rem] translate-y-[0.10rem]">
                <h2 className="text-md m-0 pl-1 font-bold italic text-[#A88567]">
                  A LAND BEFORE
                </h2>
                <h1 className="m-0 select-none text-5xl font-bold leading-[0.95] text-[#A88567]">
                  RowdyHacks
                </h1>
              </div>
              <div className="font-oswald relative">
                <h2 className="text-md m-0 pl-1 font-bold text-[#FEF2E6] opacity-0">
                  A LAND BEFORE
                </h2>
                <h1 className="m-0 text-5xl font-bold leading-[0.95] text-[#FEF2E6]">
                  RowdyHacks
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center px-10 py-10 md:col-span-1 md:py-0">
          <div className="flex flex-col border-b-[1px] border-gray-600 py-[5px] font-sans text-gray-400 hover:cursor-pointer">
            <h2
              onClick={() => setShowResources(!showResources)}
              className="!text-md text-white"
            >
              Resources
            </h2>
            {showResources ? (
              <div className="flex flex-col">
                <Link href={"/auth"} className="text-sm hover:underline">
                  Register
                </Link>
                <Link href={"/faq"} className="text-sm hover:underline">
                  FAQ
                </Link>
                <Link
                  href={"https://mlh.io/code-of-conduct"}
                  className="text-sm hover:underline"
                >
                  Code of Conduct
                </Link>
                <Link href={"/contact"} className="text-sm hover:underline">
                  Contact Us
                </Link>
                <Link
                  href={"https://acmutsa.org/suborg_acmw/"}
                  className="text-sm hover:underline"
                >
                  ACM-W
                </Link>
                <Link
                  href={"https://acmutsa.org/"}
                  className="text-sm hover:underline"
                >
                  ACM UTSA
                </Link>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-600 py-[5px] font-sans text-gray-400 hover:cursor-pointer">
            <h2
              className="!text-md text-white"
              onClick={() => setShowLinks(!showLinks)}
            >
              Links
            </h2>
            {showLinks ? (
              <div className="flex flex-col">
                <Link
                  href={"https://github.com/acmutsa/CodeQuantum2023"}
                  className="text-sm hover:underline"
                >
                  Open Source
                </Link>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col border-gray-600 py-[5px] font-sans text-gray-400 hover:cursor-pointer">
            <h2
              onClick={() => setShowHackathons(!showHackathons)}
              className="!text-md text-white"
            >
              Other Hackathons
            </h2>
            {showHackathons ? (
              <div className="flex flex-col">
                <Link
                  href={"https://cqhacks.org/"}
                  className="text-sm hover:underline"
                >
                  CodeQuantum
                </Link>
                <Link
                  href={"https://rowdydatathon.org/"}
                  className="text-sm hover:underline"
                >
                  RowdyDatathon
                </Link>
                <Link
                  href={"https://tamuhack.com/"}
                  className="text-sm hover:underline"
                >
                  TAMUhack
                </Link>
                <Link
                  href={"https://wehackutd.com/"}
                  className="text-sm hover:underline"
                >
                  WEHack
                </Link>
                <Link
                  href={"https://hackutd.co/"}
                  className="text-sm hover:underline"
                >
                  HackUTD
                </Link>
                <Link
                  href={"https://hacktx.com/"}
                  className="text-sm hover:underline"
                >
                  HackTX
                </Link>
                <Link
                  href={"https://unthackathon.com/#/"}
                  className="text-sm hover:underline"
                >
                  HackUNT
                </Link>
                <Link
                  href={"https://hackuta.org/"}
                  className="text-sm hover:underline"
                >
                  HackUTA
                </Link>
                <Link
                  href={"https://hacklahoma.org/"}
                  className="text-sm hover:underline"
                >
                  Hacklahoma
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div className="flex h-full min-h-[44px] w-full items-center justify-center">
            <a href="https://vercel.com/?utm_source=ACM%20UTSA&utm_campaign=oss">
              <img
                className="h-[44px] w-[212px] invert"
                src="https://static.rowdyhacks.org/img/powered-by-vercel.svg"
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 mt-10 sm:col-span-1 sm:mt-0">
          <div className="flex h-full min-h-[44px] w-full min-w-[212px] items-center justify-center">
            <div className="flex h-[44px] w-[212px] items-center justify-evenly rounded-lg bg-white p-[5px] text-xl text-gray-900">
              <a href="https://twitter.com/cqhacks" className="mr-2">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/cqhacks/" className="mx-2">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/UTSA.ACM" className="mx-2">
                <FaFacebook />
              </a>
              <a href="https://github.com/acmutsa" className="mx-2">
                <FaGithub />
              </a>
              <a href="https://go.cqhacks.org/discord" className="ml-2">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center font-sans text-xs text-white">
          <p className="pt-10 text-center md:py-0">
            Made with &lt;/&gt; & ♥ @ RowdyHacks
            <br />© RowdyHacks & Association of Computing Machinery at UTSA{" "}
            {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
