import React from 'react';
import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
	return(
		<Container>
			<ServerButton isHome />

			<Separator />

			<ServerButton hasNotifications mentions={10} />
			<ServerButton hasNotifications mentions={1}/>
			<ServerButton />
			<ServerButton hasNotifications mentions={2} />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton hasNotifications mentions={34} />
			<ServerButton />
			<ServerButton />
		</Container>
	);
};

export default ServerList;