import Link from "next/link";

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

      <Link
        href="/"
        className="mt-7 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80"
      >
        Return to Home
      </Link>
    </main>
  );
}