
import OwnerAvatar from '../../assets/ownerAvatar.png'

const About_3_section = () => {
  return (
    <div className="abot_section_3 flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

            <section id="about_3" className=" flex flex-row justify-center items-center w-[100%]  py-20">

              <div className="flex flex-col w-[100%] pt-20">

                <div className="flex flex-row w-[100%]">

                  <div className=" flex justify-center items-center w-[100%] max-h-[400px]">
                      <img className='rounded h-[100%] object-contain' src={OwnerAvatar} />
                  </div>

                  <div className=" flex flex-col  w-[100%] text-white">

                    <h1 className='font-bold text-3xl mb-6'>Company Owner</h1>

                    <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor vitae felis non eleifend. Pellentesque metus libero, placerat vel varius sodales, sollicitudin ut turpis. Fusce id leo condimentum, elementum ante vel, faucibus odio. Morbi condimentum lacinia libero. Maecenas laoreet convallis urna in egestas. In id diam bibendum, efficitur massa et, convallis neque.</p>
                    <p className='mb-6'>The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.</p>

                  </div>

                </div>

                <div className='flex flex-col w-[100%] text-white py-20'>

                  <p className='mb-6'>
                    Morbi condimentum lacinia libero. Maecenas laoreet convallis urna in egestas. In id diam bibendum, efficitur massa et, convallis neque. Donec commodo blandit orci nec posuere. Quisque urna leo, congue at mauris varius, dignissim pellentesque nunc. Nunc fermentum nisl lorem, a aliquam nisl mollis vel. Curabitur ut tellus non augue tincidunt vestibulum nec id nibh. Proin congue ac urna quis maximus. In vulputate magna sit amet mattis euismod. Nullam tincidunt gravida tortor, in semper magna egestas nec. Nulla luctus elit dui, at rutrum arcu congue a.
                  </p>

                  <p>
                    Morbi condimentum lacinia libero. Maecenas laoreet convallis urna in egestas. In id diam bibendum, efficitur massa et, convallis neque. Donec commodo blandit orci nec posuere. Quisque urna leo, congue at mauris varius, dignissim pellentesque nunc. Nunc fermentum nisl lorem, a aliquam nisl mollis vel. Curabitur ut tellus non augue tincidunt vestibulum nec id nibh. Proin congue ac urna quis maximus. In vulputate magna sit amet mattis euismod. Nullam tincidunt gravida tortor, in semper magna egestas nec. Nulla luctus elit dui, at rutrum arcu congue a.
                  </p>

                </div>

              </div>

            </section>

        </div>
    </div>
  )
}

export default About_3_section