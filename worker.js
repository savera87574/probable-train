
export default {
  async fetch(request, env, ctx) {
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:title" content="Video Gallery">
  <meta property="og:description" content="View the image gallery">
  <meta property="og:image" content="https://fhhj-daw.pages.dev/8c2d78cd635d3a85f0162f3da7b13da2.gif">
  <meta property="og:type" content="website">
  <title>Video Gallery</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #0f0f0f;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .gallery-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
      gap: 25px;
      width: 100%;
      max-width: 1100px;
    }

    .video-card {
      position: relative;
      display: block;
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 16 / 9;
      box-shadow: 0 8px 24px rgba(0,0,0,.5);
      background: #222;
      cursor: pointer;
    }

    .video-thumbnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform .4s ease, filter .4s ease;
    }

    .play-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,.2);
      transition: background .3s ease;
    }

    .play-button {
      width: 65px;
      height: 65px;
      background: rgba(255,255,255,.9);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0,0,0,.3);
      transition: transform .3s ease, background-color .3s ease;
    }

    .play-icon {
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      border-left: 20px solid #111;
      margin-left: 5px;
    }

    .video-card:hover .video-thumbnail {
      transform: scale(1.05);
      filter: brightness(.85);
    }

    .video-card:hover .play-overlay {
      background: rgba(0,0,0,.4);
    }

    .video-card:hover .play-button {
      transform: scale(1.15);
      background: #f00;
    }

    .video-card:hover .play-icon {
      border-left-color: #fff;
    }
  </style>
</head>

<body>
  <main class="gallery-container">
    <a href="https://affectsyntaxthousand.com/jxpph0kci5?key=b69c6da5a8cc59c054262e4404d60564"
       class="video-card">
      <img src="https://fhhj-daw.pages.dev/8c2d78cd635d3a85f0162f3da7b13da2.gif"
           alt="Gallery image 1" class="video-thumbnail">
      <span class="play-overlay">
        <span class="play-button"><span class="play-icon"></span></span>
      </span>
    </a>

    <a href="https://affectsyntaxthousand.com/jxpph0kci5?key=b69c6da5a8cc59c054262e4404d60564"
       class="video-card">
      <img src="https://jjhf-6gt.pages.dev/e1752b2e1d9e3ecfde2e99ca415e4696.gif"
           alt="Gallery image 2" class="video-thumbnail">
      <span class="play-overlay">
        <span class="play-button"><span class="play-icon"></span></span>
      </span>
    </a>

    <a href="https://affectsyntaxthousand.com/jxpph0kci5?key=b69c6da5a8cc59c054262e4404d60564"
       class="video-card">
      <img src="https://ghgj-dqx.pages.dev/577887f5354b81c4af9365ebb225ca04.gif"
           alt="Gallery image 3" class="video-thumbnail">
      <span class="play-overlay">
        <span class="play-button"><span class="play-icon"></span></span>
      </span>
    </a>
  </main>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};
