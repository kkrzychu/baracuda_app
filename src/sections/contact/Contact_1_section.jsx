import styles, { layout } from "../../style";
import { centerVariants } from "../../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from "react-google-recaptcha";

const Contact_1_section = () => {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(navigator.language);
		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, []);

	const form = useRef();
	// const onChange = (value) => {
	// 	console.log("Captcha value:", value);
	// }

	const notify_Success = () => toast.success(t("email_response_success"));
	const notify_error = () => toast.error(t("email_response_error"));

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_cy32o7d", "template_sdnss2m", form.current, {
				publicKey: "9E86wxKnquWFcNPtY",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					notify_Success();
				},
				(error) => {
					console.log("FAILED...", error.text);
					notify_error();
				}
			);
		e.target.reset();
	};

	return (
		<motion.section id='contact_1' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.1 }} className={layout.section}>
			<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>{t("ask_for_an_offer_h")}</h2>

				<p className={`${styles.paragraph} text-white mt-5`}>{t("ask_for_an_offer")}</p>
			</motion.div>

			<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				{/* EMAIL INPUT */}

				<form ref={form} onSubmit={sendEmail} className='w-full flex flex-col items-center'>
					<div className='w-full max-w-[450px] mt-10 md:mt-0'>
						<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900  text-white'>
							{t("label_email")}
						</label>
					</div>
					<div className='flex w-full max-w-[450px] rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
						<input type='email' name='user_email' id='email' required autoComplete='email' className='block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded' placeholder='example@gmail.com' />
					</div>
					{/* TEXT INPUT */}
					<div className='w-full max-w-[450px] mt-4'>
						<label htmlFor='message' className='block text-sm font-medium leading-6 text-gray-900 text-white'>
							{t("label_message")}
						</label>
					</div>
					<textarea
						id='message'
						name='user_message'
						rows={8}
						required
						className='block w-full max-w-[450px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-1.5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						defaultValue={""}
						placeholder={t("textarea_placeholder")}
					/>
					{/* <ReCAPTCHA sitekey="6Ld4JfspAAAAAFnHImThW6GmkFmi7Vgeroebi6yX" onChange={onChange} /> */}
					<div className='w-full max-w-[450px] mt-5 mb-10 md:mb-0'>
						<button type='submit' className={`bg-indigo-600 text-white font-poppins font-medium text-[18px] py-2 px-6 rounded-xl w-full`}>
							{t("label_submit_button")}
						</button>
					</div>
					<ToastContainer />
				</form>
			</motion.div>
		</motion.section>
	);
};

export default Contact_1_section;
