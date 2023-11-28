const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 9000 });
let state = {};

wsServer.on('connection', onConnect);
function onConnect(wsClient) {
  console.info('Client connected');
  // отправка приветственного сообщения клиенту
  wsClient.send('Привет');
  wsClient.on('message', function (message) {
    console.log('Message from client: %s', message);
    /* обработчик сообщений от клиента */

    query = JSON.parse(message);

    if (query?.cmd === 'set_state') {
      state = query.data;
    }

    if (query?.cmd === 'get_state') {
      wsClient.send(JSON.stringify({cmd: 'answer_get_state', data: state}));
    }

  })
  wsClient.on('close', function () {
    // отправка уведомления в консоль
    console.warn('Client disconnected');
  })
}