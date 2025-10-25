import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  const getCV = () => {
    window.open(
      'https://drive.google.com/file/d/1v9cr6n5wyl0DbSIBLZWM6bZf-sYhYfyY/view?usp=sharing',
      '_blank',
      'noopener,noreferrer'
    );
  };
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I am <strong>SARO Sereyvichea</strong> (also known as <strong>Vichea</strong>), an ICT student with a
            passion for web development. Currently pursuing my degree in Information and Communication Technology, I
            have gained hands-on experience in building dynamic web applications using technologies like Next.js, React,
            and Laravel. As a <strong>Full Stack Developer</strong>, I specialize in creating modern, responsive web
            solutions that deliver exceptional user experiences.
          </p>
          <Button className="mt-5" onClick={getCV}>
            Download CV
          </Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend</h6>
              {/* <p>85%</p> */}
            </div>
            <ProgressBar color="blue" progress={85} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend</h6>
              {/* <p>95%</p> */}
            </div>
            <ProgressBar color="amber" progress={70} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Database</h6>
              {/* <p>75%</p> */}
            </div>
            <ProgressBar color="rose" progress={75} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">DevOps</h6>
              {/* <p>90%</p> */}
            </div>
            <ProgressBar color="green" progress={70} />
          </div>
        </div>
      </div>

      {/* Overview */}
      {/* <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">30+</h2>
            <p className="mt-1">Cup of Coffee</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="mt-1">Satisfied clients</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutSection;
