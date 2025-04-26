import request from 'request';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'audio/mpeg'); // Adjust if needed
  // Pipe the HTTP stream to the response
  request('http://198.7.62.157:10056/stream')
    .on('error', (err) => {
      res.status(500).end('Stream error');
    })
    .pipe(res, { end: true });
} 