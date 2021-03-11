define({ "api": [
  {
    "type": "get",
    "url": "/version",
    "title": "returns version",
    "name": "getVersin",
    "group": "Get_Version",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http:localhost:3040/version",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "version",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n\"1.0.0\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/index.js",
    "groupTitle": "Get_Version",
    "sampleRequest": [
      {
        "url": "http://localhost:3040/version"
      }
    ]
  },
  {
    "type": "get",
    "url": "/:name",
    "title": "returns param value and query value that was sent",
    "name": "paramExample",
    "group": "Param_Example",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http:localhost:3040/jon?foo=bar",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>param sent</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>query object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"param\": \"jon\",\n  \"query\": { \"foo\": \"bar\" }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/index.js",
    "groupTitle": "Param_Example",
    "sampleRequest": [
      {
        "url": "http://localhost:3040/:name"
      }
    ]
  },
  {
    "type": "post",
    "url": "/",
    "title": "return body that was sent",
    "name": "postExample",
    "group": "Post_Example",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"name\\\": \\\"jon\\\" }\" http://localhost:3040",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"name\": \"jon\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/index.js",
    "groupTitle": "Post_Example",
    "sampleRequest": [
      {
        "url": "/"
      }
    ]
  }
] });
