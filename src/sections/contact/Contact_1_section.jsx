import styles, { layout } from "../../style";

const Contact_1_section = () => {
	return (
		<section id='contact_1' className={layout.section}>
			<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>Ask for an offer</h2>

				<p className={`${styles.paragraph} text-white mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at arcu purus. Suspendisse elementum faucibus diam, quis viverra urna laoreet mattis. Praesent vel pellentesque tortor.</p>
			</div>

			<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				{/* EMAIL INPUT */}

				<div className='w-full max-w-[450px] mt-10 md:mt-0'>
					<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900  text-white'>
						Email
					</label>
				</div>

				<div className='flex w-full max-w-[450px] rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
					<input type='email' name='email' id='email' autoComplete='email' className='block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded' placeholder='example@gmail.com' />
				</div>

				{/* TEXT INPUT */}
				<div className='w-full max-w-[450px] mt-4'>
					<label htmlFor='message' className='block text-sm font-medium leading-6 text-gray-900 text-white'>
						Message
					</label>
				</div>

				<textarea
					id='message'
					name='message'
					rows={8}
					className='block w-full max-w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-1.5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					defaultValue={""}
					placeholder='I would like to ask about...'
				/>

				{/* SUBMIT BUTTON*/}
				<div className='w-full max-w-[450px] mt-5 mb-10 md:mb-0'>
					<button className={`bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full`}>SUBMIT</button>
				</div>
			</div>
		</section>
	);
};

export default Contact_1_section;
