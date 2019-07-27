const clientId = 'your_id';
const DiscordRPC = require('discord-rpc');

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
  rpc.setActivity({
    details: `your_details`,
    state: 'your_state',
    startTimestamp,
    largeImageKey: 'your_li_key',
    largeImageText: 'your_li_text',
    smallImageKey: 'your_si_key',
    smallImageText: 'your_si_text',
    
    partyId: 'your_party_id',
    partySize: 1,
    partyMax: 2,
    matchSecret: 'your_match_secret',
    joinSecret: 'your_join_secret',
    spectateSecret: 'your_spectate_secret',
    instance: true,
  });
}

rpc.on('ready', () => {
    console.log('ready');
    setActivity();
});

rpc.login({ clientId }).catch(console.error);
