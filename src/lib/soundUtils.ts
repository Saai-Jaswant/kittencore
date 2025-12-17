/**
 * Utility function to play meow sound
 */
export const playKittenMeow = () => {
  const audio = new Audio("/kittencore/meow.mp3");
  audio.volume = 0.7;
  audio.play().catch((error) => {
    console.log("Audio playback failed:", error);
  });
};
