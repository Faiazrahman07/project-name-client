import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-6 text-8xl">🎬</div>

      <h1 className="text-7xl font-bold text-primary">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Studio Not Found!
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        Oops! The creative space you are looking for
        does not exist or may have been moved.
      </p>

      <Button asChild className="mt-7 rounded-xl px-6">
        <Link href="/">Return to Home</Link>
      </Button>
    </main>
  );
}