import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*\n\n
*instagram:*\ninstagram.com/abdsamad___75

*youtube:*\nyoutube.com/

*facebook page:*\n

*script bot :* github.com/Abdsamaad/Silana

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
