// ApplicationConfiguration.js
class ApplicationConfiguration {
    constructor() {
      this.DATABASE_HOST = "127.0.0.1";
      this.DATABASE_PORT = 5432;
      this.DATABASE_SCHEMA = "public";
      this.DATABASE_NAME = "text_analyzer";
      this.DATABASE_USER = "postgres";
      this.DATABASE_PASSWORD = "postgres";
      this.DATABASE_DIALECT = "postgres";
      this.APPLICATION_PORT = 3000;
    }
  }
  
  module.exports = new ApplicationConfiguration();
  