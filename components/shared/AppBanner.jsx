import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { useState } from 'react';

function AppBanner() {
	const [activeTheme] = useThemeSwitcher();
	const [cvLang, setCvLang] = useState('en');

	const cvFiles = {
		en: 'https://drive.google.com/file/d/1UgsVl75rVIM2trPqnjovJ8uv6QWjJjDR/view?usp=drive_link',
		pt: 'https://drive.google.com/file/d/1NlMlmCzGodhooDNfvDnO6_NEmqrO1L9O/view?usp=drive_link',
	};

	// Texto do botão com base no idioma
	const buttonText = cvLang === 'en' ? 'View CV' : 'Ver CV';

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, I am Mahomed Akil
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Full-Stack Developer & Data Science Enthusiast
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex flex-col items-center sm:block mt-8" 
				>
					<div className="mb-6">
						<select
							value={cvLang}
							onChange={(e) => setCvLang(e.target.value)}
							className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 w-56" 
						>
							<option value="en">English</option>
							<option value="pt">Português</option>
						</select>
					</div>

					<a
						href={cvFiles[cvLang]}
						target="_blank"
						rel="noopener noreferrer"
						className="font-general-medium flex justify-center items-center w-56 sm:w-64 text-lg border border-indigo-200 dark:border-ternary-dark py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download CV"
					>
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
						<span className="text-sm sm:text-lg duration-100">
							{buttonText} 
						</span>
					</a>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					layout="responsive"
					src={
						activeTheme === 'dark'
							? '/images/developer.svg'
							: '/images/developer-dark.svg'
					}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
