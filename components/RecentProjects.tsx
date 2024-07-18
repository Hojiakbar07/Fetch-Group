'use client'

import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa6'
import { PinContainer } from './ui/Pin'

const RecentProjects = () => {
	return (
		<div className='py-20' id='projects'>
			<h1 className='heading'>
				Не большая подборка{' '}
				<span className='text-purple'>последних проектов</span>
			</h1>
			<div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
				{projects.map(({ id, title, des, img, iconLists, link }) => (
					<div
						className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
						key={id}
					>
						<PinContainer title={title} href={link}>
							<div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
								<div
									className='relative w-full h-full overflow-hidden lg:rounded-3xl'
									style={{ backgroundColor: '#13162D' }}
								>
									<img src='/bg.png' alt='bgimg' />
								</div>
								<img src={img} alt='cover' className='z-10 absolute bottom-0' />
							</div>
							<a href={link}>
								<h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
									{title}
								</h1>
							</a>
							<a
								href={link}
								className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
								style={{
									color: '#BEC1DD',
									margin: '1vh 0',
								}}
							>
								{des}
							</a>

							<div className='flex items-center justify-between mt-7 mb-3'>
								<div className='flex items-center'>
									{iconLists.map((icon, index) => (
										<div
											key={index}
											className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
											<img src={icon} alt='icon5' className='p-2' />
										</div>
									))}
								</div>

								<div className='flex justify-center items-center'>
									<a
										className='flex lg:text-xl md:text-xs text-sm text-purple'
										href={link}
									>
										Посмотреть на сайт
									</a>
									<FaLocationArrow className='ms-3' color='#CBACF9' />
								</div>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecentProjects
