# simple-web-player

An easy-to-use web player for generative music systems.

## Usage

Simple example of playing a system:

You will need to host the mp3 samples from [@generative-music/samples-alex-bainter](https://github.com/generative-music/samples-alex-bainter) for your web page.

This example assumes audio files are hosted in `/audio`.

```html
<head>
  <script src="//unpkg.com/tone@14"></script>
  <script src="//unpkg.com/@generative-music/piece-observable-streams@4"></script>
  <script src="//unpkg.com/@generative-music/simple-web-player"></script>

  <script>
    gmPlayerFactory({
      host: '/audio'
      piece: pieceObservableStreams
    }).then(({start, stop}) => {
      var playButton = document.getElementById('play-btn');
      playButton.onclick = start;
    });
  </script>
</head>
<body>
  <button type="button" id="play-btn">Click to play</button>
</body>
```
