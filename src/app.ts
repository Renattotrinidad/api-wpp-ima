import 'dotenv/config'
import { createBot, createFlow, MemoryDB, createProvider, addKeyword } from '@bot-whatsapp/bot'
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys'

// const flowBienvenida = addKeyword('hola').addAnswer('Buenas!! bienvenido')
/**
 * 
 */
const main = async () => {

  const provider = createProvider(BaileysProvider);
  const fechaActual = new Date();

  provider.initHttpServer(3003)

  if (provider.http) {
    // Aquí puedes utilizar la propiedad "http" sin que se produzca un error
    provider.http.server.post('/send-message', handleCtx(async (bot, req, res) => {
      
      const body = req.body
      const message = body.message
      const mediaUrl = body.mediaUrl
      const phone = body.phone

      try {

        if (!mediaUrl) {

          await bot.sendMessage(phone, message, {});

        } else {

          await bot.sendMessage(phone, message, {
            media: mediaUrl
          });

        }

        console.log(`[${fechaActual}][Mensaje enviado] - ${phone}`);
        res.end('Mensaje enviado correctamente a:' + phone);

      } catch (error) {
        
        console.log(error);

      }

    }));

  }

  // await createBot({
  //   flow: createFlow([flowBienvenida]),
  //   database: new MemoryDB(),
  //   provider
  // })
}

main()