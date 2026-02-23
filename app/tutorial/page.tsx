"use client";;
export default function Tuto() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="my-12 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-8">
          <p className="text-xl text-center md:text-left">
            Welcome to <span className="font-bold text-[#1fa6a6]">AM Academy</span>, your gateway to a world of knowledge and learning. 
            We are dedicated to providing high-quality educational resources and courses to help you achieve your academic and professional goals. 
            Whether you're a <span className="font-bold text-[#1fa6a6]">student</span> looking to <span className="font-bold text-[#1fa6a6]">enhance your skills</span> or a <span className="font-bold text-[#1fa6a6]">professional seeking</span> to <span className="font-bold text-[#1fa6a6]">expand your expertise</span>, 
            <span className="font-bold text-[#1fa6a6]"> AM Academy</span> has something for everyone. 
            Join us on this exciting journey of discovery and growth!
            <br />
            To help you get started, we’ve prepared a step-by-step 
            <span className="font-bold text-[#1fa6a6]"> video tutorial</span> 
            explaining how to use the application.
            <br />
            You can find the YouTube tutorial right below this section 👇
          </p>
          <div className="flex flex-row m-4">
            <div className="flex flex-col hover:text-[#1fa6a6] transition-colors duration-300 m-4 justify-center items-center">
              <p className="text-5xl font-bold text-center md:text-left">+50</p>
              <p className="text-3xl text-center ml-4 md:text-left">Teacher</p>
            </div>
            <div className="flex flex-col hover:text-[#1fa6a6] transition-colors duration-300 m-4 justify-center items-center">
              <p className="text-5xl font-bold text-center md:text-left">+100</p>
              <p className="text-3xl text-center ml-4 md:text-left">Courses</p>
            </div>
            <div className="flex hover:text-[#1fa6a6] transition-colors duration-300 flex-col m-4 justify-center items-center">
              <p className="text-5xl font-bold text-center md:text-left">+2K</p>
              <p className="text-3xl text-center ml-4 md:text-left">Students</p>
            </div>
          </div>
        </div>
        <iframe 
            src="https://www.youtube.com/embed/2mRAC-OdKIo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full justify-center h-64 md:h-150 rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
}
