
const Contact_1_section = () => {
  return (
    <div className="bg-black flex justify-center sm:px-40 px-6">
      <div className=" max-w-[1280px]">

        <section id="contact_1" className={`flex flex-row justify-center gap-x-20 sm:py-24 py-6 items-center bg-black w-[100%]  max-h-196`}>

          <div className="w-[45%]">
            <h1 className="text-4xl font-bold text-white">Ask for an offer</h1>

            <div className="p-2"></div>

            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              arcu purus. Suspendisse elementum faucibus diam, quis viverra urna
              laoreet mattis. Praesent vel pellentesque tortor.
            </p>
          </div>

          <div className="w-[45%]">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              {/* EMAIL INPUT */}
              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900  text-white">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">

                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT INPUT */}
              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900 text-white">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-1.5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    placeholder="I would like to ask about..."
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON*/}
              <div className="col-span-full">
                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full`}>SUBMIT</button>
              </div>


            </div>
          </div>

        </section>

      </div>
    </div>
  )
}

export default Contact_1_section