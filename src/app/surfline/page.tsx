

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function SurflinePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Surfline</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the Surfline page. This is where you can find up-to-date surf reports,
          forecasts, and wave conditions for Brennanswave and beyond.
        </p>
      </main>
      <Footer />
    </>
  );
}