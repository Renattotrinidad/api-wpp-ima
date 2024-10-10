"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const bot_1 = require("@bot-whatsapp/bot");
const provider_baileys_1 = require("@bot-whatsapp/provider-baileys");
const flowBienvenida = (0, bot_1.addKeyword)('hola').addAnswer('Buenas!! bienvenido');
/**
 *
 */
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const provider = (0, bot_1.createProvider)(provider_baileys_1.BaileysProvider);
    provider.initHttpServer(3002);
    if (provider.http) {
        // Aquí puedes utilizar la propiedad "http" sin que se produzca un error
        provider.http.server.post('/send-message', (0, provider_baileys_1.handleCtx)((bot, req, res) => __awaiter(void 0, void 0, void 0, function* () {
            // Tu código aquí
            const body = req.body;
            const message = body.message;
            const mediaUrl = body.mediaUrl;
            const phone = body.phone;
            //   console.log(body)
            //await bot.sendMessage('573016083120', 'mensaje tukusito1!', {})
            yield bot.sendMessage(phone, message, {
                media: mediaUrl
            });
            //await bot.sendMessage(process.env.FRIENDNUMBER.toString(), 'mensaje tukusito!', {})
            res.end('Mensaje enviado al número:' + phone);
        })));
    }
    yield (0, bot_1.createBot)({
        flow: (0, bot_1.createFlow)([flowBienvenida]),
        database: new bot_1.MemoryDB(),
        provider
    });
});
main();
