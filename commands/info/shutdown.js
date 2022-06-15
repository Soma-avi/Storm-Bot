module.exports = {
    name: "shutdown",
    category: "info",
    permissions: [],
    devOnly: true,
    run: async ({client, bot, message, args}) => {
        client.destroy(process.env.TOKEN)
    }
}