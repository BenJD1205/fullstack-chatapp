import React from 'react'
import { Box, Stack } from '@mui/material';
import { Chat_History } from '../../data';
import { Timeline , TextMsg, MediaMsg, ReplyMsg, LinkMsg, DosMsg} from './MsgTypes';

const Message = ({menu}) => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((item) => {
                switch (item.type) {
                    case "divider":
                        return <Timeline el={item} />;
                    case "msg":
                        switch (item.subtype) {
                            case "img":
                                return <MediaMsg el={item} menu={menu} />
                            case "doc":
                                return <DosMsg el={item} menu={menu} />
                            case "link":
                                return <LinkMsg el={item} menu={menu} />
                            case "reply":
                                return <ReplyMsg el={item} menu={menu} />
                            default:
                                return <TextMsg el={item} menu={menu} />
                        }
                    default:
                        break;
                }    
            })}
        </Stack>
    </Box>
  )
}

export default Message