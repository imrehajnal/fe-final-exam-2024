import { createServer, Model, hasMany, belongsTo } from "miragejs";

export const initFakeApi = () =>
  createServer({
    models: {
      room: Model.extend({
        furniture: hasMany(),
      }),
      furniture: Model.extend({
        room: belongsTo(),
      }),
    },

    seeds(server) {
      const livingRoom = server.create("room", { name: "Living Room" });
      const bedroom = server.create("room", { name: "Bedroom" });
      const kitchen = server.create("room", { name: "Kitchen" });

      server.create("furniture", {
        name: "Sofa",
        room: livingRoom,
        weight: 50,
        price: 300,
      });
      server.create("furniture", {
        name: "Coffee Table",
        room: livingRoom,
        weight: 20,
        price: 100,
      });
      server.create("furniture", {
        name: "TV Stand",
        room: livingRoom,
        weight: 25,
        price: 150,
      });

      server.create("furniture", {
        name: "Bed",
        room: bedroom,
        weight: 80,
        price: 500,
      });
      server.create("furniture", {
        name: "Nightstand",
        room: bedroom,
        weight: 15,
        price: 75,
      });
      server.create("furniture", {
        name: "Wardrobe",
        room: bedroom,
        weight: 60,
        price: 400,
      });

      server.create("furniture", {
        name: "Dining Table",
        room: kitchen,
        weight: 70,
        price: 350,
      });
      server.create("furniture", {
        name: "Refrigerator",
        room: kitchen,
        weight: 90,
        price: 600,
      });
      server.create("furniture", {
        name: "Oven",
        room: kitchen,
        weight: 50,
        price: 250,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/rooms", (schema) => {
        return schema.rooms.all();
      });

      this.get("/furnitures", (schema) => {
        return schema.furnitures.all();
      });

      this.get("/rooms/:id", (schema, request) => {
        let id = request.params.id;
        return schema.rooms.find(id);
      });

      this.get("/rooms/:id/furnitures", (schema, request) => {
        let roomId = request.params.id;
        let room = schema.rooms.find(roomId);

        return room.furniture;
      });
    },
  });
