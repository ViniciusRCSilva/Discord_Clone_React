import React from 'react';
import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
	return (
		<Container>
			<Category>
				<span>Canais de texto</span>
				<AddCategoryIcon />
			</Category>

			<ChannelButton channelName="chat-livre" />
			<ChannelButton channelName="HTML" />
			<ChannelButton channelName="CSS" />
			<ChannelButton channelName="JavaScript" />
			<ChannelButton channelName="C/C++" />
			<ChannelButton channelName="Java" />
			<ChannelButton channelName="PHP" />
		</Container>
	);
};

export default ChannelList;