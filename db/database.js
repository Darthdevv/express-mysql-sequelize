import { Sequelize } from "sequelize";

const sequelize = new Sequelize("facebook_app", "myadmin", "12345678", {
  host: "localhost",
  port: 3003,
  dialect: "mysql",
});

const testingConnection = async () => {
  try {
      sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
}


const dbConnection = async () => {
  try {
    sequelize.sync({alter:true, force: false});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


export default dbConnection;