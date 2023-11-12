import Image from "next/image";
export default function page() {
  return (
    <section className="bg-white h-screen text-black flex justify-center items-center">
      <div className="container bg-pink flex flex-row-reverse bg-purple-400 justify-center items-center w-auto p-12 gap-4 rounded-2xl">
        <div>
          <Image src="/signup.svg" alt="login" width={400} height={400} />
        </div>
        <div className="h-full ">
          <form className="flex flex-col gap-2">
            <h1 className="text-2xl text-center mb-3">SignUp</h1>
            <div>
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <div>
                <input
                  className="rounded-md px-3 py-2 focus:outline-none w-72"
                  type="text"
                  name=""
                  id="email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-lg  ">
                Password
              </label>
              <div>
                <input
                  className="rounded-md px-3 py-2 focus:outline-none  w-72"
                  type="password"
                  name=""
                  id="password"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cpassword" className="text-lg  ">
                Confirm Password
              </label>
              <div>
                <input
                  className="rounded-md px-3 py-2 focus:outline-none  w-72"
                  type="password"
                  name=""
                  id="cpassword"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact" className="text-lg  ">
                Contact
              </label>
              <div>
                <input
                  className="rounded-md px-3 py-2 focus:outline-none  w-72"
                  type="tel"
                  name=""
                  id="contact"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-6 ">
              <button className="  bg-white text-purple-300 border border-white-300 py-2 px-4 rounded-md w-28">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
