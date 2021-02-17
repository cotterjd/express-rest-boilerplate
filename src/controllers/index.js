/**
 * @api {get} / 
 * @apiName getExample
 * @apiGroup Get Example
 * @apiVersion 1.0.0 
 * @apiExample {curl} Example usage:
 * curl http:localhost:3040/ 
 * @apiSuccess {string} hello message 
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   "Hello!" 
 */
const getExample = (req, res) => {
  res.send(`Hello!`)
}

/**
 * @api {get} /:name 
 * @apiName paramExample
 * @apiGroup Param Example
 * @apiVersion 1.0.0 
 * @apiParam {String} name 
 * @apiExample {curl} Example usage:
 * curl http:localhost:3040/jon?foo=bar 
 * @apiSuccess {String} param param sent
 * @apiSuccess {Object} query query object 
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   {
 *     "param": "jon",
 *     "query": { "foo": "bar" } 
 *   }
 */
const paramExample = (req, res) => {
  res.json({ 
    param: req.params.name,
    query: req.query,
  })
}
/**
 * @api {post} /
 * @apiName postExample
 * @apiGroup Post Example
 * @apiVersion 1.0.0 
 * @apiExample {curl} Example usage:
 * curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"jon\" }" http://localhost:3040
 * @apiSuccess {String} name Name sent 
 * @apiSuccessExample {json} Success response:
 *  HTTPS 200 OK
 *  {
 *    "name": "jon",
 *  }
 */
const postExample = (req, res) => {
  res.json({ name: req.body.name })
}

module.exports = {
  getExample,
  paramExample,
  postExample,
}
