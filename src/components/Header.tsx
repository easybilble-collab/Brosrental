"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { MountainIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#how-it-works", label: "Como funciona" },
    { href: "/#benefits", label: "Benefícios" },
    { href: "/#pricing", label: "Planos" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background sticky top-0 z-50 border-b">
      <Link to="/" className="flex items-center justify-center">
        <MountainIcon className="h-6 w-6" />
        <span className="font-bold ml-2 text-lg">BRO'S Rental</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden lg:flex items-center gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {link.label}
          </a>
        ))}
        <Link to="/contact">
          <Button>Fale com um especialista</Button>
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto lg:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link
                to="/"
                className="flex items-center justify-center mb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MountainIcon className="h-6 w-6" />
                <span className="font-bold ml-2 text-lg">BRO'S Rental</span>
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link to="/contact" className="w-full">
                <Button
                  className="w-full mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Fale com um especialista
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};