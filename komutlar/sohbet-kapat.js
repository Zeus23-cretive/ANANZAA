const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "⛧ Goddêss","⛧ Gôd");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: true,
    MANAGE_CHANNELS: false,
    MANAGE_PERMISSIONS: false,
    MANAGE_WEBHOOKS: false,
    CREATE_INSTANT_INVITE: false,
    EMBED_LINKS: false,
    ATTACH_FILES: false,
    ADD_REACTIONS: false,
    USE_EXTERNAL_EMOJI: false,
    MENTION_EVERYONE: false,
    READ_MESSAGE_HISTORY: true,
    SEND_TTS_MESSAGES: false,
    USE_SLASH_COMMANDS: false
  });

  message.channel.send("Sohbet kanalı ``Yazılamaz`` durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi yazılamaz yapar.",
  usage: "kapat"
};