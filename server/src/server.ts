import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";

const app = express()

app.use(express.json())
app.use(cors())



const prisma = new PrismaClient({
  log: ['query']
})
/* 
  * Query:
    - localhost:333/ads?page=2 == persistir estado quando for filtrar, ordenar ou para paginação, para senha. Sempre precisa nomear

  * Route: 
    - localhost:333/ads/como-criar-uma-api-em-node == rotas de páginas, para identificar recursos.
  * Body: 
    - localhost:333/ads == para varias requisições de uma vez, formulários, para informações sensíveis
*/


//HTTP methods / API Restful // HTTP Codes 
// métodos HTTP: GET: buscar informação-leitura, POST: criando algo, PUT: editando por completo, PATCH: editar informação específica, DELETE: remover alguma entidade

// por fora da função eu coloco o async e onde fica a resposta que demora a ser executada, coloca o await
app.get('/games', async (request, response) => {

  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })

  return response.json([games])
})

// HTTP Codes: 200 sucesso, 300 redirecionamento 400 erros por código bugado 500 erros inesperados
app.post('/games/:id/ads', async (request, response) => {
  const gameId: any = request.params.id;

  const body: any = request.body;


  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weeksDays: body.weeksDays.join(','),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      hoursEnd: convertHourStringToMinutes(body.hoursEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })
  
  return response.status(201).json(ad)
})


app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weeksDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hoursEnd: true,

    },
    where: {
      gameId: gameId
    },

    orderBy: {
      createdAt: 'desc',
    }
  })
  //return response.send(gameId)
  
  return response.json(ads.map(ad => {
    return {
      ...ad,
      weeksDays: ad.weeksDays.split(','),
      hoursStart: convertMinutesToHourString(ad.hoursStart),
      hoursEnd: convertMinutesToHourString(ad.hoursEnd)

    }
  }))
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })
  //return response.send(gameId)
  
  return response.json({
  discord: ad?.discord,
})
})

app.listen(3333)