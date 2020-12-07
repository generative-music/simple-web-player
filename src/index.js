import createProvider from '@generative-music/web-provider';
import getSampleIndex from '@generative-music/samples-alex-bainter';
import createLibrary from '@generative-music/web-library';
import { Transport, Gain, getContext } from 'tone';
import unmuteiOS from 'unmute-ios-audio';

unmuteiOS();

const createPlayer = ({ host, piece, gain = 1 }) => {
  const provider = createProvider();
  const sampleIndex = getSampleIndex({ format: 'mp3', host });
  const sampleLibrary = createLibrary({ provider, sampleIndex });

  const gainNode = new Gain(gain).toDestination();

  return piece({
    sampleLibrary,
    context: getContext(),
    destination: gainNode,
  }).then(([, schedule]) => {
    const endFns = [];
    const start = () => {
      const end = schedule();
      endFns.push(end);
      Transport.start();
    };

    const stop = () => {
      endFns.splice(0, endFns.length).forEach((fn) => fn());
      Transport.stop();
      Transport.cancel();
    };

    return { start, stop };
  });
};

export default createPlayer;
