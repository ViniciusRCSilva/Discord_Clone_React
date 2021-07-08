import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
	return (
		<Container>
			<Messages>
				<ChannelMessage 
				author='Ratsuicida' 
				date='08/07/2021' 
				content={<><Mention>@Music Bot</Mention>, tocar músicas para programar!</>}
				/>
				
				<ChannelMessage 
				author='Music Bot' 
				date='08/07/2021' 
				content={<><Mention>@Ratsuicida</Mention>, irei colocar umas músicas para você!</>} 
				hasMention 
				isBot 
				/>

				<ChannelMessage 
				author='User' 
				date='08/07/2021' 
				content='Preciso de ajuda para finalizar um projeto' 
				/>

				<ChannelMessage 
				author='User' 
				date='08/07/2021' 
				content='To dentro!' 
				/>

				<ChannelMessage 
				author='Ratsuicida' 
				date='08/07/2021' 
				content={<><Mention>@User</Mention> vou ajudar tbm!</>} 
				/>

				<ChannelMessage 
				author='User' 
				date='08/07/2021' 
				content='Simbora!' 
				/>	

				<ChannelMessage 
				author='User' 
				date='08/07/2021' 
				content={<><Mention>@Ratsuicida</Mention> vlw cara!</>}
				/>	
			</Messages>

			<InputWrapper>
				<Input type="text" placeholder="Conversar em #chat-livre" />
				<InputIcon />
			</InputWrapper>
		</Container>
	);
};

export default ChannelData;