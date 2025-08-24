const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBVbkNFQTVCL215K2dNekxYM2lYckUva2wwcmltRG1Ec3hUOThTVURWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMG1FL3YwN3V1TVlXMnVuT0pjeVdMUGt2N1owbjR6Wjl4djR5MEh0S1BHQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSjVQaktkYUFhcGxlNDk5QytnR01tQTVxWnVYbHJPRkFMdUlBTytyZFZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyall4NlBDSWw5RTRXZ1VVU0lYMmxYQnBVaXR0M1ZpNmRIb0lFd1d0encwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBQ3VYSVB1bWh1UndGVkgxZENJTS9kMFdDRlBuQWhWTUVWU3dSYnl1WE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktmYkVyMnRIVnluQ1c2c2ZIQlBia3RxVmxUR3ppQXIxMnYyMFRXWmtmVk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFoclR4UjhZNzlMdkEzb2l1aHFzbzdOUGJoUjBXcldidGlkSDYxcURVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekl6QzlVSGFkbTE5TG80d0pQZGMrNkk0YXB1YlhwdEJuWUUrcEtVRmtubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRRZHZ5bXRFZElxRHlXN0lMSU8zMElYejZiWDF0b0piQVlGZStIeS9MclFML3U4ZE0xb1FZVW5DQnNyWHI0aDkxUHJBbHJIMUU1RWNOdUJoUFo3U0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IlRjNm1vTEV0OS9TbDJUNk9FQVJLdGpGOG9vMzVjaktaQlJ0L0s5Qm9sVjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTE4MzA2MTgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIyRThBRTYwRUU4MzUwMzRGNjY5QjYxNTNEMzc1RUI0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwMjI2MDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTExODMwNjE4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNzdDQTZDNzg3Mzc1QTREMTRCQTZCQkVENUI5MTZFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDIyNjA5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxMTgzMDYxODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTE1REJGN0NEM0I0MzAzMDU4QTRFMjIzQzQyODg0QUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjAyMjYxMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUVk1TVAzTjgiLCJtZSI6eyJpZCI6Ijk4OTExODMwNjE4MzoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQ0Njg5NTI5Mzg1MjEwOjFAbGlkIiwibmFtZSI6IvCdmbLwnZqY8J2ajfCdmo7wnZqbIPCdn7vwnZ+78J2fvPCdn7oifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01EZThmUUdFTXlPcThVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNYT1hwcjRrYXVZQzQ2eTBPTWd0Nm92ZDB3WXdUeU9WaHM3b3IvSW9pZ0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkE5YzJuR1duZ09hNE45M0NoQTlEU3RXTnlKYVBSeXhHUkVXajVKdVlvQ3hWL1B6S05wS3JyV0svK1dldXBVSitWOUEvRkwyNW5OWU1kZzc2MWtYcUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmNUFSNS9RZnRRLzBNZEVYekVaYmdnZ1d0emtBWVBuL2ZiOUIvcVNnTWhtQll6RHhXNjM0azNObytvOXNJSm95U2VKd0RmZ2tGSEJUYklUUlRjRXZEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk4OTExODMwNjE4MzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJGemw2YStKR3JtQXVPc3REaklMZXFMM2RNR01FOGpsWWJPNksveUtJb0IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjAyMjYwNywibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHQVEifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*χ нαѕι*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ χ нαѕι ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
