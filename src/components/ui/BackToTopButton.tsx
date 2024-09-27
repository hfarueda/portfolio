import { useState, useEffect } from "react";
import { CornerLeftUp } from "lucide-react"; // Assuming you're using Lucide icons
import { Button } from "@/components/ui/button"; // Adjust based on your Button component import

const BackToTopButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  // Prevent rendering on the server to avoid hydration errors
  if (!isMounted) {
    return null;
  }

  return (
    <button onClick={scrollToTop} className="text-xs text-muted-foreground hover:text-foreground">
      <Button variant="outline">
        <CornerLeftUp />
        <span className="hidden md:flex">Back to top</span>
      </Button>
    </button>
  );
};

export default BackToTopButton;
