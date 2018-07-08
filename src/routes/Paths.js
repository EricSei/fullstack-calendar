import Sign from 'scenes/Sign';
import Home from 'scenes/Home'

const Paths =  [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/sign',
		component: Sign,
	}
]

export default Paths; 
