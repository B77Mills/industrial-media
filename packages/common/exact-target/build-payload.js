module.exports = ({ req, source }) => {
  const { query } = req;
  const href = `${req.protocol}//${req.get('host')}${req.originalUrl}`;
  return {
    e: 'exact-target-referrer',
    d: {
      source,
      subscriberId: query['lt.usr'],
      emailId: query.utm_source,
      emailName: query.utm_campaign,
      sendId: query.utm_term,
      urlId: query.utm_content,
      ip: req.ip,
      ua: req.get('user-agent'),
      ts: Date.now(),
      env: process.env.NODE_ENV,
    },
    l: href,
  };
};
