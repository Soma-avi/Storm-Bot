const Discord = require("discord.js")
const generateImage = require("../generateImage")

const welcomeChannelId = "809123635922599937"

module.exports = {
    name:"memberJoin",
    run: async function runAll(bot, member) {
        const {client, prefix, owners} = bot

        const img = await generateImage(member)
        member.guild.channels.cache.get(welcomeChannelId).send({
            content: `<@${member.id}> Welcome to the server!`,
            files: [img]
        })
    }
}