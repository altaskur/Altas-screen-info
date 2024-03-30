const { getStatus } = require('../status');

function createMessage(data) {
  const body = JSON.stringify(data);
  const header = 'data: ';
  const footer = '\n\n';
  console.log('message: ', header + body + footer);
  return `${header}${body}${footer}`;
}

function sendSSE(res, message) {
  console.log('sendSSE: ', message);
  res.write(createMessage(message));
  console.log('Message sent');
}

const sseEvents = (_, res) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  res.writeHead(200, headers);

  res.socket.on('end', () => {
    console.log('Screen disconnected');
    res.end();
  });

  res.socket.on('connect', () => {
    console.log('Screen connected');
  });

  sendSSE(res, 'Connected');

  // res.on('close', () => {
  //   console.log(' Close connection .. ... ...')
  //   res.end()
  //   // Ver como cerrar tmi
  //   client.disconnect()
  // })

  // setInterval(() => {
  //   console.log('Interval');
  //   sendSSE(res, 'Mensaje random');
  // }, 1000);
};

const changeSSEStatus = () => {
  const status = getStatus();
  sendSSE(status);
};

module.exports = { sseEvents, changeSSEStatus };
