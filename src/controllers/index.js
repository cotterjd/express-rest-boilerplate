/**
 * @api {get} /version returns version
 * @apiName getVersin
 * @apiGroup Get Version
 * @apiVersion 1.0.0
 * @apiExample {curl} Example usage:
 * curl http:localhost:3040/version
 * @apiSuccess {string} version
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   "1.0.0"
 */
const getVersion = (req, res) => {
  const version = require(`../../package.json`).version
  res.send(version)
}

/**
 * @api {get} /:name returns param value and query value that was sent
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
 * @api {post} / return body that was sent
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
  res.json(req.body)
}

module.exports = {
  getVersion,
  paramExample,
  postExample,
}
