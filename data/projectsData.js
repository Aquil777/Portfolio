import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiGithub,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Digital Library',
		url: 'https://github.com/Aquil777/Biblioteca-Digital',
		category: 'Web Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Digital Library',
			publishDate: 'Jan 11, 2025',
			tags: 'UI / Fullstack',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Abdul Jr., Alexandre Jr.',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI / Fullstack',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: 'Unavailable',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'A web-based system that allows users to manage book loans, returns, and renewals with alerts for due dates',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'Bootstrap',
						'Figma',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'One of the main challenges in this project was handling user authentication and authorization. You need a secure way to manage logins, ensuring only authorized users can access or modify specific resources. This includes implementing role-based access control so that regular users, librarians, and admins have different permissions.',
				},
				{
					id: uuidv4(),
					details:
						'Security must always be a priority. Preventing SQL Injection, XSS, and CSRF attacks is crucial to avoid unauthorized access or data breaches. Password encryption and secure API calls are necessary to protect user data.',
				},
				{
					id: uuidv4(),
					details:
						'User interface and experience play a huge role in adoption. If the UI isn’t intuitive, users might struggle to find books or manage reservations. Therefore, a good UI/UX design is essential to ensure a positive user experience.',
				},
				{
					id: uuidv4(),
					details:
						'Database design and performance optimization are also critical. If the system isn’t well-structured, queries can become slow, especially as the number of books and users increases. Therefore, a well-designed database with appropriate indexes is necessary to optimize performance.',
				},
			],
			/* SocialSharingHeading: 'Share This', */
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Albaraka Grocery Store',
		url: '#',
		category: 'UI / UX Design / Frontend',
		img: '/images/syspdv.jpg',
		ProjectHeader: {
			title: 'Albaraka Grocery Store',
			publishDate: 'In development',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Albaraka Grocery Store',
				img: '/images/sistemapdv.png',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/stock.jpg',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/syspdv.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Albaraka',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'Unavailable',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: 'Unavailable',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Design and develop the frontend of a web-based POS and inventory management system tailored for a grocery store, ensuring an intuitive user experience, efficient sales processing, and streamlined stock control.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Figma',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'The system needs to accommodate non-tech-savvy users, like cashiers or store managers. Designing a clean, intuitive interface that minimizes clicks, speeds up the checkout process, and avoids errors is crucial for a smooth workflow — especially during peak hours.',
				},
				{
					id: uuidv4(),
					details:
						'The inventory system must reflect changes immediately after each sale, return, or stock adjustment. Delays in updates could lead to overselling products or inaccurate stock counts, causing disruptions in store operations. Ensuring seamless synchronization between the POS frontend and backend database is essential.',
				},
				{
					id: uuidv4(),
					details:
						'The system should handle large product databases, high transaction volumes, and multiple users without slowing down. Poor performance could frustrate customers and staff, leading to longer queues and potential revenue loss. Implementing efficient data fetching, caching, and load management is key.',
				},
				{
					id: uuidv4(),
					details:
						'Errors like barcode scanner failures, incorrect product entries, or payment issues need user-friendly error messages and quick recovery options. Additionally, if the internet goes down, the POS system should still allow transactions and sync data once reconnected — ensuring uninterrupted sales.',
				},
			],
			/* SocialSharingHeading: 'Share This', */
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: 'Spotify Clone',
		url: 'https://github.com/Aquil777/Spotify-Clone',
		category: 'Frontend',
		img: '/images/spotify-clone.png',
		ProjectHeader: {
			title: 'Spotify Clone',
			publishDate: 'Feb 14, 2025',
			tags: 'Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/spotify-clone.png',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/spotifyreact.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/spotify-responsive.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Personal Project',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/Aquil777/Spotify-Clone',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '877 937 188',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Deepen my understanding of React through hands-on development of a functional, real-world project.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React',
						'REST API',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Organizing components efficiently is crucial in React. Deciding which parts should be reusable, how to manage state between them, and ensuring the code stays clean and maintainable can be tricky — especially in larger projects.',
				},
				{
					id: uuidv4(),
					details:
						'Managing state across multiple components becomes complex as the app grows. Choosing between local state (useState), context (useContext), or more advanced tools like Redux can be challenging, particularly when ensuring data flows smoothly without unnecessary re-renders.',
				},
				{
					id: uuidv4(),
					details:
						'Fetching data from a self made API and handling errors, loading states, and performance optimization requires thoughtful design. Ensuring the UI remains responsive while waiting for data is another challenge that affects user experience.',
				},
				{
					id: uuidv4(),
					details:
						'Combining CSS with React to create a responsive, visually appealing interface can be a balancing act. Ensuring the design adapts seamlessly to different devices while maintaining a clean layout takes practice and iteration.',
				},
			],
			/* SocialSharingHeading: 'Share This', */
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'Puls3Gym',
		url: 'https://github.com/Aquil777/PulseGym',
		category: 'UI/UX Design/Frontend',
		img: '/images/Puls3GymIcon.jpg',
		ProjectHeader: {
			title: 'Puls3Gym',
			publishDate: 'Jan 26, 2025',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/Puls3GymIcon.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/gym.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/gymweb.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Personal Project',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/Aquil777/PulseGym',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '877 937 188',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Create a responsive and visually appealing design for the gym website, ensuring it looks great on all devices.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Boostrap',
						'Webflow',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Ensuring the website adjusts well to different screen sizes (desktop, tablet, mobile) can be complex, especially when balancing aesthetics and usability across devices. The challenge lies in making the design flexible while maintaining consistency and a smooth experience.',
				},
				{
					id: uuidv4(),
					details:
						'Creating a seamless booking system for classes, membership sign-ups, and personalized user accounts. Ensuring these features are intuitive and bug-free requires both backend and frontend integration.',
				},
				{
					id: uuidv4(),
					details:
						'The website needs to be fast, especially for media-heavy pages with images, videos, and schedules. Optimizing assets and implementing lazy loading is necessary to ensure smooth performance and a good user experience.',
				},
				{
					id: uuidv4(),
					details:
						'Keeping the gym’s content updated (e.g., class schedules, trainer info, promotions) can be time-consuming. ',
				},
			],
			/* SocialSharingHeading: 'Share This', */
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: 'Coming Soon',
		url: '#',
		category: 'Mobile Application',
		img: '/images/coming-soon.jpg',
		ProjectHeader: {
			title: 'Coming Soon',
			publishDate: 'No release date yet',
			tags: 'No information yet',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'WeTalk Social Application',
				img: '/images/coming-soon.jpg',
			},
			{
				id: uuidv4(),
				title: 'WeTalk Social Application',
				img: '/images/coming-soon.jpg',
			},
			{
				id: uuidv4(),
				title: 'WeTalk Social Application',
				img: '/images/coming-soon.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'No information yet',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'No information yet',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'No URL yet',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '877 937 188',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'No info yet',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'No info yet',
				},
				{
					id: uuidv4(),
					details:
						'',
				},
				{
					id: uuidv4(),
					details:
						'',
				},
				{
					id: uuidv4(),
					details:
						'',
				},
			],
			/* SocialSharingHeading: 'Share This', */
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/realstoman',
			// 	},
			// ],
		},
	},
	
];
