const abstractText =
  "Zero-shot text-to-speech (TTS) has advanced rapidly for single-speaker synthesis, but expressive long-form multi-speaker dialogue remains challenging. A common workaround is to synthesize each turn independently with a monologue TTS model and stitch the outputs together, which increases inference cost and often harms acoustic consistency, conversational coherence, and affective continuity across turns. Existing dialogue TTS systems mitigate this issue, but still struggle with expressive coherence, controllable speaker switching, and preserving monologue quality. We present SwanData-Speech and SwanVoice. SwanData-Speech is a scalable pipeline for constructing high-quality and expressive monologue and dialogue corpora from in-the-wild audio, with Swan Forced Aligner for pause-aware word-level alignment and RobustMegaTTS3 for pronunciation hard cases. Built on these data, SwanVoice is a unified zero-shot TTS model for 1-4 speakers, combining a 25 Hz VAE, raw-text conditioning with pause-aware symbols and pinyin substitution, and a flow-matching DiT with speaker-turn conditioning. We further adopt curriculum learning to balance monologue quality, dialogue controllability, and expressiveness, and apply DiffusionNFT post-training to improve robustness and speaker similarity. Experiments show competitive performance in both monologue and dialogue generation, with strong expressiveness and cross-turn consistency.";

const benchAbstractText =
  'Recent advances in speech generation have enabled high-fidelity synthesis, yet systematic evaluation of models under long-context conditions remains largely underexplored. A comprehensive evaluation benchmark for long-form speech is indispensable for two reasons: 1) existing test scenarios are often confined to limited domains, creating a significant gap with the diverse downstream applications; 2) existing metrics overlook critical long-text factors such as consistency and coherence, failing to generalize reliably. To this end, we propose SwanBench-Speech, a comprehensive benchmark that decomposes "long-form speech quality" into specific, disentangled dimensions. SwanBench-Speech has three key properties. <strong>1) Rich speech scenarios</strong>: Focusing on long-form speech generation and dialog generation, SwanBench-Speech covers acoustics, semantics, and expressiveness challenges, and consists of 1,101 samples spanning 17 common speech scenarios; <strong>2) Comprehensive evaluation dimensions</strong>: Along the acoustics, semantics, and expressiveness axes, SwanBench-Speech defines an automated evaluation protocol with seven metrics to provide a comprehensive, accurate, and standardized assessment; <strong>3) Valuable Insights</strong>: Through extensive experiments, we reveal that current models still struggle in highly expressive scenarios and exhibit a notable gap in consistency and hierarchy compared to real recordings.';

