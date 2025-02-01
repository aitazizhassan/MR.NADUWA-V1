const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MR-NADUWA=LMZUjLzA#tnfmuIjL6ImZ4RdI62ReQ9aNjIHpioAE5t6Q6FS5xBg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iclcf6.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "🤖𝗛𝗘𝗬 𝗜 𝗔𝗠 𝗠𝗥.𝗡𝗔𝗗𝗨𝗪𝗔-𝗩1 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🤖𝙳𝙴𝙿𝙻𝚈 𝙱𝚈 𝙼𝚁.𝙽𝙰𝙳𝚄𝚆𝙰☀",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
 AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
MODE: process.env.MODE || "private"

};
