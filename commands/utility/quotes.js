module.exports = {
name: "quotes",
code: `
$author[1;$replaceText[**Random quote**;*;];$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**┏━━━━━━━━━━━━━━┓
$jsonRequest[https://api.popcat.xyz/quote;quote;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:<:TT_mhn:942529955332513812> **An error occured**}}]
┗━━━━━━━━━━━━━━━┛**]


`
}