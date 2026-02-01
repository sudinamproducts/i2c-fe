"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FullScreenLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600); // or use onEnded

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <video
              src="/logo-loader.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}
