var mockServer = require('node-mock-server');
var path = require('path');

mockServer({
  restPath: path.join(__dirname, 'src/mocks'),
  // optionsFallbackPath: `${__dirname}/_fallback/#options/OPTIONS/`,
  dirName: __dirname,
  title: 'ARE UI',
  version: 1,
  // urlBase: "http://localhost:3001",
  urlPath: '/api',
  port: 3001,
  // jvmOptions: "-Dmockserver.enableCORSForAllResponses=true",
  // uiPath: "/",
  // funcPath: path.join(__dirname, "/func"),
  // headers: {
  //   "Global-Custom-Header": "Global-Custom-Header",
  // },
  // customDTOToClassTemplate: path.join(__dirname, "/templates/dto_es6flow.ejs"),
  // middleware: {
  //   "/rest/products/#{productCode}/GET"(serverOptions, requestOptions) {
  //     var productCode = requestOptions.req.params[0].split("/")[3];

  //     if (productCode === "1234") {
  //       requestOptions.res.statusCode = 201;
  //       requestOptions.res.end("product 1234");
  //       return null;
  //     }

  //     return "success";
  //   },
  // },
  // expressMiddleware: [
  //   function (express) {
  //     return ["/public", express.static(__dirname + "/public")];
  //   },
  // ],
  // swaggerImport: {
  //   protocol: "http",
  //   authUser: undefined,
  //   authPass: undefined,
  //   host: "petstore.swagger.io",
  //   port: 80,
  //   path: "/v1/swagger.json",
  //   dest: path.join(__dirname, "/mock/rest"),
  //   replacePathsStr: "/v1/{baseSiteId}",
  //   createErrorFile: true,
  //   createEmptyFile: true,
  //   overwriteExistingDescriptions: true,
  //   responseFuncPath: path.join(__dirname, "/func-imported"),
  // },
  accessControlAllowOrigin: '*',
  accessControlAllowMethods: 'GET, POST, PUT, OPTIONS, DELETE, PATCH, HEAD',
  accessControlAllowHeaders: 'Origin, X-Requested-With, Content-Type, Accept, authorization',
  accessControlAllowCredentials: 'true',
  open: false
});
