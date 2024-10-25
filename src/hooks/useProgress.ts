import { useState } from "react";
export type StepsState = {
  name: string;
  description: string;
  href: string;
  status: string;
  process: number;
}[];
const initialSteps = [
  {
    name: "Zaznacz pakiet",
    description: "Zaznacz pakiet który cię interesuje.",
    href: "#pricing",
    status: "current",
    process: 1,
  },
  {
    name: "Wprowadź dane",
    description: "Wpisz swój adres e-mail i wyślij.",
    href: "#",
    status: "upcoming",
    process: 2,
  },
  {
    name: "Ustalenie szczegółów",
    description: "Skontaktujemy się z Tobą w celu dobrania oferty.",
    href: "#",
    status: "upcoming",
    process: 3,
  },
  {
    name: "Działamy!",
    description: "Zaczynamy współpracę.",
    href: "#",
    status: "upcoming",
    process: 4,
  },
];

export const useProgress = () => {
  const [progressState, setProgressState] = useState<{
    progress: number;
    tier: string;
  }>({
    progress: 0,
    tier: "",
  });

  const updateStepStatus = (steps: StepsState, currentStepIndex: number) => {
    return steps.map((step, index) => {
      if (index < currentStepIndex) {
        return { ...step, status: "complete" };
      } else if (index === currentStepIndex) {
        return { ...step, status: "current" };
      } else {
        return { ...step, status: "upcoming" };
      }
    });
  };
  const updatedSteps = updateStepStatus(initialSteps, progressState.progress);

  const setProgress = (progress: number) => {
    setProgressState((prev) => ({ ...prev, progress }));
  };
  const setTier = (tier: string) => {
    setProgressState((prev) => ({ ...prev, tier }));
  };

  return {
    progress: progressState.progress,
    tier: progressState.tier,
    setProgress,
    setTier,
    updatedSteps,
  };
};
