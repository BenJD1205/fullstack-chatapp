import React from 'react'
import { Stack, Box} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import { styled } from '@mui/material/styles';

const MessageContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	flexGrow: 1,
	overflowY: 'scroll',
	overflowX:'hidden',
	scrollbarWidth: 'thin',
	height: '100%',
	scrollBehavior:'smooth'
}));


const Converstation = () => {
  return (
	<Stack height='100%' maxHeight='100vh' width='auto'>
		  {/* Chat header */}
		  <Header />
		  <MessageContainer>
			<Message menu={true} />
		  </MessageContainer>
		  {/* Chat footer */}
		  <Footer />
	</Stack>
  )
}

export default Converstation