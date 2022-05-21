/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        Prefix: "!",
        Token: "OTc3MjU4NTcxNzEwNDcyMjQy.Gj01lK.FfZpenYYvcR2pTMh9Ak3-30mzaJH3IViVstBBU",
        Owners: ["889363583249563658", "759849727189057567"],
        OtherBots: ["955162523609485365", "976629671884099634","977258571710472242"],
        VoiceChannel: "976140150448980003",
        Activity: "LISTENING",
        Status: "idle",
        MongoURL: "mongodb+srv://rencia:Vahap2020@cluster0.jxyds.mongodb.net/?retryWrites=true&w=majority",
        Footer: "Adelicia 💚 Rencia",
        DisableCooldownsForAdmins: true,

    };

    //Activity Messages
    client.statusMessages = [

        "Adelicia 💚 Rencia",
        "Adelicia 💚 Rencia",
        "Adelicia 💚 Rencia"

    ];

    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'arrow', emojiUrl: 'https://cdn.discordapp.com/emojis/821298641863442442.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'mark2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641429146140684.png?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'cross2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641452227264522.png?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' },

        ///Status
        { emojiName: 'online', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950275698692.png?v=1' },
        { emojiName: 'dnd', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950355390545.png?v=1' },
        { emojiName: 'idle', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950069915667.png?v=1' },
        { emojiName: 'offline', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950686609420.png?v=1' },
        { emojiName: 'web', emojiUrl: 'https://cdn.discordapp.com/emojis/825429354707288065.png?v=1' },

        ///Penal
        { emojiName: 'banned', emojiUrl: 'https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1' },
        { emojiName: 'jailed', emojiUrl: 'https://cdn.discordapp.com/emojis/878303820181024788.png?v=1' },
        { emojiName: 'chatMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/878303318743609384.png?v=1' },
        { emojiName: 'warned', emojiUrl: 'https://cdn.discordapp.com/emojis/826369282942042112.png?v=1' },

        ///Voice
        { emojiName: 'joined', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545977794560.gif?v=1' },   
        { emojiName: 'leaved', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545168293968.gif?v=1' },
        { emojiName: 'unMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450633564271.png?v=1' },
        { emojiName: 'muted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710451086524416.png?v=1' },
        { emojiName: 'unDeafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450243502091.png?v=1' },
        { emojiName: 'deafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450138619915.png?v=1' },
        { emojiName: 'camera', emojiUrl: 'https://cdn.discordapp.com/emojis/839043294717542400.png?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

        ///General
        guildID: "976140150448979999",
        guildTags: ["∞"],
        guildDiscriminator: "976501923656110090",
        guildTeams: ["976501923656110090"],
        meetRole: "976501923656110090",
        meetChannel: "976162122998370324",
        nameTag: "∞",
        dmMessages: true,
        unAuthorizedMessages: true,

        ///Staffs
        staffRoles: ["976166614741426206"],
        transporterSpears: ["977225067496865822"],
        registerSpears: ["976512278012776458"],
        staffGiver: "",
        botYt: "977260760210243669",

        ///Penals
        penals: {

            ///Ban
            ban: {
                staffs: [],
                penalPoint: 40,
                penalLimit: 5,
                log: "",
                banGifs: ['https://media1.tenor.com/images/ed33599ac8db8867ee23bae29b20b0ec/tenor.gif?itemid=14760307', 'https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif', 'https://media1.tenor.com/images/4732faf454006e370fa9ec6e53dbf040/tenor.gif?itemid=14678194'],
                unbanGifs: ['https://data.whicdn.com/images/192611812/original.gif'],
            },

            ///Jail
            jail: {
                staffs: ["977122507687591937"],
                jailRoles: ["976500722055131196"],
                jailChannel: "977516294834364446",
                penalPoint: 30,
                penalLimit: 5,
                log: "977488415773851678",
            },

            ///Chat Mute
            chatMute: {
                staffs: ["977224912777379880","976166614741426206"],
                cmuteRoles: ["977225761545146479"],
                penalPoint: 20,
                penalLimit: 5,
                log: "977488439672975382",
            },

            ///Voice Mute
            voiceMute: {
                staffs: ["977224912777379880","976166614741426206"],
                vmuteRoles: ["977482875186343976"],
                penalPoint: 20,
                penalLimit: 5,
                log: "977488463651831878",
            },

            ///Warn
            warn: {
                staffs: [],
                warnRoles: [{
                    warnCount: 1,
                    warnRole: "977519892410564640", 
                }, {
                    warnCount: 2,
                    warnRole: "977520043590053938",
                }, {
                    warnCount: 3,
                    warnRole: "977520047742418944",
                }],
                penalPoint: 10,
                log: "977488761757794314",
            },

        },

        ///Registration
        registration: {
            unregisterName: "∞ İsim | Yaş",
            unregisterRoles: ["976369189117902918"],
            unregisterChannel: "976924172095750144",
            quarantineRole: "976500482086424656",
            familyRole: "976501923656110090",
        },

        ///Forbidden Tag
        forbiddenTag: {
            forbidRoles: ["977489605219737631"],
            forbidChannel: "977516421774991391",
            forbidLog: "977488761757794314",
        },

        ///Logs
        logs: {
            pointLog: "977523513340612688",
            voiceLog: "977523305420562433",
            messageLog: "977523264173797386",
            securityLog: "977523463445164052",
        },

    };

};