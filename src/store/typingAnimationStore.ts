import { create } from "zustand";

interface TypingAnimationState {
  hasSeenTyping: boolean;
  setHasSeenTyping: (value: boolean) => void;
}

export const useTypingAnimationStore = create<TypingAnimationState>((set) => ({
  hasSeenTyping: false,
  setHasSeenTyping: (value) => set({ hasSeenTyping: value }),
}));
