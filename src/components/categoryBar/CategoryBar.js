import React, { useState } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';
// Icon
import './categoryBar.scss';
import { useDispatch } from 'react-redux';
// Actions
import { getVideosByCategory, getPopularVideos } from 'redux/actions/video';
const items = [
	{ name: 'All' },
	{ name: 'Football' },
	{ name: 'Cartoon' },
	{ name: 'Music' },
	{ name: 'Live' },
	{ name: 'Redux' },
	{ name: 'ReactJs' },
	{ name: 'Clash of Clan' },
	{ name: 'JavaScript' },
	{ name: 'Algorithms' },
	{ name: 'Champion League' },
	{ name: 'Highlight films' },
	{ name: 'Computer files' },
	{ name: 'Comedy' },
	{ name: 'Real Madrid CF' },
	{ name: 'Training' },
	{ name: 'Traffic' },
	{ name: 'Redux Toolkit' },
	{ name: 'NodeJS' },
	{ name: 'MongoDB' },
];

const MenuItem = ({ text, selected }) => {
	return (
		<div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>
	);
};

const Menu = (list, selected) =>
	list.map((el) => {
		const { name } = el;
		return <MenuItem text={name} key={name} selected={selected} />;
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const CategoryBar = () => {
	const [activeItem, setActiveItem] = useState('All');
	const menuItems = Menu(items, activeItem);

	const dispatch = useDispatch();
	const handleSelected = (key) => {
		setActiveItem(key);
		if (key === 'All') {
			dispatch(getPopularVideos());
		} else {
			dispatch(getVideosByCategory(key));
		}
	};

	return (
		<>
			<ScrollMenu
				alignCenter={true}
				arrowLeft={ArrowLeft}
				arrowRight={ArrowRight}
				clickWhenDrag={false}
				data={menuItems}
				dragging={true}
				hideArrows={true}
				hideSingleArrow={true}
				onSelect={handleSelected}
				scrollToSelected={false}
				selected={activeItem}
				ref={(el) => (el = menuItems)}
				transition={+0.5}
				translate={6}
				wheel={true}
			/>
			{/* {items.map((item, index) => (
				<span
					key={index}
					onClick={() => handleActiveItem(item)}
					className={item === activeItem ? 'active' : ''}>
					{item}
				</span>
			))} */}
		</>
	);
};

export default CategoryBar;
