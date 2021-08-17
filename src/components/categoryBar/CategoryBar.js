import React, { useState } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';
// Icon
import './categoryBar.scss';
const items = [
	'All',
	'Football',
	'Cartoon',
	'Music',
	'Live',
	'Redux',
	'ReactJs',
	'Clash of Clan',
	'JavaScript',
	'Algorithms',
	'Comedies',
	'Highlight films',
	'Computer files',
	'Lionel Messi',
	'Real Madrid CF',
	'Training',
	'Traffic',
	'Redux Toolkit',
	'NodeJS',
	'MongoDB',
];

const MenuItem = ({ text, selected }) => {
	return (
		<div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>
	);
};

const Menu = (list, selected) =>
	list.map((el, index) => {
		return <MenuItem text={el} key={index} selected={selected} />;
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const CategoryBar = () => {
	const [activeItem, setActiveItem] = useState('All');
	const menuItems = Menu(items, activeItem);
	const handleSelected = (key) => {
		setActiveItem(key);
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
