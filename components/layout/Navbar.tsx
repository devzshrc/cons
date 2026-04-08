import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-xl tracking-tight uppercase shrink-0">AJIT.</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-heading font-bold text-xl uppercase tracking-tight">AJIT.</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-8 mt-12 px-2">
                <Link href="/projects" className="text-2xl font-bold font-heading hover:text-accent transition-colors py-2 border-b border-transparent hover:border-accent/20">Projects</Link>
                <Link href="/services" className="text-2xl font-bold font-heading hover:text-accent transition-colors py-2 border-b border-transparent hover:border-accent/20">Services</Link>
                <Link href="/about" className="text-2xl font-bold font-heading hover:text-accent transition-colors py-2 border-b border-transparent hover:border-accent/20">About</Link>
                <Link href="/contact" className="text-2xl font-bold font-heading hover:text-accent transition-colors py-2 border-b border-transparent hover:border-accent/20">Contact</Link>
                <Button asChild className="rounded-full w-full h-14 text-lg font-bold mt-8">
                  <Link href="/book-call">Book Call</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/contact" className="hidden md:block text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          <Button asChild className="rounded-full px-6 font-semibold hidden sm:inline-flex">
            <Link href="/book-call">Book Call</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
