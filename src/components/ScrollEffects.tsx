import React, { useEffect, useRef } from 'react';
import '../styles/scroll-effects.css';

interface ScrollEffectsProps {
  children: React.ReactNode;
}

const ScrollEffects: React.FC<ScrollEffectsProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);

  // Function to apply parallax effect based on scroll position
  const applyParallaxEffect = (scrollY: number) => {
    if (!scrollContainerRef.current) return;
    
    // Set a CSS variable with scroll offset for use in parallax calculations
    document.documentElement.style.setProperty('--scroll-offset', `${scrollY}px`);
    
    // Get all elements with parallax classes
    const parallaxElements = document.querySelectorAll('.scroll-parallax');
    
    parallaxElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + scrollY;
      const elementHeight = (element as HTMLElement).offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Only apply effect if element is in or near viewport
      if (scrollY + viewportHeight > elementTop && scrollY < elementTop + elementHeight) {
        const scrollOffset = (scrollY - elementTop) * 0.1;
        (element as HTMLElement).style.transform = `translateY(${scrollOffset}px)`;
      }
    });
  };

  // Function to update scroll reveal elements
  const updateScrollReveal = () => {
    const revealElements = document.querySelectorAll('.scroll-reveal:not(.active)');
    
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150; // How many pixels from the top before the element becomes visible
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  // Handle scroll event with debouncing
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Store the scroll position for use in the throttled function
    prevScrollY.current = scrollY;
    
    // Don't call the heavy functions on every scroll event
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        applyParallaxEffect(prevScrollY.current);
        updateScrollReveal();
        ticking.current = false;
      });
      
      ticking.current = true;
    }
  };

  useEffect(() => {
    // Initialize Intersection Observer for scroll reveal elements
    const observerOptions = {
      root: null, // Use viewport as the root
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 15% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once the animation is triggered, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      observer.observe(element);
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check for elements already in viewport on load
    updateScrollReveal();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="delayed-scroll">
      {children}
    </div>
  );
};

export default ScrollEffects; 