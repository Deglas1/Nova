module.exports = {
name: "force-starboard",
$if: "v4",
aliases: ['fsb','forcestarboard'],
code: `
$title[1;**Starboard system**]
$color[1;$getServerVar[color]]
$image[1;$get[sb]]
$description[1;
<:reddot:953977080054415380> **Author: \`$usertag[$get[author]]\`**
<:reddot:953977080054415380> **Original Message: [Jump To Message!](https://discord.com/channels/$guildid/$message[1]/$message[2])**
<:reddot:953977080054415380> **Message: **$getmessage[$message[1];$message[2];content]
<:reddot:953977080054415380> **Stars: \`Bypassed\`**]

$let[sb;https://media.discordapp.net/attachments/953775397315686423/956675725824491641/sboard.JPG]
$let[author;$getMessage[$findChannel[$message[1];yes];$message[2];userID]]
$usechannel[$getservervar[schannel]]
$addcmdreactions[✅]
$onlyIf[$message[1]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#channel] [messageID]\`**}}]

$onlyIf[$message[2]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#channel] [messageID]\`**}}]

$onlyIf[$messageexists[$message[2]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Message id is invalid**}}]

$onlyIf[$channelexists[$findChannel[$message[1];yes]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Channel id is invalid**}}]

$onlyIf[$getServerVar[schannel]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Starboard channel has not been set yet**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}