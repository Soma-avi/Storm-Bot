const Discord = require("discord.js")
module.exports = {
    name: "pinguser",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args, member}) => {
        message.reply({content: `<@${message.author.id}> pinged: ${args}`})
    }
}