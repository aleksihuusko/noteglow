import Link from "next/link";

import { login } from "@/app/login/actions";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <Button formAction={login}>Log in</Button>
      Dont have a account? <Link href="/signup">Sign Up</Link>
    </form>
  );
}
