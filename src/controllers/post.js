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
module.exports = (req, res) => {
  res.json(req.body)
}
