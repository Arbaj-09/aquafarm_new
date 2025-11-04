import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aquapharm - Leading Specialty Chemicals Manufacturer",
  description: "Aquapharm is a leading manufacturer of specialty chemicals, serving industries across the globe with innovative and sustainable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
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
