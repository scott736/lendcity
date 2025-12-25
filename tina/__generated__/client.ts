import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/user/lendcity/tina/__generated__/.cache/1766631221046', url: 'http://localhost:4001/graphql', token: 'null', queries,  });
export default client;
  