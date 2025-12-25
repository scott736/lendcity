import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '50f51830ffe8c7a23e26909814b590d736d17666', queries,  });
export default client;
  