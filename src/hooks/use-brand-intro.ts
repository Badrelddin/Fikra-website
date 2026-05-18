"use client";

import { useState, useEffect, useCallback } from "react";

export function useBrandIntro() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("fikra-intro-seen");
    if (!seen) {
      setShowIntro(true);
    } else {
      setIntroComplete(true);
    }
  }, []);

  const onIntroComplete = useCallback(() => setIntroComplete(true), []);

  return { showIntro, introComplete, onIntroComplete };
}
