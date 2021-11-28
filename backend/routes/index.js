const userRoutes = require("./user");
const postRoutes = require("./post");

// all app API routes
function useRoutes(app) {
  app.use("/api/user", userRoutes);
  app.use("/api/post", postRoutes);
}

module.exports = useRoutes;
