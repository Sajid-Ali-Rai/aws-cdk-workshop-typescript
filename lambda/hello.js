exports.handler = async function (event) {
  console.log('request: ' + JSON.stringify(event, undefined, 2));
  console.log('lambda function called successfully');
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'plain/text' },
    body: `Hello CDK, Good Night,  you have hit ${event.path}\n`,
  };
};
