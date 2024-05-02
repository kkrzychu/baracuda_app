import { landingSewing } from '../../assets'

const Home_5_section = () => {
    return (
        <div className="flex justify-center sm:px-40 px-6 py-16">
          <div className="w-[100%] max-w-[1280px] ">
    
            <section id="home_2_1" className={`flex flex-row w-[100%] items-center`}>
    
              <div className="w-[40%] relative">
                <img src={landingSewing} className='rounded-xl absolute top-[-270px]' />
              </div>
    
              <div className="flex flex-col w-[100%] p-10">
    
                <h1 className="text-5xl text-white pb-10 font-bold">A company with experience</h1>
    
                <p className="pb-10 text-white  text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    
                <button className='bg-indigo-600 w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>More</button>
    
              </div>
    
            </section>
    
          </div>
        </div>
      )
}

export default Home_5_section