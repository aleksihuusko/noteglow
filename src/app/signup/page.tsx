import Link from "next/link";

import { signup } from "@/app/signup/actions";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <Button formAction={signup}>Sign up</Button>
      Already have an account? <Link href="/login">Login</Link>
    </form>
  );
}
