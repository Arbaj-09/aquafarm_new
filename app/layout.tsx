import type { Metadata } from "next";
import "./globals.css";
import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "Aquapharm Chemical Limited - Premium Global Specialty Chemicals",
  description: "Leading global manufacturer of specialty chemicals with 40+ years of excellence. Serving 50+ countries with innovative solutions in water treatment, oilfield chemicals, and industrial applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollObserver />
        <PremiumNavbar />
        <main className="pt-20">
          {children}
        </main>
        <PremiumFooter />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                // Intersection Observer for scroll animations
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                    }
                  });
                }, {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                });

                // Observe all elements with scroll animation classes
                document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-up, .scroll-fade-in-left, .scroll-fade-in-right').forEach(el => {
                  observer.observe(el);
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