const demoGroups = [
  {
    index: "01",
    title: "Single Speaker",
    summary: "Expressive zero-shot monologue synthesis from a short reference.",
    samples: [
      {
        title: "大司马",
        text: "兄弟们这波你千万不要急，表面上看是能开，实际上你一进去就会发现伤害不够、位置也不好，到时候不是你在操作，是对面在操作你。",
        references: [{ label: "Reference", src: "swanvoice-audio/ref/大司马.wav" }],
        generated: "swanvoice-audio/gen/dsm_single_01.wav",
      },
      {
        title: "Dehua",
        text: "我一直觉得，观众最后记住你的，不一定是最热闹的那场戏，反而常常是一个很轻的眼神，或者一句很普通、但你说得特别真的台词。",
        references: [{ label: "Reference", src: "swanvoice-audio/ref/dehua.wav" }],
        generated: "swanvoice-audio/gen/dehua_single_01.wav",
      },
      {
        title: "Huang Renxun",
        text: "The next generation of computing will not be defined by a single device. It will be defined by intelligence moving through every system, every workflow, and every creative tool people use.",
        references: [
          { label: "Reference", src: "swanvoice-audio/ref/huangrenxun.wav" },
        ],
        generated: "swanvoice-audio/gen/huangrenxun_single_01.wav",
      },
      {
        title: "Emma Watson",
        text: "If we want technology to serve people well, then we have to keep asking who gets heard, who gets represented, and who is left out of the room.",
        references: [
          { label: "Reference", src: "swanvoice-audio/ref/Emmawaltson.wav" },
        ],
        generated: "swanvoice-audio/gen/emma_single_01.wav",
      },
    ],
  },
  {
    index: "02",
    title: "Two Speaker",
    summary: "Turn-aware dialogue synthesis with speaker identity and affective continuity.",
    samples: [
      {
        title: "大司马 x 卢本伟",
        text:
          "S1: 你先别喊，这波不是打不过，是根本不该接。兵线那么差，视野也没有，你冲进去那就是节目效果。\n" +
          "S2: 什么节目效果！我状态拉满，技能全在，你再给我一次我直接把对面打成教学素材。\n" +
          "S1: 你这个想法就很有问题，游戏不是看谁声音大，是看谁站得住位置。\n" +
          "S2: 行，那下一波你指挥，我来操作。要是打赢了你记得承认，是我把这盘硬生生抬起来的。",
        references: [
          { label: "S1 Reference", src: "swanvoice-audio/ref/大司马.wav" },
          { label: "S2 Reference", src: "swanvoice-audio/ref/卢本伟.wav" },
        ],
        generated: "swanvoice-audio/gen/dsm_lbw_duo_01.wav",
      },
      {
        title: "Obama x Trump",
        text:
          "S1: Leadership is not just about saying what people want to hear. It is about making hard choices when the room is divided.\n" +
          "S2: People want strength, they want results, and they want leaders who do what they say. That is what they care about.\n" +
          "S1: Strength without trust does not hold for very long. A nation also needs patience, seriousness, and institutions people believe in.\n" +
          "S2: Institutions are fine, but if they fail the people, then the people want change, and they want it fast.",
        references: [
          { label: "S1 Reference", src: "swanvoice-audio/ref/obama.wav" },
          { label: "S2 Reference", src: "swanvoice-audio/ref/trump.wav" },
        ],
        generated: "swanvoice-audio/gen/obama_trump_duo_01.wav",
      },
      {
        title: "胡万 x 六爷",
        text:
          "S1: 六爷，我承认我说话冲了，可这事总得让我说个明白，不能一句规矩就把人摁死了吧。\n" +
          "S2: 规矩就是规矩！你平时拿它当笑话，到了出事的时候，又想拿道理来救自己？\n" +
          "S1: 那也得分是非黑白，不能谁嗓门大谁就占理。\n" +
          "S2: 你少给我绕弯子，今天这事儿，不是你服不服，是全城的人都在看服不服！",
        references: [
          { label: "S1 Reference", src: "swanvoice-audio/ref/让子弹飞胡万.wav" },
          { label: "S2 Reference", src: "swanvoice-audio/ref/让子弹飞六爷.wav" },
        ],
        generated: "swanvoice-audio/gen/huwan_liuye_duo_01.wav",
      },
      {
        title: "Skyler & Ted",
        text:
          "S1: You keep saying it will calm down, but nothing about this is calming down. It is getting bigger every single day.\n" +
          "S2: I understand that, I do, but making one desperate move tonight could make everything even worse.\n" +
          "S1: Doing nothing is also a move, and right now it is the one that is killing us.\n" +
          "S2: Then help me find the version of this that does not destroy everything all at once.",
        references: [
          { label: "Dialogue Ref", src: "swanvoice-audio/ref/skyler_and_ted.wav" },
        ],
        generated: "swanvoice-audio/gen/skyler_ted_duo_01.wav",
      },
    ],
  },
  {
    index: "03",
    title: "Four Speaker",
    summary: "Unified 1-4 speaker generation for long-form group conversations.",
    samples: [
      {
        title: "Dehua x Jialing x Jay x DZQ",
        text:
          "S3: 我觉得这一段旋律先别急着铺满，留一点空，画面会自己长出来。\n" +
          "S1: 对，很多时候最打动人的不是复杂，而是那一点很诚恳、很克制的东西。\n" +
          "S4: 那如果我在第二遍把情绪往上推，前面是不是就更要收着一点？\n" +
          "S2: 我会想让角色先站住，先让大家相信她为什么会唱这句，然后情绪再出来。\n" +
          "S1: 对，观众要先被人物带进去，后面的放大才有意义。\n" +
          "S4: 明白，那我就不一上来全开，先把细节唱给他们听。",
        references: [
          { label: "S1 Reference", src: "swanvoice-audio/ref/dehua.wav" },
          { label: "S2 Reference", src: "swanvoice-audio/ref/jialing.wav" },
          { label: "S3 Reference", src: "swanvoice-audio/ref/jay.wav" },
          { label: "S4 Reference", src: "swanvoice-audio/ref/dzq.wav" },
        ],
        generated: "swanvoice-audio/gen/creative_four_01.wav",
      },
      {
        title: "Huang Renxun x Musk x Obama x Trump",
        text:
          "S2: If you reason from physics and economics first, a lot of so-called impossible ideas suddenly become straightforward engineering problems.\n" +
          "S4: People do not care about theories if nothing changes in their lives. They want to see results, and they want them quickly.\n" +
          "S1: That is exactly why infrastructure matters. When intelligence becomes cheap and scalable, every industry can be rebuilt around it.\n" +
          "S3: But progress has to feel shared. Innovation is strongest when ordinary citizens believe it expands opportunity instead of narrowing it.",
        references: [
          { label: "S1 Reference", src: "swanvoice-audio/ref/huangrenxun.wav" },
          { label: "S2 Reference", src: "swanvoice-audio/ref/musk.wav" },
          { label: "S3 Reference", src: "swanvoice-audio/ref/obama.wav" },
          { label: "S4 Reference", src: "swanvoice-audio/ref/trump.wav" },
        ],
        generated: "swanvoice-audio/gen/forum_four_01.wav",
      },
      {
        title: "大司马 x 卢本伟 x Gazi x 懒羊羊",
        text:
          "S1: 我就一句话，这波能打，而且必须打，再拖下去节奏全没了！\n" +
          "S4: 可是我觉得现在冲上去会不会有点危险呀，我连闪现都还没想好要往哪边交。\n" +
          "S1: 危险肯定有，但是问题不在打不打，在于谁先进去、谁在后面补伤害，这个得讲清楚。\n" +
          "S3: 你俩先别顶牛，我在旁边都听明白了，一个太想冲，一个太想稳，难怪麦里全是火药味。",
        references: [
          { label: "S1 Reference", src: "swanvoice-audio/ref/大司马.wav" },
          { label: "S2 Reference", src: "swanvoice-audio/ref/卢本伟.wav" },
          { label: "S3 Reference", src: "swanvoice-audio/ref/gazi.wav" },
          { label: "S4 Reference", src: "swanvoice-audio/ref/懒羊羊.wav" },
        ],
        generated: "swanvoice-audio/gen/livestream_four_01.wav",
      },
      {
        title: "胡万 x Dehua x 灰太狼 x 懒羊羊",
        text:
          "S1: 都给我安静！事情闹到这个地步，谁也别想装没看见，今天非得把规矩说清楚不可！\n" +
          "S4: 我、我真的只是路过，你们突然都看着我，我现在脑子里一片空白呀。\n" +
          "S1: 路过不路过先放一边，我现在问的是，到底是谁先开的口，谁先挑的事！\n" +
          "S3: 哼，反正不是我一个人的问题，你们一个个都在那儿添油加火，现在倒全想把账算我头上。",
        references: [
          { label: "S1 Reference", src: "swanvoice-audio/ref/让子弹飞胡万.wav" },
          { label: "S2 Reference", src: "swanvoice-audio/ref/dehua.wav" },
          { label: "S3 Reference", src: "swanvoice-audio/ref/灰太狼2.wav" },
          { label: "S4 Reference", src: "swanvoice-audio/ref/懒羊羊.wav" },
        ],
        generated: "swanvoice-audio/gen/chaos_four_01.wav",
      },
    ],
  },
];

