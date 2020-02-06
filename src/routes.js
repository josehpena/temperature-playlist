const { Router } = require("express");

const routes = Router();

const SearchController = require("../src/controllers/SearchController");

routes.get("/search", SearchController.searchTemp);

module.exports = routes;