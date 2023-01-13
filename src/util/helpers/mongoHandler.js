const mongoose = require("mongoose");
const settings = require("../../configs/settings.json");

mongoose.connect(settings.mongoUrl, {
	useUnifiedTopology: true,
	useNewUrlParser: true
}).catch(() => { console.log("Mongo Bağlantı Hatası!"); });

mongoose.connection.on("connected", () => {
	console.log("Mongo ya Bağlandı");
});
mongoose.connection.on("error", () => {
	console.error("Bağlantı Hatası!");
});
