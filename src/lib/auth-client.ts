import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: "https://project-name-client-vy55.vercel.app",
  plugins: [jwtClient()],
});

export const { signIn, signUp, useSession, signOut } = authClient;