const projects = [
  {
    route: "swanvoice",
    title: "SwanVoice",
    subtitle:
      "Expressive Long-Form Zero-Shot Speech Synthesis for Both Monologue and Dialogue",
    venue: "Technical Report",
    paperUrl: "",
    authors: [
      { name: "Ruiqi Li", equal: true },
      { name: "Yu Zhang", equal: true },
      { name: "Changhao Pan", equal: true },
      { name: "Ke Lei" },
      { name: "Xiang Yin", corresponding: true },
      { name: "Cheng Yang" },
    ],
    description:
      "A unified zero-shot TTS model for long-form monologue and 1-4 speaker dialogue generation.",
    image: "./assets/swanvoice-structure.png",
    status: "Available",
  },
  {
    route: "bench",
    title: "SwanBench-Speech",
    subtitle:
      "Comprehensive Benchmarking of Long-Form Speech Generation in Diverse Scenarios",
    venue: "ACL 2026",
    paperUrl: "",
    authors: [
      { name: "Changhao Pan", equal: true },
      { name: "Rui Yang", equal: true },
      { name: "Han Wang", equal: true },
      { name: "Zhuan Zhou" },
      { name: "Xuming He" },
      { name: "Wenxiang Guo" },
      { name: "Ziyue Jiang" },
      { name: "Ruiqi Li" },
      { name: "Yu Zhang" },
      { name: "Chenyuhao Wen" },
      { name: "Ke Lei" },
      { name: "Xiang Yin" },
      { name: "Jingyu Lu" },
      { name: "Zhiyuan Zhu" },
      { name: "Zhou Zhao", corresponding: true },
    ],
    description:
      "A long-form speech benchmark covering rich scenarios, comprehensive metrics, and model insights.",
    image: "./assets/swanbench-speech.png",
    status: "Available",
  },
];

