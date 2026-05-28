exports.handler = async function() {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://rhemawarrior.org'
    },
    body: JSON.stringify({
      supabaseKey: process.env.SUPABASE_KEY
    })
  };
};
