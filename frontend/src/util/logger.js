import pino from 'pino'
import { createPinoBrowserSend, createWriteStream } from 'pino-logflare'


const stream = createWriteStream({
    apiKey: "gjMLbQnEJrzp",
    sourceToken: "10f1f1b3-2396-4981-9507-392512d87c5e"
});

// create pino-logflare browser stream
const send = createPinoBrowserSend({
    apiKey: "gjMLbQnEJrzp",
    sourceToken: "10f1f1b3-2396-4981-9507-392512d87c5e"
});

// create pino loggger
export const logger = pino({
    browser: {
        transmit: {
            send: send,
        }
    }
}, stream);