const benchDemoTabs = [
  { id: "bench-dimensions", label: "Per-Dimensions" },
  { id: "bench-scenarios", label: "Per-Scenarios" },
  { id: "bench-ablation", label: "Ablation Study" },
];

const voiceDemoTabs = [
  { id: "swanvoice-single", label: "Single Speaker", groupIndex: 0 },
  { id: "swanvoice-two", label: "Two Speaker", groupIndex: 1 },
  { id: "swanvoice-four", label: "Four Speaker", groupIndex: 2 },
];

function arrowLink(label, href, disabled = false) {
  const tag = disabled ? "span" : "a";
  const attrs = disabled
    ? 'class="arrow-link is-disabled" aria-disabled="true"'
    : `class="arrow-link" href="${href}"`;

  return `
    <${tag} ${attrs}>
      <span class="circle" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </span>
      <span>${label}</span>
    </${tag}>`;
}

function affiliationLogo(src, alt, className = "") {
  return `<img${className ? ` class="${className}"` : ""} src="${src}" alt="${alt}" />`;
}

function authorMarkup(authors = []) {
  if (!authors.length) return "";

  const authorItems = authors
    .map((author) => {
      const marks = [
        author.equal ? "<sup>*</sup>" : "",
        author.corresponding ? "<sup>&dagger;</sup>" : "",
      ].join("");
      return `<span>${author.name}${marks}</span>`;
    })
    .join("");

  return `
    <div class="paper-authors">${authorItems}</div>
    <div class="paper-notes">* Equal contribution &middot; &dagger; Corresponding author</div>`;
}

function paperMeta(project) {
  if (!project) return "";

  return `
    <div class="paper-meta">
      <span class="venue-badge">${project.venue}</span>
      ${authorMarkup(project.authors)}
    </div>`;
}

function hero(
  title,
  body,
  ctaLabel,
  ctaHref,
  extraAffiliations = [],
  metadata = "",
  paperHref = null
) {
  const affiliationLogos = [
    affiliationLogo("./assets/bytedance-logo-05sW5bB1.svg", "ByteDance"),
    ...extraAffiliations,
  ].join("");

  return `
    <section class="hero">
      <div class="hero-inner">
        <h1>${title}</h1>
        ${body ? `<p>${body}</p>` : ""}
        ${metadata}
        <div class="affiliation">
          <span>Affiliation</span>
          <div class="affiliation-logos">${affiliationLogos}</div>
        </div>
        <div class="hero-actions">
          ${arrowLink(ctaLabel, ctaHref)}
          ${
            paperHref === null
              ? ""
              : arrowLink("Read the Paper", paperHref, !paperHref)
          }
        </div>
      </div>
    </section>`;
}

function renderHome() {
  return `
    ${hero(
      "SwanAIGC",
      "AI research for audio, speech, and music.",
      "Explore projects",
      "#projects"
    )}

    <section id="projects" class="section">
      <div class="section-inner">
        <div class="center-copy">
          <h2>Projects</h2>
          <p>
            Each SwanAIGC project gets a concise home-page frame and a dedicated
            project page for paper details, demos, and resources.
          </p>
        </div>
        <div class="project-grid">
          ${projects.map(projectCard).join("")}
        </div>
      </div>
    </section>`;
}

