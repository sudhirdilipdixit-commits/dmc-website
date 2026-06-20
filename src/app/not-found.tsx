import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="py-[clamp(80px,14vw,160px)]">
        <div className="wrap text-center">
          <div className="font-voice italic text-[clamp(64px,12vw,120px)] text-navy/10 leading-none font-medium select-none">
            404
          </div>
          <h1 className="font-display font-bold text-[clamp(24px,4vw,40px)] text-navy tracking-tight mt-4">
            Page not found
          </h1>
          <p className="text-slate-600 text-[17px] mt-4 max-w-[42ch] mx-auto">
            The page you are looking for does not exist. Let us take you back to
            somewhere useful.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <Button variant="primary" href="/" arrow>
              Back to home
            </Button>
            <Button variant="secondary" href="/universities">
              Browse universities
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
