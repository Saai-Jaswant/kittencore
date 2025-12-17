/**
 * Play kitten meow sound
 */
export const playKittenMeow = () => {
  try {
    const audio = new Audio('/kittencore/kitten-meow.mp3');
    audio.volume = 0.7;
    audio.play().catch((error) => {
      console.log('Audio playback failed:', error);
    });
  } catch (error) {
    console.log('Error playing sound:', error);
  }
};
