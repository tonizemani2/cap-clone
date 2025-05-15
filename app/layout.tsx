import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { CustomCursor } from "@/components/custom-cursor"
import { LoadingState } from "@/components/loading-state"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Xera Capital",
  description: "A boutique advisory firm offering tailored capital raising, and strategic partnerships.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth js-loading">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white cursor-none antialiased`}>
        <Suspense fallback={<LoadingState />}>
          <CustomCursor />
          {children}
        </Suspense>

        <Script id="prevent-fouc">
          {`
            // Remove js-loading class to prevent FOUC
            document.documentElement.classList.remove('js-loading');
            
            // Initialize cursor behavior
            function initCursor() {
              const cursor = document.querySelector('.custom-cursor');
              if (!cursor) return;

              // Reset cursor position on page load
              cursor.style.transform = 'translate(-50%, -50%)';
              
              // Handle cursor movement with smooth animation
              let mouseX = 0;
              let mouseY = 0;
              let cursorX = 0;
              let cursorY = 0;
              
              document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
              });

              function animateCursor() {
                // Smooth cursor movement
                const dx = mouseX - cursorX;
                const dy = mouseY - cursorY;
                cursorX += dx * 0.1;
                cursorY += dy * 0.1;
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(animateCursor);
              }
              
              animateCursor();

              // Enhanced cursor states
              const cursorStates = document.querySelectorAll('a, button, [role="button"], input, textarea');
              cursorStates.forEach(element => {
                element.addEventListener('mouseenter', () => {
                  cursor.classList.add('cursor-hover');
                  element.classList.add('hover-scale');
                });
                element.addEventListener('mouseleave', () => {
                  cursor.classList.remove('cursor-hover');
                  element.classList.remove('hover-scale');
                });
              });

              // Reset cursor on window blur
              window.addEventListener('blur', () => {
                cursor.classList.remove('cursor-hover');
              });
            }

            // Handle mobile cursor and touch interactions
            function handleMobileCursor() {
              if ('ontouchstart' in window) {
                document.body.classList.remove('cursor-none');
                const cursor = document.querySelector('.custom-cursor');
                if (cursor) cursor.style.display = 'none';
                
                // Enhanced touch feedback
                const touchElements = document.querySelectorAll('button, a, [role="button"]');
                touchElements.forEach(element => {
                  element.addEventListener('touchstart', function() {
                    this.classList.add('touch-active');
                    this.style.transform = 'scale(0.98)';
                  });
                  element.addEventListener('touchend', function() {
                    this.classList.remove('touch-active');
                    this.style.transform = 'scale(1)';
                  });
                });
              } else {
                // Initialize cursor for non-touch devices
                initCursor();
              }
            }

            // Initialize on DOM content loaded
            document.addEventListener('DOMContentLoaded', function() {
              handleMobileCursor();
              
              // Enhanced intersection observer for lazy loading
              const lazyElements = document.querySelectorAll('[data-src], [data-lazy]');
              
              if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const element = entry.target;
                      if (element.hasAttribute('data-src')) {
                        element.src = element.dataset.src;
                        element.removeAttribute('data-src');
                      }
                      if (element.hasAttribute('data-lazy')) {
                        element.classList.add('lazy-loaded');
                        element.removeAttribute('data-lazy');
                      }
                      observer.unobserve(element);
                    }
                  });
                }, {
                  rootMargin: '50px 0px',
                  threshold: 0.1
                });
                
                lazyElements.forEach(element => observer.observe(element));
              } else {
                // Fallback for browsers without intersection observer
                lazyElements.forEach(element => {
                  if (element.hasAttribute('data-src')) {
                    element.src = element.dataset.src;
                    element.removeAttribute('data-src');
                  }
                  if (element.hasAttribute('data-lazy')) {
                    element.classList.add('lazy-loaded');
                    element.removeAttribute('data-lazy');
                  }
                });
              }
            });

            // Enhanced smooth scroll behavior
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  const headerOffset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              });
            });

            // Add scroll progress indicator
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);

            window.addEventListener('scroll', () => {
              const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrolled = (winScroll / height) * 100;
              progressBar.style.width = scrolled + '%';
            });
          `}
        </Script>
      </body>
    </html>
  )
}
