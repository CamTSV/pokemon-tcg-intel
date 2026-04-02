const fetch = require('node-fetch');
const WEBHOOK_URL = process.env.DISCORD_WEBHOOK;
module.exports = function sendDiscordAlert(message) {
  if(!WEBHOOK_URL) return;
  fetch(WEBHOOK_URL,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({content: message})
  }).catch(console.error);
};