import fastifyAuth from "@fastify/auth";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import fastify from "fastify";
import plugin from "./plugin";

const server = fastify().withTypeProvider<TypeBoxTypeProvider>();

server.register(fastifyAuth);
server.register(plugin);
server.route({
  method: "GET",
  url: "/",
  preHandler: server.auth([]),
  handler: async (req, res) => {},
});
