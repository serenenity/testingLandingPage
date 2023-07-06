import Image from "next/image";
const Learn = () => {
  return (
    <>
      <section className="">
        <div className="py-[116px] ">
          <div className="flex justify-between px-[64px] pb-[48px] ">
            <Image
              src="/images/reading_logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <h1 className="text-[40px] font-mulish-700 font-bold text-primaryGreenColor">
              Learn better with code
              <span className="text-primaryRedColor">P</span>lay72
            </h1>
            <Image
              src="/images/shooting-star_logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </div>
          <div className="flex justify-between px-[64px]">
            <div className="w-[360px] h-[360px] flex flex-col items-center px-[46px] py-[49px] shadow-custom rounded-[8px] bg-primaryWhiteColor">
              <Image
                src="/images/meeting_logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mb-[32px]"
              />
              <h1 className="w-[269px] text-[20px] pb-[16px] font-bold text-primaryGreenColor">
                Communicate with a Coach
              </h1>
              <p>
                Realtime weekly communication with a coach to discuss challenges
                and ask questions{" "}
              </p>
            </div>
            <div className=" w-[360px] h-[360px] flex flex-col items-center px-[46px] py-[49px] shadow-custom rounded-[8px] bg-primaryGreenColor">
              <Image
                src="/images/computer_logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mb-[32px]"
              />
              <h1 className="w-[269px] text-[20px] pb-[16px] font-bold text-primaryYellowColor">
                Continuous Learning for Every Child
              </h1>
              <p className="text-primaryWhiteColor">
                Gamify continuous learning platform for every child
              </p>
            </div>
            <div className="w-[360px] h-[360px] flex flex-col items-center px-[46px] py-[49px] shadow-custom rounded-[8px] bg-primaryWhiteColor">
              <Image
                src="/images/team_logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mb-[32px]"
              />
              <h1 className="w-[269px] text-[20px] pb-[16px] font-bold text-primaryGreenColor">
                Connect with an Expert
              </h1>
              <p>We connect every child to a lifetime practising expert</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;
