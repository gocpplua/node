import { getRepository } from "typeorm";
import { User } from "../entity/User";

export let user = {
  "POST /user/register": async (ctx, next) => {
    const { username, password } = ctx.request.body;
    const userRepository = getRepository(User);
    const ret = await userRepository.save(username, password);
    ctx.response.type = "application/json";
    ctx.response.body = ret;
  },

  "POST /user/login": async (ctx, next) => {
    const { username, password } = ctx.request.body;
    const userRepository = getRepository(User); // 或connection.getCustomRepository或manager.getCustomRepository（）
    const ret = await userRepository.findOne(username, password);
    ctx.response.type = "application/json";
    ctx.response.body = ret;
  },
};