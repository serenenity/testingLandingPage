import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-primaryGreenColor md:py-[64px] md:px-[105px] text-primaryWhiteColor ">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between ">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            {/* First column content */}
            <Image
              className="center"
              src="/images/codePlay72-about_logo.png"
              alt="Logo"
              width={100}
              height={100}
            ></Image>

            <p className="py-6">...endless possibilities for every child</p>
            <div className="flex">
              <Image
                className="mr-5"
                src="/images/facebook_logo.png"
                alt="Logo"
                width={20}
                height={20}
              ></Image>
              <Image
                className="mr-5"
                src="/images/instagram_logo.png"
                alt="Logo"
                width={20}
                height={20}
              ></Image>
              <Image
                className="mr-5"
                src="/images/linkedin_logo.png"
                alt="Logo"
                width={20}
                height={20}
              ></Image>
              <Image
                className="mr-5"
                src="/images/twitter_logo.png"
                alt="Logo"
                width={20}
                height={20}
              ></Image>
            </div>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            {/* Second column content */}
            <h3 className="text-white font-bold text-lg">Our Courses</h3>
            <ul className="mt-4">
              <li className="pb-3">
                <Link href="/about" className=" hover:text-white">
                  Storytelling
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/services" className=" hover:text-white">
                  Digital Animation
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact" className=" hover:text-white">
                  Arts and Design Thinking
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact" className=" hover:text-white">
                  Computer Programming
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact" className=" hover:text-white">
                  Game Design
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact" className=" hover:text-white">
                  Website Design
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact" className=" hover:text-white">
                  App Development
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact" className=" hover:text-white">
                  Robotics
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-white">
                  Artificial Intelligence(AI)
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            {/* Third column content */}
            <h3 className="text-white font-bold text-lg ">Our Programs</h3>
            <ul className="mt-4">
              <li className="pb-3">
                <Link href="/about" className=" hover:text-white">
                  Remote classes
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/services" className=" hover:text-white">
                  After-school classes
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact" className=" hover:text-white">
                  Weekend code clubs
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-white">
                  Holiday creative code camps
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
