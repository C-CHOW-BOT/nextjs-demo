const DUMMY_EVETS = [
	{
		id: 'e1',
		title: 'Programming for everyone',
		description:
			'Learn the basics of programming in HTML, CSS, and JavaScript.',
		location: 'Somestreet 25, 12345 San Somewhereo',
		date: '2021-05-12',
		image: 'images/coding-event.jpg',   
		isFeatured: false,
	},
	{
		id: 'e2',
		title: 'Networking for introverts',
		description:
			"Let's face it, networking is hard when you're an introvert. Learn how to network like a pro and meet new friends.",
		location: 'New Wall Street 5, 98765 New Work',
		date: '2021-05-30',
		image: 'images/introvert-event.jpg',
		isFeatured: true,
	},
	{
		id: 'e3',
		title: 'Networking for extroverts',
		description:
			'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
		location: 'My Street 12, 10115 Broke City',
		date: '2022-04-10',
		image: 'images/extrovert-event.jpg',
		isFeatured: true,
	},
];

export function getFeaturedEvents() {
	return DUMMY_EVETS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVETS;
}

export function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVETS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export function getEventById(id) {
	return DUMMY_EVETS.find((event) => event.id === id);
}
