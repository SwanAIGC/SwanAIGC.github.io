(function () {
  const ASSET_BASE = "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swansphere/assets";
  const AFRAME_SRC = "https://aframe.io/releases/1.5.0/aframe.min.js";
  const OMNITONE_SRC = `${ASSET_BASE}/lib/omnitone.min.js`;
  const asset = (path) => `${ASSET_BASE}/${path}`;

  const tabs = [
    { id: "swansphere-v2sa", label: "Video-to-Spatial" },
    { id: "swansphere-t2sa", label: "Text-to-Spatial" },
  ];

  const v2saDemos = [
    {
      id: "demo01",
      video360: asset("v2sa/1WFJLucjK50_529/1WFJLucjK50_529.mp4"),
      foa: {
        gt: asset("v2sa/1WFJLucjK50_529/1WFJLucjK50_529_gt.wav"),
        visage: asset("v2sa/1WFJLucjK50_529/1WFJLucjK50_visage.wav"),
        omniaudio: asset("v2sa/1WFJLucjK50_529/1WFJLucjK50_529_omni.wav"),
        swansphere: asset("v2sa/1WFJLucjK50_529/1WFJLucjK50_529.wav"),
      },
    },
    {
      id: "demo02",
      video360: asset("v2sa/1whJPpizoDA_86/1whJPpizoDA_86.mp4"),
      foa: {
        gt: asset("v2sa/1whJPpizoDA_86/1whJPpizoDA_86_gt.wav"),
        visage: asset("v2sa/1whJPpizoDA_86/1whJPpizoDA_visage.wav"),
        omniaudio: asset("v2sa/1whJPpizoDA_86/1whJPpizoDA_86_omni.wav"),
        swansphere: asset("v2sa/1whJPpizoDA_86/1whJPpizoDA_86.wav"),
      },
    },
    {
      id: "demo03",
      video360: asset("v2sa/9X2wM6HD_og_933/9X2wM6HD_og_933.mp4"),
      foa: {
        gt: asset("v2sa/9X2wM6HD_og_933/9X2wM6HD_og_933_gt.wav"),
        visage: asset("v2sa/9X2wM6HD_og_933/9X2wM6HD_og_visage.wav"),
        omniaudio: asset("v2sa/9X2wM6HD_og_933/9X2wM6HD_og_933_omni.wav"),
        swansphere: asset("v2sa/9X2wM6HD_og_933/9X2wM6HD_og_933.wav"),
      },
    },
    {
      id: "demo04",
      video360: asset("v2sa/fQukntBmFvY_40/fQukntBmFvY_40.mp4"),
      foa: {
        gt: asset("v2sa/fQukntBmFvY_40/fQukntBmFvY_40_gt.wav"),
        visage: asset("v2sa/fQukntBmFvY_40/fQukntBmFvY_visage.wav"),
        omniaudio: asset("v2sa/fQukntBmFvY_40/fQukntBmFvY_40_omni.wav"),
        swansphere: asset("v2sa/fQukntBmFvY_40/fQukntBmFvY_40.wav"),
      },
    },
    {
      id: "demo05",
      video360: asset("v2sa/OWN_J9FGZ5I_55/OWN_J9FGZ5I_55.mp4"),
      foa: {
        gt: asset("v2sa/OWN_J9FGZ5I_55/OWN_J9FGZ5I_55_gt.wav"),
        visage: asset("v2sa/OWN_J9FGZ5I_55/OWN_J9FGZ5I_visage.wav"),
        omniaudio: asset("v2sa/OWN_J9FGZ5I_55/OWN_J9FGZ5I_55_omni.wav"),
        swansphere: asset("v2sa/OWN_J9FGZ5I_55/OWN_J9FGZ5I_55.wav"),
      },
    },
    {
      id: "demo06",
      video360: asset("v2sa/kMZSoni0etA_10/kMZSoni0etA_10.mp4"),
      foa: {
        gt: asset("v2sa/kMZSoni0etA_10/kMZSoni0etA_10_gt.wav"),
        visage: asset("v2sa/kMZSoni0etA_10/kMZSoni0etA_visage.wav"),
        omniaudio: asset("v2sa/kMZSoni0etA_10/kMZSoni0etA_10_omni.wav"),
        swansphere: asset("v2sa/kMZSoni0etA_10/kMZSoni0etA_10.wav"),
      },
    },
  ];

  const t2saDemos = [
    {
      id: "t2sa01",
      text: "An ensemble concert, with music coming from all around.",
      foa: {
        gt: asset("t2sa/_yNwzbv3PeI_16/_yNwzbv3PeI_16_gt.wav"),
        mmaudioAs: asset("t2sa/_yNwzbv3PeI_16/_yNwzbv3PeI_16_mm.wav"),
        omniaudioText: asset("t2sa/_yNwzbv3PeI_16/_yNwzbv3PeI_16_omni.wav"),
        swansphere: asset("t2sa/_yNwzbv3PeI_16/_yNwzbv3PeI_16.wav"),
      },
    },
    {
      id: "t2sa02",
      text: "A marching band is initially heard in front and then shifts to the right side.",
      foa: {
        gt: asset("t2sa/aieThfuvmtY_16/aieThfuvmtY_16_gt.wav"),
        mmaudioAs: asset("t2sa/aieThfuvmtY_16/aieThfuvmtY_16_mm.wav"),
        omniaudioText: asset("t2sa/aieThfuvmtY_16/aieThfuvmtY_16_omni.wav"),
        swansphere: asset("t2sa/aieThfuvmtY_16/aieThfuvmtY_16.wav"),
      },
    },
    {
      id: "t2sa03",
      text: "The thundering roar of a waterfall comes continuously from the left, accompanied by the crashing sound of turbulent water.",
      foa: {
        gt: asset("t2sa/0B7ds6NmVBQ_30/0B7ds6NmVBQ_30_gt.wav"),
        mmaudioAs: asset("t2sa/0B7ds6NmVBQ_30/0B7ds6NmVBQ_30_mm.wav"),
        omniaudioText: asset("t2sa/0B7ds6NmVBQ_30/0B7ds6NmVBQ_30_omni.wav"),
        swansphere: asset("t2sa/0B7ds6NmVBQ_30/0B7ds6NmVBQ_30.wav"),
      },
    },
    {
      id: "t2sa04",
      text: "The sound of a solo guitar playing comes from the front.",
      foa: {
        gt: asset("t2sa/0FB9jMXMP8A_0/0FB9jMXMP8A_0_gt.wav"),
        mmaudioAs: asset("t2sa/0FB9jMXMP8A_0/0FB9jMXMP8A_0_mm.wav"),
        omniaudioText: asset("t2sa/0FB9jMXMP8A_0/0FB9jMXMP8A_0_omni.wav"),
        swansphere: asset("t2sa/0FB9jMXMP8A_0/0FB9jMXMP8A_0.wav"),
      },
    },
    {
      id: "t2sa05",
      text: "The distant roar of a train, accompanied by the rhythmic clacking of tracks, gradually approaches from the left to right.",
      foa: {
        gt: asset("t2sa/G8pABGosD38_17/G8pABGosD38_17_gt.wav"),
        mmaudioAs: asset("t2sa/G8pABGosD38_17/G8pABGosD38l_17_mm.wav"),
        omniaudioText: asset("t2sa/G8pABGosD38_17/G8pABGosD38l_17_omni.wav"),
        swansphere: asset("t2sa/G8pABGosD38_17/G8pABGosD38_17.wav"),
      },
    },
    {
      id: "t2sa06",
      text: "The continuous sound of crashing waves, accompanied by the surging tide, comes from in front.",
      foa: {
        gt: asset("t2sa/yhFN_xVmNsI_90/yhFN_xVmNsI_90_gt.wav"),
        mmaudioAs: asset("t2sa/yhFN_xVmNsI_90/yhFN_xVmNsI_90_mm.wav"),
        omniaudioText: asset("t2sa/yhFN_xVmNsI_90/yhFN_xVmNsI_90_omni.wav"),
        swansphere: asset("t2sa/yhFN_xVmNsI_90/yhFN_xVmNsI_90.wav"),
      },
    },
  ];

  let audioContext = null;
  let foaRenderer = null;
  let activeAudioSource = null;
  let activePlayback = null;
  let activeCamera = null;
  let rotationFrame = null;
  let progressFrame = null;
  let quaternion = null;
  let aframePromise = null;
  let omnitonePromise = null;
  const audioBufferCache = new Map();
  const rotationMatrix = new Float32Array(9);

  function loadScriptOnce(src, key) {
    const existing = document.querySelector(`script[data-swan-loader="${key}"]`);
    if (existing) {
      return new Promise((resolve, reject) => {
        if (existing.dataset.ready === "true") {
          resolve();
          return;
        }
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
      });
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.dataset.swanLoader = key;
      script.addEventListener(
        "load",
        () => {
          script.dataset.ready = "true";
          resolve();
        },
        { once: true }
      );
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function ensureAFrame() {
    if (window.AFRAME) return Promise.resolve();
    aframePromise = aframePromise || loadScriptOnce(AFRAME_SRC, "aframe");
    return aframePromise;
  }

  function ensureOmnitone() {
    if (window.Omnitone) return Promise.resolve();
    omnitonePromise = omnitonePromise || loadScriptOnce(OMNITONE_SRC, "omnitone");
    return omnitonePromise;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getActiveId() {
    const hash = window.location.hash.replace("#", "");
    return tabs.some((tab) => tab.id === hash) ? hash : "swansphere-v2sa";
  }

  function tabNav(activeId) {
    return `
      <div class="demo-tab-nav" aria-label="SwanSphere demo sections">
        ${tabs
          .map(
            (tab) => `
              <a
                class="${tab.id === activeId ? "is-active" : ""}"
                href="#${tab.id}"
                ${tab.id === activeId ? 'aria-current="page"' : ""}
              >${tab.label}</a>`
          )
          .join("")}
      </div>`;
  }

  function videoCell(demo, key, label) {
    const videoId = `sphere-${demo.id}-${key}-video`;
    const cameraId = `sphere-${demo.id}-${key}-camera`;

    return `
      <article class="sphere-cell">
        <div class="sphere-cell-title">${label}</div>
        <div class="sphere-viewer" data-sphere-viewer data-video-id="${videoId}" data-camera-id="${cameraId}">
          <div class="sphere-viewer-preview" aria-hidden="true">
            <span class="sphere-orbit sphere-orbit-a"></span>
            <span class="sphere-orbit sphere-orbit-b"></span>
            <span class="sphere-orbit sphere-orbit-c"></span>
            <span class="sphere-listener-dot"></span>
          </div>
          <div class="sphere-viewer-hint">Load 360 Preview</div>
        </div>
        <div class="sphere-controls">
          <button class="sphere-button" type="button" data-sphere-play data-video-id="${videoId}" data-video-src="${demo.video360}" data-camera-id="${cameraId}" data-audio-url="${demo.foa[key]}">Play</button>
          <button class="sphere-button" type="button" data-sphere-stop>Stop</button>
          <span class="sphere-status" aria-live="polite">Ready</span>
        </div>
      </article>`;
  }

  function audioCell(demo, key, label) {
    return `
      <div class="sphere-spatial-track ${key === "swansphere" ? "is-primary" : ""}" data-sphere-audio-row>
        <div class="sphere-spatial-label">
          <span>${label}</span>
          <small>FOA</small>
        </div>
        <div class="sphere-native-player" data-sphere-player data-audio-url="${demo.foa[key]}" data-offset="0">
          <button class="sphere-play-toggle" type="button" data-sphere-play aria-label="Play ${escapeHtml(label)}">Play</button>
          <span class="sphere-spatial-dot" aria-hidden="true"></span>
          <input class="sphere-seek" type="range" min="0" max="1000" value="0" step="1" data-sphere-seek aria-label="${escapeHtml(label)} progress" />
          <span class="sphere-time" data-sphere-time>0:00</span>
        </div>
      </div>`;
  }

  function sampleLabel(index) {
    return `Sample ${String(index + 1).padStart(2, "0")}`;
  }

  function renderV2SASample(demo, index) {
    return `
      <article class="sphere-sample">
        <div class="sphere-sample-head">
          <span>${sampleLabel(index)}</span>
          <span>Video-to-Spatial</span>
        </div>
        <div class="sphere-table sphere-cols-4">
          ${videoCell(demo, "gt", "Ground Truth")}
          ${videoCell(demo, "visage", "ViSAGe")}
          ${videoCell(demo, "omniaudio", "OmniAudio")}
          ${videoCell(demo, "swansphere", "SwanSphere")}
        </div>
      </article>`;
  }

  function renderV2SA() {
    return `
      <section id="swansphere-v2sa" class="demo-group demo-segment sphere-demo-segment">
        <div class="demo-group-header">
          <div>
            <div class="demo-group-index">01</div>
            <h3>Comparisons with Baselines: Video-to-Spatial Audio</h3>
          </div>
          <p>Drag inside each 360 viewer to look around. Press Play to decode the FOA audio to binaural in-browser.</p>
        </div>
        <div class="sphere-demo-stack">
          ${v2saDemos.map(renderV2SASample).join("")}
        </div>
      </section>`;
  }

  function renderT2SASample(demo, index) {
    return `
      <article class="sphere-sample">
        <div class="sphere-sample-head">
          <span>${sampleLabel(index)}</span>
          <span>Text-to-Spatial</span>
        </div>
        <div class="sphere-prompt-card">${escapeHtml(demo.text)}</div>
        <div class="sphere-audio-list">
          ${audioCell(demo, "gt", "Ground Truth")}
          ${audioCell(demo, "mmaudioAs", "MMAudio+AS")}
          ${audioCell(demo, "omniaudioText", "OmniAudio (text)")}
          ${audioCell(demo, "swansphere", "SwanSphere")}
        </div>
      </article>`;
  }

  function renderT2SA() {
    return `
      <section id="swansphere-t2sa" class="demo-group demo-segment sphere-demo-segment">
        <div class="demo-group-header">
          <div>
            <div class="demo-group-index">02</div>
            <h3>Comparisons with Baselines: Text-to-Spatial Audio</h3>
          </div>
          <p>Text prompts are paired with ground-truth and baseline spatial audio for compact comparison.</p>
        </div>
        <div class="sphere-demo-stack">
          ${t2saDemos.map(renderT2SASample).join("")}
        </div>
      </section>`;
  }

  function render(activeId = getActiveId()) {
    return `
      <div id="swansphere-demo" class="center-copy demo-anchor">
        <h2>Demos</h2>
        <p>
          Use headphones for spatial playback. The source demos are organized
          into video-to-spatial and text-to-spatial comparisons.
        </p>
        ${tabNav(activeId)}
      </div>
      ${activeId === "swansphere-t2sa" ? renderT2SA() : renderV2SA()}`;
  }

  function setStatus(button, text) {
    const status = button
      .closest(".sphere-cell, [data-sphere-audio-row]")
      ?.querySelector(".sphere-status");
    if (status) status.textContent = text;
  }

  function getPlayerParts(player) {
    return {
      button: player.querySelector("[data-sphere-play]"),
      seek: player.querySelector("[data-sphere-seek]"),
      time: player.querySelector("[data-sphere-time]"),
    };
  }

  function formatTime(seconds) {
    const safeSeconds = Math.max(0, Number.isFinite(seconds) ? seconds : 0);
    const mins = Math.floor(safeSeconds / 60);
    const secs = Math.floor(safeSeconds % 60);
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }

  function playerElapsed(playback = activePlayback) {
    if (!playback) return 0;
    if (!playback.isPlaying) return playback.offset;
    return Math.min(
      playback.buffer.duration,
      playback.offset + audioContext.currentTime - playback.startedAt
    );
  }

  function setPlayerPosition(player, elapsed, duration) {
    const parts = getPlayerParts(player);
    const safeDuration = Math.max(0, duration || Number(player.dataset.duration) || 0);
    const safeElapsed = Math.max(0, Math.min(elapsed || 0, safeDuration || 0));
    if (parts.seek) {
      parts.seek.value = safeDuration ? String((safeElapsed / safeDuration) * 1000) : "0";
    }
    if (parts.time) {
      parts.time.textContent = safeDuration
        ? `${formatTime(safeElapsed)} / ${formatTime(safeDuration)}`
        : formatTime(safeElapsed);
    }
  }

  function setPlayerLoading(player, isLoading) {
    const parts = getPlayerParts(player);
    player.classList.toggle("is-loading", isLoading);
    if (parts.button) {
      parts.button.textContent = isLoading ? "Loading" : "Play";
      parts.button.disabled = isLoading;
    }
  }

  function setPlayerPlaying(player, isPlaying) {
    const parts = getPlayerParts(player);
    player.classList.toggle("is-playing", isPlaying);
    if (parts.button) {
      parts.button.textContent = isPlaying ? "Pause" : "Play";
      parts.button.disabled = false;
    }
  }

  function startProgress() {
    if (progressFrame) cancelAnimationFrame(progressFrame);
    const tick = () => {
      if (!activePlayback?.player) return;
      const elapsed = playerElapsed(activePlayback);
      setPlayerPosition(
        activePlayback.player,
        elapsed,
        activePlayback.buffer.duration
      );
      progressFrame = requestAnimationFrame(tick);
    };
    progressFrame = requestAnimationFrame(tick);
  }

  function stopProgress() {
    if (progressFrame) cancelAnimationFrame(progressFrame);
    progressFrame = null;
  }

  function getThree() {
    return window.THREE || window.AFRAME?.THREE || null;
  }

  function quaternionToMatrix3(out, q) {
    const x = q.x;
    const y = q.y;
    const z = q.z;
    const w = q.w;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = xy - wz;
    out[4] = 1 - xx - zz;
    out[5] = yz + wx;
    out[6] = xz + wy;
    out[7] = yz - wx;
    out[8] = 1 - xx - yy;
  }

  function syncRotation() {
    if (foaRenderer && activeCamera?.object3D) {
      const Three = getThree();
      if (Three) {
        quaternion = quaternion || new Three.Quaternion();
        activeCamera.object3D.getWorldQuaternion(quaternion);
        quaternion.invert();
        quaternionToMatrix3(rotationMatrix, quaternion);
        foaRenderer.setRotationMatrix3(rotationMatrix);
      }
    }
    rotationFrame = requestAnimationFrame(syncRotation);
  }

  function startRotationSync() {
    if (!rotationFrame) rotationFrame = requestAnimationFrame(syncRotation);
  }

  function stopRotationSync() {
    if (rotationFrame) cancelAnimationFrame(rotationFrame);
    rotationFrame = null;
    activeCamera = null;
  }

  async function ensureAudio() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state !== "running") await audioContext.resume();
    if (!foaRenderer) {
      await ensureOmnitone();
      if (!window.Omnitone) {
        throw new Error("Omnitone is not loaded.");
      }
      foaRenderer = window.Omnitone.createFOARenderer(audioContext);
      await foaRenderer.initialize();
      foaRenderer.output.connect(audioContext.destination);
    }
  }

  function stopAudio({ resetPlayer = true } = {}) {
    stopRotationSync();
    stopProgress();
    if (activeAudioSource) {
      try {
        activeAudioSource.onended = null;
        activeAudioSource.stop();
      } catch {}
      try {
        activeAudioSource.disconnect();
      } catch {}
      activeAudioSource = null;
    }
    if (activePlayback) {
      if (resetPlayer) {
        activePlayback.player.dataset.offset = "0";
        setPlayerPosition(activePlayback.player, 0, activePlayback.buffer?.duration);
        setPlayerPlaying(activePlayback.player, false);
        activePlayback = null;
      } else {
        activePlayback.offset = playerElapsed(activePlayback);
        activePlayback.isPlaying = false;
        activePlayback.source = null;
        activePlayback.player.dataset.offset = String(activePlayback.offset);
        setPlayerPosition(
          activePlayback.player,
          activePlayback.offset,
          activePlayback.buffer?.duration
        );
        setPlayerPlaying(activePlayback.player, false);
      }
    }
  }

  function decodeWAV(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    let offset = 12;
    let format = null;
    let dataOffset = 0;
    let dataSize = 0;
    while (offset < view.byteLength) {
      const id = String.fromCharCode(
        view.getUint8(offset),
        view.getUint8(offset + 1),
        view.getUint8(offset + 2),
        view.getUint8(offset + 3)
      );
      const size = view.getUint32(offset + 4, true);
      if (id === "fmt ") {
        format = {
          channels: view.getUint16(offset + 10, true),
          sampleRate: view.getUint32(offset + 12, true),
          bitsPerSample: view.getUint16(offset + 22, true),
        };
      } else if (id === "data") {
        dataOffset = offset + 8;
        dataSize = size;
      }
      offset += 8 + size;
    }
    if (!format || !dataOffset || format.bitsPerSample !== 16) {
      throw new Error("Unsupported WAV format.");
    }

    const bytesPerSample = format.bitsPerSample / 8;
    const sampleCount = dataSize / (format.channels * bytesPerSample);
    const audioBuffer = audioContext.createBuffer(
      format.channels,
      sampleCount,
      format.sampleRate
    );
    const raw = new DataView(arrayBuffer, dataOffset, dataSize);
    for (let ch = 0; ch < format.channels; ch += 1) {
      const chData = audioBuffer.getChannelData(ch);
      for (let i = 0; i < sampleCount; i += 1) {
        const bytePos = (i * format.channels + ch) * bytesPerSample;
        chData[i] = raw.getInt16(bytePos, true) / 32768;
      }
    }
    return audioBuffer;
  }

  async function getAudioBuffer(url) {
    await ensureAudio();
    if (audioBufferCache.has(url)) return audioBufferCache.get(url);
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const audioBuffer = decodeWAV(buffer);
    audioBufferCache.set(url, audioBuffer);
    return audioBuffer;
  }

  async function playFOA(url, offset = 0) {
    const audioBuffer = await getAudioBuffer(url);
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(foaRenderer.input);
    source.start(0, offset);
    activeAudioSource = source;
    return { source, audioBuffer };
  }

  function pauseActivePlayer() {
    if (!activePlayback) return;
    stopAudio({ resetPlayer: false });
  }

  async function startInlinePlayer(player, offset = 0) {
    const url = player.dataset.audioUrl;
    stopPlayback();
    setPlayerLoading(player, true);
    try {
      const { source, audioBuffer } = await playFOA(url, offset);
      player.dataset.duration = String(audioBuffer.duration);
      player.dataset.offset = String(offset);
      activePlayback = {
        player,
        source,
        buffer: audioBuffer,
        offset,
        startedAt: audioContext.currentTime,
        isPlaying: true,
      };
      source.onended = () => {
        if (activePlayback?.source !== source) return;
        stopProgress();
        setPlayerPosition(player, 0, audioBuffer.duration);
        setPlayerPlaying(player, false);
        player.dataset.offset = "0";
        activePlayback = null;
        activeAudioSource = null;
      };
      setPlayerLoading(player, false);
      setPlayerPlaying(player, true);
      setPlayerPosition(player, offset, audioBuffer.duration);
      startProgress();
    } catch (error) {
      console.error(error);
      setPlayerLoading(player, false);
      const parts = getPlayerParts(player);
      if (parts.time) parts.time.textContent = "Failed";
    }
  }

  async function toggleInlinePlayer(button) {
    const player = button.closest("[data-sphere-player]");
    if (!player) return;

    if (activePlayback?.player === player && activePlayback.isPlaying) {
      pauseActivePlayer();
      return;
    }

    const offset =
      activePlayback?.player === player
        ? activePlayback.offset
        : Number(player.dataset.offset || 0);
    await startInlinePlayer(player, offset);
  }

  function seekInlinePlayer(input) {
    const player = input.closest("[data-sphere-player]");
    if (!player) return;
    const duration =
      activePlayback?.player === player
        ? activePlayback.buffer.duration
        : Number(player.dataset.duration || 0);
    if (!duration) return;
    const offset = (Number(input.value) / 1000) * duration;
    player.dataset.offset = String(offset);
    setPlayerPosition(player, offset, duration);
    if (activePlayback?.player === player && activePlayback.isPlaying) {
      startInlinePlayer(player, offset);
    } else if (activePlayback?.player === player) {
      activePlayback.offset = offset;
    }
  }

  function mountVideoScene(viewer, videoId, videoSrc, cameraId) {
    if (!document.getElementById(videoId)) {
      viewer.innerHTML = `
        <a-scene embedded vr-mode-ui="enabled:false" loading-screen="enabled:false">
          <a-assets>
            <video id="${videoId}" src="${videoSrc}" crossorigin="anonymous" preload="auto" playsinline webkit-playsinline></video>
          </a-assets>
          <a-entity id="${cameraId}" camera look-controls position="0 1.6 0"></a-entity>
          <a-videosphere src="#${videoId}" rotation="0 -90 0"></a-videosphere>
        </a-scene>`;
    }

    return {
      video: document.getElementById(videoId),
      camera: document.getElementById(cameraId),
    };
  }

  async function play(button) {
    if (button.closest("[data-sphere-player]")) {
      await toggleInlinePlayer(button);
      return;
    }

    stopPlayback();
    setStatus(button, "Loading");
    const videoId = button.dataset.videoId;
    const cameraId = button.dataset.cameraId;
    const audioUrl = button.dataset.audioUrl;

    try {
      if (videoId) {
        await ensureAFrame();
        const viewer = button
          .closest(".sphere-cell")
          ?.querySelector("[data-sphere-viewer]");
        const mounted = mountVideoScene(
          viewer,
          videoId,
          button.dataset.videoSrc,
          cameraId
        );
        const video = mounted.video;
        if (video) {
          video.muted = true;
          video.currentTime = 0;
          await video.play();
        }
      }
      await playFOA(audioUrl);
      if (cameraId) {
        activeCamera = document.getElementById(cameraId);
        startRotationSync();
      }
      setStatus(button, "Playing");
    } catch (error) {
      console.error(error);
      setStatus(button, "Failed");
    }
  }

  function stopAll() {
    stopPlayback();
    document.querySelectorAll(".sphere-demo-segment a-scene").forEach((scene) => {
      try {
        scene.renderer?.dispose?.();
        scene.renderer?.forceContextLoss?.();
      } catch {}
    });
  }

  function stopPlayback() {
    document.querySelectorAll(".sphere-demo-segment video").forEach((video) => {
      try {
        video.pause();
        video.currentTime = 0;
      } catch {}
    });
    stopAudio();
  }

  function init() {
    document.querySelectorAll("[data-sphere-play]").forEach((button) => {
      button.addEventListener("click", () => play(button));
    });

    document.querySelectorAll("[data-sphere-seek]").forEach((input) => {
      input.addEventListener("input", () => {
        const player = input.closest("[data-sphere-player]");
        const duration =
          activePlayback?.player === player
            ? activePlayback.buffer.duration
            : Number(player?.dataset.duration || 0);
        if (duration) {
          setPlayerPosition(player, (Number(input.value) / 1000) * duration, duration);
        }
      });
      input.addEventListener("change", () => seekInlinePlayer(input));
    });

    document.querySelectorAll("[data-sphere-stop]").forEach((button) => {
      button.addEventListener("click", () => {
        stopPlayback();
        setStatus(button, "Stopped");
      });
    });
  }

  window.swanSphereDemos = {
    activeId: getActiveId,
    hashes: tabs.map((tab) => tab.id),
    init,
    render,
    stopAll,
  };
})();
