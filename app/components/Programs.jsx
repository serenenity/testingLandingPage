import Image from "next/image";
const Programs = () => {
  return (
    <section className="bg-primaryBlueColor">
      <div className="flex gap-[80px] py-[64px] pl-[107px] pr-[66px]">
        <div className="py-[216px] ">
          <h1 className="font-bold text-[40px] text-primaryGreenColor">
            Program Playground
          </h1>
          <p>All learning paths are accessible through several programs </p>
        </div>
        <div className="grid grid-cols-2 gap-[80px]">
          <div className="w-[337px] h-[354px] flex flex-col px-[28px] py-[22px] items-start shadow-custom rounded-[8px] bg-primaryWhiteColor">
            <Image
              src="/images/online-education.png"
              alt="Logo"
              width={50}
              height={50}
              className="mb-[32px]"
            />
            <h1 className="w-[269px] text-[20px] pb-[16px] font-bold">
              Private Playground
            </h1>
            <p>
              All learning paths can be accessed by our students through a
              one-on-one coaching session for the duration of the course.
            </p>
          </div>
          <div className="w-[337px] h-[354px] flex flex-col px-[28px] py-[22px] items-start shadow-custom rounded-[8px] bg-primaryWhiteColor">
            <Image
              src="/images/student.png"
              alt="Logo"
              width={50}
              height={50}
              className="mb-[32px]"
            />
            <h1 className="w-[269px] text-[20px] pb-[16px] font-bold">
              Home Playground
            </h1>
            <p>
              This playground is design specially for homeschooling, for parents
              who love to create a small community of creative children in their
              neigbourhood.
            </p>
          </div>
          <div className="w-[337px] h-[354px] flex flex-col px-[28px] py-[22px] items-start shadow-custom rounded-[8px] bg-primaryWhiteColor">
            <Image
              src="/images/internet.png"
              alt="Logo"
              width={50}
              height={50}
              className="mb-[32px]"
            />
            <h1 className="w-[269px] text-[20px] pb-[16px] font-bold">
              Digital Clubs
            </h1>
            <p>
              We partner with innovation hubs globally to bring engaging digital
              playgrounds to their community.
            </p>
          </div>
          <div className="w-[337px] h-[354px] flex flex-col px-[28px] py-[22px] items-start shadow-custom rounded-[8px] bg-primaryWhiteColor">
            <Image
              src="/images/programmer.png"
              alt="Logo"
              width={50}
              height={50}
              className="mb-[32px]"
            />
            <h1 className="w-[269px] text-[20px] pb-[16px] font-bold">
              Digital Schools Playground
            </h1>
            <p>
              Schools and districts can access our digital playground during
              school sessions. We provide seamless integrations with school
              curriculum for all student at any grade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