function projectCard(project) {
  const visual = project.image
    ? `<img src="${project.image}" alt="${project.title} overview" />`
    : `<div class="task-visual" aria-hidden="true">
        <div class="token-row">
          ${Array.from({ length: 28 }, () => "<span></span>").join("")}
        </div>
        <div class="wave-stack" style="margin-top:28px">
          <div class="wave-line"></div>
          <div class="wave-line"></div>
          <div class="wave-line"></div>
        </div>
      </div>`;

  return `
    <article class="project-card">
      <a class="project-media" href="#${project.route}">
        ${visual}
      </a>
      <div class="project-body">
        <div class="project-meta">
          <span>${project.status}</span>
          <span>${project.venue}</span>
        </div>
        <h3>${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p>${project.description}</p>
        ${arrowLink(`Open ${project.title}`, `#${project.route}`)}
      </div>
    </article>`;
}

function audioRow(label, src, generated = false) {
  return `
    <div class="audio-row ${generated ? "generated" : ""}">
      <div class="audio-label">${label}</div>
      <audio controls controlsList="nodownload noplaybackrate" preload="none">
        <source src="${encodeURI(src)}" type="audio/wav" />
      </audio>
    </div>`;
}

function sampleCard(sample, groupTitle) {
  const references = sample.references
    .map((item) => audioRow(item.label, item.src))
    .join("");

  return `
    <article class="sample-card">
      <div class="sample-title">
        <span>${sample.title}</span>
        <span class="sample-type">${groupTitle}</span>
      </div>
      <div class="target-text">${sample.text}</div>
      <div class="audio-list">
        ${references}
        ${audioRow("Generated", sample.generated, true)}
      </div>
    </article>`;
}

function modelAudio(model) {
  return `
    <div class="bench-model-audio">
      <div class="audio-label">${model.name}</div>
      <audio controls controlsList="nodownload noplaybackrate" preload="none">
        <source src="${encodeURI(model.audio)}" type="audio/wav" />
      </audio>
    </div>`;
}

function benchComparisonCard(item, meta) {
  const media = item.image
    ? `<div class="bench-card-media"><img src="${item.image}" alt="${item.title} evaluation overview" /></div>`
    : "";

  return `
    <article class="sample-card bench-card">
      <div class="sample-title">
        <span>${item.title}</span>
        <span class="sample-type">${meta}</span>
      </div>
      <div class="target-text bench-reference">${item.referenceHtml}</div>
      ${media}
      <div class="bench-audio-grid">
        ${item.models.map(modelAudio).join("")}
      </div>
    </article>`;
}

function benchSubset(subset, parentTitle) {
  const cards = subset.items
    .map((item) => {
      const meta = item.dimension
        ? `${item.dimension} · ${subset.label}`
        : `${parentTitle} · ${subset.label}`;
      return benchComparisonCard(item, meta);
    })
    .join("");

  const stats = subset.statsImage
    ? `
      <figure class="bench-stat media-frame">
        <img src="${subset.statsImage}" alt="${subset.label} statistics" />
        <figcaption>${subset.statsCaption}</figcaption>
      </figure>`
    : "";

  return `
    <section class="bench-subset">
      <div class="bench-subset-header">
        <h4>${subset.label}</h4>
        <span>${subset.items.length} samples</span>
      </div>
      <div class="sample-grid">${cards}</div>
      ${stats}
    </section>`;
}

function benchSegment(segment, id, index) {
  return `
    <section id="${id}" class="demo-group demo-segment bench-segment">
      <div class="demo-group-header">
        <div>
          <div class="demo-group-index">${String(index).padStart(2, "0")}</div>
          <h3>${segment.title}</h3>
        </div>
        <p>${segment.summary}</p>
      </div>
      <div class="bench-subset-list">
        ${segment.subsets.map((subset) => benchSubset(subset, segment.title)).join("")}
      </div>
    </section>`;
}

function benchAblationRow(row) {
  return `
    <article class="bench-ablation-row">
      <div class="sample-type">Length ${row.step}</div>
      <audio controls controlsList="nodownload noplaybackrate" preload="none">
        <source src="${encodeURI(row.audio)}" type="audio/wav" />
      </audio>
      <div class="target-text bench-ablation-text">${row.textHtml}</div>
    </article>`;
}

function benchAblation(data) {
  return `
    <section id="bench-ablation" class="demo-group demo-segment bench-segment">
      <div class="demo-group-header">
        <div>
          <div class="demo-group-index">03</div>
          <h3>${data.title}</h3>
        </div>
        <p>${data.summary}</p>
      </div>
      <figure class="bench-stat media-frame">
        <img src="${data.chartImage}" alt="Ablation results over sequence length" />
        <figcaption>${data.chartCaption}</figcaption>
      </figure>
      <div class="bench-ablation-grid">
        ${data.groups
          .map(
            (group) => `
              <section class="bench-ablation-group">
                <div class="bench-subset-header">
                  <h4>${group.model}</h4>
                  <span>${group.rows.length} lengths</span>
                </div>
                <div class="bench-ablation-list">
                  ${group.rows.map(benchAblationRow).join("")}
                </div>
              </section>`
          )
          .join("")}
      </div>
    </section>`;
}

function activeBenchDemoId() {
  const hash = window.location.hash.replace("#", "");
  return benchDemoTabs.some((tab) => tab.id === hash)
    ? hash
    : "bench-dimensions";
}

function demoTabNav(tabs, activeId, label) {
  return `
    <div class="demo-tab-nav" aria-label="${label}">
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

function benchDemoNav(activeId) {
  return demoTabNav(
    benchDemoTabs,
    activeId,
    "SwanBench-Speech demo sections"
  );
}

function activeVoiceDemoId() {
  const hash = window.location.hash.replace("#", "");
  return voiceDemoTabs.some((tab) => tab.id === hash)
    ? hash
    : "swanvoice-single";
}

function voiceDemoNav(activeId) {
  return demoTabNav(voiceDemoTabs, activeId, "SwanVoice demo sections");
}

function renderBenchDemos() {
  const data = window.swanBenchDemoData;
  if (!data) {
    return `
      <div class="center-copy">
        <h2>Demos</h2>
        <p>Demo data is still loading.</p>
      </div>`;
  }

  const activeId = activeBenchDemoId();
  const activeSegment =
    activeId === "bench-scenarios"
      ? benchSegment(data.scenarios, "bench-scenarios", 2)
      : activeId === "bench-ablation"
        ? benchAblation(data.ablation)
        : benchSegment(data.dimensions, "bench-dimensions", 1);

  return `
    <div id="bench-demos" class="center-copy demo-anchor">
      <h2>Demos</h2>
      <p>
        Evaluation demos are split into the original SwanBench-Speech sections
        so each page stays compact.
      </p>
      ${benchDemoNav(activeId)}
    </div>
    ${activeSegment}`;
}

function renderVoiceDemos() {
  const activeId = activeVoiceDemoId();
  const activeTab = voiceDemoTabs.find((tab) => tab.id === activeId);
  const group = demoGroups[activeTab.groupIndex];

  return `
    <div id="swanvoice-demo" class="center-copy demo-anchor">
      <h2>Demos</h2>
      <p>
        Reference audio is shown before each generated sample. Speaker settings
        are split into compact pages for faster comparison.
      </p>
      ${voiceDemoNav(activeId)}
    </div>
    <section id="${activeId}" class="demo-group demo-segment">
      <div class="demo-group-header">
        <div>
          <div class="demo-group-index">${group.index}</div>
          <h3>${group.title}</h3>
        </div>
        <p>${group.summary}</p>
      </div>
      <div class="sample-grid">
        ${group.samples.map((sample) => sampleCard(sample, group.title)).join("")}
      </div>
    </section>`;
}

function renderSwanVoice() {
  const project = projects.find((item) => item.route === "swanvoice");

  return `
    ${hero(
      "SwanVoice",
      "Expressive Long-Form Zero-Shot Speech Synthesis for Both Monologue and Dialogue",
      "Jump to Demos",
      "#swanvoice-demo",
      [],
      paperMeta(project),
      project.paperUrl
    )}

    <section class="section">
      <div class="section-inner overview-stack">
        <div class="center-copy">
          <h2>Model overview</h2>
          <p>
            SwanVoice models monologue and dialogue generation in one system,
            using speaker-turn conditioning and flow matching to keep voice,
            rhythm, and conversation context coherent.
          </p>
        </div>
        <div class="media-frame pipeline-frame compact">
          <img src="./assets/swanvoice-structure.png" alt="SwanVoice training and inference procedure" />
        </div>
        <div class="abstract-panel">
          <h2>Abstract</h2>
          <p>${abstractText}</p>
        </div>
      </div>
    </section>

    <section class="section muted-section">
      <div class="section-inner demo-shell">
        ${renderVoiceDemos()}
      </div>
    </section>`;
}

function renderBench() {
  const project = projects.find((item) => item.route === "bench");

  return `
    ${hero(
      "SwanBench-Speech",
      "Comprehensive Benchmarking of Long-Form Speech Generation in Diverse Scenarios",
      "Jump to Demos",
      "#bench-demos",
      [
        affiliationLogo(
          "./assets/zhejiang-university.svg",
          "Zhejiang University",
          "zhejiang-logo"
        ),
      ],
      paperMeta(project),
      project.paperUrl
    )}
    <section class="section">
      <div class="section-inner overview-stack">
        <div class="center-copy">
          <h2>Benchmark overview</h2>
          <p>
            SwanBench-Speech evaluates long-form speech generation across
            scenario coverage, automatic metrics, and model behavior analysis.
          </p>
        </div>
        <div class="media-frame pipeline-frame compact">
          <img src="./assets/swanbench-speech.png" alt="SwanBench-Speech benchmark overview" />
        </div>
        <div class="abstract-panel">
          <h2>Abstract</h2>
          <p>${benchAbstractText}</p>
        </div>
      </div>
    </section>
    <section class="section muted-section">
      <div class="section-inner demo-shell bench-demo-shell">
        ${renderBenchDemos()}
      </div>
    </section>`;
}

function currentRoute() {
  const hash = window.location.hash.replace("#", "");
  if (
    hash === "swanvoice" ||
    hash === "swanvoice-demo" ||
    voiceDemoTabs.some((tab) => tab.id === hash)
  ) {
    return "swanvoice";
  }
  if (
    hash === "bench" ||
    hash === "bench-demos" ||
    hash === "bench-dimensions" ||
    hash === "bench-scenarios" ||
    hash === "bench-ablation"
  ) return "bench";
  return "home";
}

function setActiveNav(route) {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === route);
  });
}

