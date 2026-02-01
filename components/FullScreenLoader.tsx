"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FullScreenLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* DESKTOP VIDEO */}
            <video
              src="/brand/logo-loader-desktop.mp4"
              autoPlay
              muted
              playsInline
              onEnded={() => setLoading(false)}
              className="
                hidden md:block
                absolute inset-0
                w-full h-full
                object-cover
              "
            />

            {/* MOBILE VIDEO */}
            <video
              src="/brand/logo-loader-mobile.mp4"
              autoPlay
              muted
              playsInline
              onEnded={() => setLoading(false)}
              className="
                block md:hidden
                absolute inset-0
                w-full h-full
                object-cover
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}
