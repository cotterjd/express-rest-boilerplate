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
module.exports = (req, res) => {
  res.json({
    param: req.params.name,
    query: req.query,
  })
}