function settleHashScroll(app, hash) {
  const benchDemoHash = benchDemoTabs.some((tab) => tab.id === hash);
  const voiceDemoHash = voiceDemoTabs.some((tab) => tab.id === hash);
  const target = document.getElementById(
    benchDemoHash ? "bench-demos" : voiceDemoHash ? "swanvoice-demo" : hash
  );
  if (!target) {
    window.scrollTo({ top: 0 });
    return;
  }

  const scroll = () => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    target.scrollIntoView({ block: "start", behavior: "auto" });
    root.style.scrollBehavior = previousScrollBehavior;
  };
  const pendingImages = Array.from(app.querySelectorAll("img")).filter(
    (image) => !image.complete
  );

  requestAnimationFrame(scroll);
  window.setTimeout(scroll, 350);
  window.setTimeout(scroll, 1200);
  window.setTimeout(scroll, 2400);
  if (pendingImages.length) {
    Promise.all(
      pendingImages.map(
        (image) =>
          new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          })
      )
    ).then(scroll);
  }
}

function render() {
  const hash = window.location.hash.replace("#", "");
  const route = currentRoute();
  const app = document.getElementById("app");
  app.innerHTML =
    route === "swanvoice"
      ? renderSwanVoice()
      : route === "bench"
        ? renderBench()
        : renderHome();
  setActiveNav(route);
  app.focus({ preventScroll: true });
  settleHashScroll(app, hash);
  document.title =
    route === "swanvoice"
      ? "SwanAIGC | SwanVoice"
      : route === "bench"
        ? "SwanAIGC | SwanBench-Speech"
        : "SwanAIGC";
}

window.addEventListener("hashchange", render);
render();
