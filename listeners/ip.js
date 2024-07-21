require('module-alias/register');

const { getValue } = require("function/function");
const { setIp } = require("function/setIp");

module.exports = (function() {
    return function(bot) {
        bot.onText(/^\/setip/i, async (msg) => {
            const chatId = msg.chat.id;
            const value = getValue(msg);

            await setIp(chatId, value, bot);
        });
    };
})();