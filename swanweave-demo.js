(function () {
  const ASSET_BASE =
    "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanweave/assets";
  const OMNITONE_SRC =
    "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swansphere/assets/lib/omnitone.min.js";
  const asset = (path) => `${ASSET_BASE}/${path}`;

  const METHODS = [
    { id: "origin", label: "Source", file: "origin.wav", kind: "foa" },
    { id: "sdedit", label: "SDEdit", file: "sdedit.wav", kind: "stereo" },
    {
      id: "audioeditor",
      label: "AudioEditor",
      file: "audioeditor.wav",
      kind: "stereo",
    },
    { id: "smartdj", label: "SmartDJ", file: "smartdj.wav", kind: "stereo" },
    { id: "ours", label: "SwanWeave", file: "ours.wav", kind: "foa" },
  ];

  const SECTIONS = [
    {
      id: "add",
      title: "Add",
      summary:
        "Insert a new sound event while preserving the rest of the scene.",
      samples: ["00001948", "00005700", "00006080"],
    },
    {
      id: "remove",
      title: "Remove",
      summary:
        "Remove the specified sound event from the spatial mixture.",
      samples: ["00005163", "00005227", "00014933"],
    },
    {
      id: "extract",
      title: "Extract",
      summary:
        "Keep the requested source and remove unrelated audio events.",
      samples: ["00005073", "00009100", "00014169", "00026159"],
    },
    {
      id: "angle_change",
      title: "Angle Change",
      summary:
        "Change the angular position of a specified sound event.",
      samples: ["00003552", "00004656", "00006354"],
    },
    {
      id: "distance_change",
      title: "Distance Change",
      summary:
        "Change the distance position of a specified sound event.",
      samples: ["00000144", "00000964", "00003315", "00003842"],
    },
    {
      id: "room_change",
      title: "Room Change",
      summary:
        "Transfer the acoustic room character for the edited sound field.",
      samples: ["00009704", "00015514", "00016354"],
    },
    {
      id: "angle_motion",
      title: "Angle Motion",
      summary: "Move a specified sound event dynamically around you.",
      samples: ["00013774", "00015392", "00021964", "00028953"],
    },
    {
      id: "distance_motion",
      title: "Distance Motion",
      summary:
        "Edit motion toward or away from the listener dynamically.",
      samples: ["00000360", "00006987", "00009671"],
    },
    {
      id: "multi",
      title: "Multi",
      summary: "Perform multiple editing tasks at once.",
      samples: [
        "00034713op3",
        "00031229op3",
        "00020065",
        "00009244op4",
        "00005344",
      ],
    },
  ];

  const CAPTIONS = {
    add: {
      "00001948":
        "Add a Clapping noise ahead on the right, a short distance away.",
      "00005700":
        "Add a Burping and eructation sound directly to your left, nearby.",
      "00006080":
        "Place the Bicycle bell sound ahead in front, a moderate distance away.",
    },
    remove: {
      "00005163": "remove the Bass drum sound.",
      "00005227": "Eliminate the cow mooing sound.",
      "00014933": "Remove the Zipper (clothing) from the scene.",
    },
    extract: {
      "00005073": "Remove all sounds except the explosion.",
      "00009100": "Strip away everything but the Zipper (clothing).",
      "00014169": "Keep the Tick-tock and remove all other audio.",
      "00026159": "Extract the Chirp and tweet from the mix.",
    },
    angle_change: {
      "00003552":
        "Relocate the sheep goat bleating from ahead on the right to ahead on the left, without changing distance.",
      "00004656":
        "Move the Squeak sound around you from directly to your left to behind on the right.",
      "00006354":
        "Take the door knocking from ahead on the right and shift it to behind, same distance.",
    },
    distance_change: {
      "00000144":
        "Move the Bark sound farther away, from behind on the right, a short distance away to behind on the right, a fair distance away.",
      "00000964":
        "Take the Mechanical fan from ahead on the left, a short distance away and push it farther to ahead on the left, a fair distance away.",
      "00003315":
        "Relocate the Scissors from directly to your left, a moderate distance away to directly to your left, a short distance away, closer to you.",
      "00003842":
        "Extend the spraying sound from directly behind, nearby out to directly behind, a fair distance away.",
    },
    room_change: {
      "00009704": "Shrink the room to a small space.",
      "00015514": "Switch from a large room to a huge room.",
      "00016354": "Shrink the acoustic space to medium.",
    },
    angle_motion: {
      "00013774":
        "Make the Gasp circle around you from directly to your right to behind on the left.",
      "00015392":
        "Make the Shatter arc from directly left to directly to your right at a constant distance.",
      "00021964":
        "Let the Screaming revolve around you from behind on the right to directly in front.",
      "00028953":
        "Let the Writing travel along an arc from ahead on the right to directly to your left.",
    },
    distance_motion: {
      "00000360":
        "Make the Trickle and dribble sound approach from behind on the right gradually.",
      "00006987":
        "Make the Applause gradually recede from ahead on the right.",
      "00009671":
        "The Mechanical fan advances from directly to your right toward you.",
    },
    multi: {
      "00034713op3":
        "Have the traffic and roadway noise recede from directly to your left, while adding cutlery and silverware nearby behind-left and a gunshot a short distance to the right.",
      "00031229op3":
        "Make the cat meowing quieter, move the burping sound from behind-left to directly behind you, and place applause and cheering a short distance to the right.",
      "00020065":
        "Shift the shattering sound from directly behind to an elevated position behind-right, and add a cricket sound directly behind at a short distance.",
      "00009244op4":
        "Move the door knocking to the left and make it louder, while the accelerating engine sound travels from behind-right toward front-right and a bird chirp is added on the left.",
      "00005344":
        "Remove the writing sound from the scene, and insert a nearby scissors sound ahead-left.",
    },
  };

  const REAL_FOA = [
    { id: "-3GumCmyAIk", file: "-3GumCmyAIk.wav", caption: "Raw wav" },
    {
      id: "000004",
      file: "000004.wav",
      caption: "Boost the volume of the Marimba.",
    },
    {
      id: "000005",
      file: "000005.wav",
      caption: "Lower the volume of the Marimba.",
    },
    {
      id: "000006",
      file: "000006.wav",
      caption: "Make the Marimba gradually get louder.",
    },
    {
      id: "000010",
      file: "000010.wav",
      caption:
        "Change the direction of the Marimba from ahead on the right to directly behind.",
    },
    {
      id: "000013",
      file: "000013.wav",
      caption:
        "Make the Marimba sweep from ahead on the right to ahead on the left around you.",
    },
    {
      id: "000014",
      file: "000014.wav",
      caption:
        "Transfer the Marimba from ahead on the right to a new spot behind on the left, above.",
    },
    {
      id: "000021",
      file: "000021.wav",
      caption:
        "Let the Marimba grow more distant from ahead on the right over time.",
    },
  ];

  const tabs = [
    { id: "swanweave-add", label: "Add", sectionId: "add" },
    { id: "swanweave-remove", label: "Remove", sectionId: "remove" },
    { id: "swanweave-extract", label: "Extract", sectionId: "extract" },
    {
      id: "swanweave-angle_change",
      label: "Angle Change",
      sectionId: "angle_change",
    },
    {
      id: "swanweave-distance_change",
      label: "Distance Change",
      sectionId: "distance_change",
    },
    {
      id: "swanweave-room_change",
      label: "Room Change",
      sectionId: "room_change",
    },
    {
      id: "swanweave-angle_motion",
      label: "Angle Motion",
      sectionId: "angle_motion",
    },
    {
      id: "swanweave-distance_motion",
      label: "Distance Motion",
      sectionId: "distance_motion",
    },
    { id: "swanweave-multi", label: "Multi", sectionId: "multi" },
    { id: "swanweave-real_foa", label: "Real FOA", sectionId: "real_foa" },
  ];

  let audioContext = null;
  let foaRenderer = null;
  let activeAudioSource = null;
  let activePlayback = null;
  let progressFrame = null;
  const audioBufferCache = new Map();
  let omnitonePromise = null;

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
    return tabs.some((tab) => tab.id === hash) ? hash : tabs[0].id;
  }

  function tabNav(activeId) {
    return `
      <div class="demo-tab-nav" aria-label="SwanWeave demo sections">
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

  function getPlayerParts(player) {
    return {
      button: player.querySelector("[data-weave-play]"),
      seek: player.querySelector("[data-weave-seek]"),
      time: player.querySelector("[data-weave-time]"),
    };
  }

  function formatTime(seconds) {
    const safeSeconds = Math.max(
      0,
      Number.isFinite(seconds) ? seconds : 0
    );
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
    const safeDuration = Math.max(
      0,
      duration || Number(player.dataset.duration) || 0
    );
    const safeElapsed = Math.max(
      0,
      Math.min(elapsed || 0, safeDuration || 0)
    );
    if (parts.seek) {
      parts.seek.value = safeDuration
        ? String((safeElapsed / safeDuration) * 1000)
        : "0";
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
        setPlayerPosition(
          activePlayback.player,
          0,
          activePlayback.buffer?.duration
        );
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

  // Returns a per-sample reader normalizing to [-1, 1], or null if unsupported.
  // formatTag: 1 = integer PCM, 3 = IEEE float.
  function pickSampleReader(formatTag, bits) {
    if (formatTag === 3) {
      if (bits === 32) return (raw, pos) => raw.getFloat32(pos, true);
      if (bits === 64) return (raw, pos) => raw.getFloat64(pos, true);
      return null;
    }
    if (formatTag !== 1) return null;
    if (bits === 8) return (raw, pos) => raw.getUint8(pos) / 128 - 1;
    if (bits === 16) return (raw, pos) => raw.getInt16(pos, true) / 32768;
    if (bits === 24) {
      return (raw, pos) => {
        const b0 = raw.getUint8(pos);
        const b1 = raw.getUint8(pos + 1);
        const b2 = raw.getUint8(pos + 2);
        let val = (b2 << 16) | (b1 << 8) | b0;
        if (val & 0x800000) val |= ~0xffffff; // sign-extend 24-bit
        return val / 8388608;
      };
    }
    if (bits === 32) return (raw, pos) => raw.getInt32(pos, true) / 2147483648;
    return null;
  }

  function decodeWAV(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    let offset = 12;
    let format = null;
    let dataOffset = 0;
    let dataSize = 0;
    while (offset + 8 <= view.byteLength) {
      const id = String.fromCharCode(
        view.getUint8(offset),
        view.getUint8(offset + 1),
        view.getUint8(offset + 2),
        view.getUint8(offset + 3)
      );
      const size = view.getUint32(offset + 4, true);
      if (id === "fmt ") {
        let formatTag = view.getUint16(offset + 8, true);
        // WAVE_FORMAT_EXTENSIBLE: the real format lives in the SubFormat GUID.
        if (formatTag === 0xfffe && size >= 40) {
          formatTag = view.getUint16(offset + 32, true);
        }
        format = {
          formatTag,
          channels: view.getUint16(offset + 10, true),
          sampleRate: view.getUint32(offset + 12, true),
          bitsPerSample: view.getUint16(offset + 22, true),
        };
      } else if (id === "data") {
        dataOffset = offset + 8;
        dataSize = size;
      }
      offset += 8 + size + (size % 2); // RIFF chunks are word-aligned
    }
    if (!format || !dataOffset) {
      throw new Error("Unsupported WAV format.");
    }

    const { formatTag, bitsPerSample, channels, sampleRate } = format;
    const readSample = pickSampleReader(formatTag, bitsPerSample);
    if (!readSample) {
      throw new Error(
        `Unsupported WAV format (tag=${formatTag}, bits=${bitsPerSample}).`
      );
    }

    const bytesPerSample = bitsPerSample / 8;
    const sampleCount = Math.floor(dataSize / (channels * bytesPerSample));
    const audioBuffer = audioContext.createBuffer(
      channels,
      sampleCount,
      sampleRate
    );
    const raw = new DataView(arrayBuffer, dataOffset, dataSize);
    for (let ch = 0; ch < channels; ch += 1) {
      const chData = audioBuffer.getChannelData(ch);
      for (let i = 0; i < sampleCount; i += 1) {
        const bytePos = (i * channels + ch) * bytesPerSample;
        chData[i] = readSample(raw, bytePos);
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
    const player = button.closest("[data-weave-player]");
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
    const player = input.closest("[data-weave-player]");
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

  function stopPlayback() {
    stopAudio();
  }

  function stopAll() {
    stopPlayback();
  }

  function foaPlayer(url, label) {
    return `
      <div class="sphere-native-player" data-weave-player data-audio-url="${escapeHtml(
        url
      )}" data-offset="0">
        <button class="sphere-play-toggle" type="button" data-weave-play aria-label="Play ${escapeHtml(
          label
        )}">Play</button>
        <span class="sphere-spatial-dot" aria-hidden="true"></span>
        <input class="sphere-seek" type="range" min="0" max="1000" value="0" step="1" data-weave-seek aria-label="${escapeHtml(
          label
        )} progress" />
        <span class="sphere-time" data-weave-time>0:00</span>
      </div>`;
  }

  function stereoPlayer(url, label) {
    return `
      <audio controls preload="none" data-src="${escapeHtml(
        url
      )}" data-audio-type="audio/wav" aria-label="${escapeHtml(label)}"></audio>`;
  }

  function methodPlayer(method, sectionId, sampleId) {
    const url = asset(`audios/${sectionId}/${sampleId}/${method.file}`);
    return method.kind === "foa"
      ? foaPlayer(url, method.label)
      : stereoPlayer(url, method.label);
  }

  function spectroFrame(method, sectionId, sampleId, alt) {
    const url = asset(
      `spectrograms/${sectionId}/${sampleId}/${method.id}.png`
    );
    return `
      <div class="weave-spectro-frame">
        <img loading="lazy" decoding="async" src="${escapeHtml(
          url
        )}" alt="${escapeHtml(alt)} — ${escapeHtml(method.label)}" />
      </div>`;
  }

  function methodColumn(method, sectionId, sampleId, caption) {
    const isOurs = method.id === "ours";
    return `
      <div class="sphere-cell weave-col ${isOurs ? "is-ours" : ""}">
        <div class="sphere-cell-title">
          <span>${escapeHtml(method.label)}</span>
          <small class="weave-kind">${
            method.kind === "foa" ? "FOA" : "Stereo"
          }</small>
        </div>
        ${spectroFrame(method, sectionId, sampleId, caption)}
        ${methodPlayer(method, sectionId, sampleId)}
      </div>`;
  }

  function renderEditSample(sectionId, sampleId, caption, index) {
    return `
      <article class="sphere-sample weave-sample">
        <div class="sphere-sample-head weave-sample-head">
          <span>Sample ${String(index + 1).padStart(2, "0")} · ${escapeHtml(
      sampleId
    )}</span>
          <span>Edit instruction</span>
        </div>
        <div class="sphere-prompt-card weave-caption-card">${escapeHtml(
          caption
        )}</div>
        <div class="sphere-table weave-cols-5">
          ${METHODS.map((m) =>
            methodColumn(m, sectionId, sampleId, caption)
          ).join("")}
        </div>
      </article>`;
  }

  function renderSection(section) {
    const sampleRows = section.samples
      .map((sampleId, i) => {
        const caption =
          (CAPTIONS[section.id] && CAPTIONS[section.id][sampleId]) ||
          sampleId;
        return renderEditSample(section.id, sampleId, caption, i);
      })
      .join("");

    return `
      <section id="swanweave-${section.id}" class="demo-group demo-segment weave-demo-segment">
        <div class="demo-group-header">
          <div>
            <div class="demo-group-index">${String(
              SECTIONS.indexOf(section) + 1
            ).padStart(2, "0")}</div>
            <h3>${escapeHtml(section.title)}</h3>
          </div>
          <p>${escapeHtml(section.summary)}</p>
        </div>
        <div class="sphere-demo-stack">
          ${sampleRows}
        </div>
      </section>`;
  }

  function renderRealFoa() {
    const cards = REAL_FOA.map((item, idx) => {
      const url = asset(`audios/real_foa/${item.file}`);
      return `
        <article class="sphere-sample weave-sample weave-real-card">
          <div class="sphere-sample-head weave-sample-head">
            <span>Sample ${String(idx + 1).padStart(2, "0")} · ${escapeHtml(
        item.id
      )}</span>
            <span>Real recording · FOA</span>
          </div>
          <div class="sphere-prompt-card weave-caption-card">${escapeHtml(
            item.caption
          )}</div>
          <div class="weave-real-player">
            <span class="weave-real-tag">SwanWeave · FOA</span>
            ${foaPlayer(url, `SwanWeave sample ${idx + 1}`)}
          </div>
        </article>`;
    }).join("");

    return `
      <section id="swanweave-real_foa" class="demo-group demo-segment weave-demo-segment">
        <div class="demo-group-header">
          <div>
            <div class="demo-group-index">10</div>
            <h3>Real FOA Recordings</h3>
          </div>
          <p>Edits applied to real YouTube recordings (Marimba spatial scene). All outputs are 4-channel FOA decoded to binaural in-browser.</p>
        </div>
        <div class="sphere-demo-stack">
          ${cards}
        </div>
      </section>`;
  }

  function renderActive(activeId) {
    const tab = tabs.find((t) => t.id === activeId);
    if (!tab) return "";
    if (tab.sectionId === "real_foa") return renderRealFoa();
    const section = SECTIONS.find((s) => s.id === tab.sectionId);
    return section ? renderSection(section) : "";
  }

  function render() {
    const activeId = getActiveId();
    return `
      <div id="swanweave-demo" class="weave-demo-shell">
        <div class="demo-group-title-shell">
          <h2>Editing demos</h2>
          <p>Select an editing task below. Source and SwanWeave are 4-channel FOA decoded to binaural via Omnitone; baselines are plain stereo.</p>
          ${tabNav(activeId)}
        </div>
        ${renderActive(activeId)}
        ${window.swanDemoPager?.(tabs, activeId) || ""}
      </div>`;
  }

  function init() {
    document.querySelectorAll("[data-weave-play]").forEach((button) => {
      button.addEventListener("click", () => toggleInlinePlayer(button));
    });

    document.querySelectorAll("[data-weave-seek]").forEach((input) => {
      input.addEventListener("input", () => {
        const player = input.closest("[data-weave-player]");
        const duration =
          activePlayback?.player === player
            ? activePlayback.buffer.duration
            : Number(player?.dataset.duration || 0);
        if (duration) {
          setPlayerPosition(
            player,
            (Number(input.value) / 1000) * duration,
            duration
          );
        }
      });
      input.addEventListener("change", () => seekInlinePlayer(input));
    });
  }

  window.swanWeaveDemos = {
    activeId: getActiveId,
    hashes: tabs.map((tab) => tab.id),
    init,
    render,
    stopAll,
  };
})();
