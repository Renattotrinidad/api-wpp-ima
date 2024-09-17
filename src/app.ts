import { addKeyword, createBot, createFlow, createProvider, MemoryDB } from "@bot-whatsapp/bot";
import { BaileysProvider } from "@bot-whatsapp/provider-baileys";

const flowBienvenida = addKeyword('hola').addAnswer('Buen día, ¿en que te podemos ayudar?');

const main = async () => {

    const provider = createProvider(BaileysProvider);

    await createBot({
        flow: createFlow([flowBienvenida]),
        database: new MemoryDB(),
        provider: provider
    });
}