export const navItems = [
	{ name: 'Главная', link: '#home' },
	{ name: 'Проекты', link: '#projects' },
	{ name: 'Отзывы', link: '#testimonials' },
	{ name: 'Тарифы', link: '#tariff' },
	{ name: 'Контакты', link: '#contact' },
]

export const gridItems = [
	{
		id: 1,
		title:
			'Расширение возможностей вашего бизнеса с помощью надежных и быстрых решений 🚀',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: 'Гибкий график для коммуникации',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'Наша stack',
		description: 'Мы постоянно работаем над улучшениями',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Индивидуальный подход к разработке',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Сейчас же можем приступить к разработке вашего проекта',
		description: 'Свяжитесь с нами',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Вы хотите начать проект с нами?',
		description: 'Копируйте email',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
]

export const projects = [
	{
		id: 1,
		title: 'Yakov & Partners',
		des: 'Стратегии новой реальности | Мы являемся средой, в которой люди получают лучшее развитие потенциала, решая самые важные и сложные задачи наших партнеров и клиентов и оказывая тем самым долгосрочное позитивное влияние на мир',
		img: '/yakov.png',
		iconLists: ['/next.svg', '/tail.svg', '/cloud.svg'],
		link: 'https://yakov.partners/',
	},
	{
		id: 2,
		title: 'Туры в Дагестан',
		des: 'Захватывающий тур по живописному Дагестану',
		img: '/dagestan.png',
		iconLists: ['/tilda.webp'],
		link: 'https://xn--80aaich3cvafjcl.xn--p1ai/',
	},
	{
		id: 3,
		title: 'DeFi Analytincs',
		des: 'TradFi Exposure to Digital Assets and Web3',
		img: '/defi.png',
		iconLists: ['/next.svg', '/tail.svg', '/re.svg'],
		link: 'https://defi.tech/',
	},
	{
		id: 4,
		title: 'Unisdent54',
		des: 'Комфортное лечение и протезирование зубов в Новосибирске с гарантией',
		img: '/unisdent.png',
		iconLists: ['/wp.svg.png', '/php.svg'],
		link: 'https://unisdent54.ru/',
	},
]

export const testimonials = [
	{
		quote:
			'Сайт был сделан оперативно профессионалами своего дело. Руководитель команды Ходжиакбар на связи 24/7, вопросов нет, все четко и по делу. Будем также работать в будущем',
		name: 'Ерасыл Мутаев',
		img: '/male-user.svg',
		title: 'CEO of CAPedu',
	},
	{
		quote:
			'Ребяты уминицы далгое время с ними сотрудничаем и будем в будущем, опаративно и качественно.',
		name: 'Анастасия Анфермова',
		img: '/female-user.svg',
		title: 'Digital Manager of APEC ASIA',
	},
	{
		quote:
			'Спасибо команде Fetch Group быстро и качествено, повысили конверсию сайта и оптимизацию. Уважают решения заказчика и предлагают профессиональные решения!',
		name: 'Ангела Менк',
		img: '/female-user2.svg',
		title: 'SMM manager of Yakov & Partners ',
	},
	{
		quote:
			'Вместе с этой командой разработчиков интегрировали ИИ машину, которая самостоятельно ведет разговор. Было разработано супер быстро и своевременно, будем дальше сотрудничать',
		name: 'Александр Зугер',
		img: '/man-user.svg',
		title: 'Project Manager of Defi by Valour Inc',
	},
]

// export const companies = [
// 	{
// 		id: 1,
// 		name: 'cloudinary',
// 		img: '/cloud.svg',
// 		nameImg: '/cloudName.svg',
// 	},
// 	{
// 		id: 2,
// 		name: 'appwrite',
// 		img: '/app.svg',
// 		nameImg: '/appName.svg',
// 	},
// 	{
// 		id: 3,
// 		name: 'HOSTINGER',
// 		img: '/host.svg',
// 		nameImg: '/hostName.svg',
// 	},
// 	{
// 		id: 4,
// 		name: 'stream',
// 		img: '/s.svg',
// 		nameImg: '/streamName.svg',
// 	},
// 	{
// 		id: 5,
// 		name: 'docker.',
// 		img: '/dock.svg',
// 		nameImg: '/dockerName.svg',
// 	},
// ]

export const workExperience = [
	{
		id: 1,
		title: 'Frontend Development',
		desc: 'Помогаем в разработке веб-платформ с использованием React.js и других современных технологий, повышающей интерактивность.',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 2,
		title: 'SEO оптимизация',
		desc: 'Разрабатываем ПО которая повысит конверсию вашего проекта. На всех поисковых машинах!',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg',
	},
	{
		id: 3,
		title: 'Реализация ваших идей',
		desc: 'Мы тщательно изучаем ваши предложения, сочетая стратегию и технологии стремимся превратить ваши стремления в захватывающую цифровую реальность.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg',
	},
	{
		id: 4,
		title: 'Backend Development',
		desc: 'Разрабатываем и поддерживаем базы данных, используя современные технологии. Также создаем машины которые автоматизируют ваш бизнес',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
]

export const socialMedia = [
	{
		id: 1,
		img: '/telegram.svg',
		link: 'https://t.me/fetch_group',
	},
	{
		id: 2,
		img: '/instagram.svg',
		link: 'https://www.instagram.com/fetch_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
	},
	{
		id: 3,
		img: '/whatsapp.svg',
		link: 'https://wa.me/909763097',
	},
]
