const { model } = require("mongoose")
const StoreController = require("../controllers/stores.controller")

module.exports = (app)=>{
    
    app.get("/api/stores", StoreController.allStores)
    app.get("/api/stores/:id", StoreController.oneStore)
    app.post("/api/stores", StoreController.addStore)
    app.put("/api/stores/:id", StoreController.updateStore)
    app.delete("/api/stores/:id", StoreController.deleteStore)

}