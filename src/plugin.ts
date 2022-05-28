import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import fp from "fastify-plugin";

export default fp(
  (fastify) => {
    const instance = fastify.withTypeProvider<TypeBoxTypeProvider>();

    instance.route({
      method: "GET",
      url: "/plugin",
      preHandler: instance.auth([]),
      handler: async (req, res) => {},
    });
  },
  {
    name: "example",
  }
);
