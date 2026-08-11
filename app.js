const abstractText =
  "Zero-shot text-to-speech (TTS) has advanced rapidly for single-speaker synthesis, but expressive long-form multi-speaker dialogue remains challenging. A common workaround is to synthesize each turn independently with a monologue TTS model and stitch the outputs together, which increases inference cost and often harms acoustic consistency, conversational coherence, and affective continuity across turns. Existing dialogue TTS systems mitigate this issue, but still struggle with expressive coherence, controllable speaker switching, and preserving monologue quality. We present SwanData-Speech and SwanVoice. SwanData-Speech is a scalable pipeline for constructing high-quality and expressive monologue and dialogue corpora from in-the-wild audio, with Swan Forced Aligner for pause-aware word-level alignment and RobustMegaTTS3 for pronunciation hard cases. Built on these data, SwanVoice is a unified zero-shot TTS model for 1-4 speakers, combining a 25 Hz VAE, raw-text conditioning with pause-aware symbols and pinyin substitution, and a flow-matching DiT with speaker-turn conditioning. We further adopt curriculum learning to balance monologue quality, dialogue controllability, and expressiveness, and apply DiffusionNFT post-training to improve robustness and speaker similarity. Experiments show competitive performance in both monologue and dialogue generation, with strong expressiveness and cross-turn consistency.";

const benchAbstractText =
  'Recent advances in speech generation have enabled high-fidelity synthesis, yet systematic evaluation of models under long-context conditions remains largely underexplored. A comprehensive evaluation benchmark for long-form speech is indispensable for two reasons: 1) existing test scenarios are often confined to limited domains, creating a significant gap with the diverse downstream applications; 2) existing metrics overlook critical long-text factors such as consistency and coherence, failing to generalize reliably. To this end, we propose SwanBench-Speech, a comprehensive benchmark that decomposes "long-form speech quality" into specific, disentangled dimensions. SwanBench-Speech has three key properties. <strong>1) Rich speech scenarios</strong>: Focusing on long-form speech generation and dialog generation, SwanBench-Speech covers acoustics, semantics, and expressiveness challenges, and consists of 1,101 samples spanning 17 common speech scenarios; <strong>2) Comprehensive evaluation dimensions</strong>: Along the acoustics, semantics, and expressiveness axes, SwanBench-Speech defines an automated evaluation protocol with seven metrics to provide a comprehensive, accurate, and standardized assessment; <strong>3) Valuable Insights</strong>: Through extensive experiments, we reveal that current models still struggle in highly expressive scenarios and exhibit a notable gap in consistency and hierarchy compared to real recordings.';

const sphereAbstractText =
  "Real-time and accurate spatial audio generation is pivotal for delivering an immersive experience. However, existing spatial audio synthesis technologies are often encumbered by a tradeoff between generation quality and high inference latency, as well as difficulty in capturing precise spatial information from multimodal inputs. To address these challenges, we propose SwanSphere, a unified streaming framework for high-fidelity spatial audio generation from panoramic videos and text prompts. SwanSphere mainly makes the following contributions: <strong>1)</strong> We introduce a causal autoregressive diffusion transformer architecture that enables streaming high-quality spatial audio generation. <strong>2)</strong> We design a Spatial Video-Audio Contrastive (SVAC) learning strategy to align the video encoder with the acoustic domain, and further employ a multi-objective online direct preference optimization (ODPO) scheme, resulting in strong spatial perception and robust multimodal spatial audio synthesis. <strong>3)</strong> To alleviate the current scarcity of spatial audio datasets, we also develop an automated annotation pipeline for generating detailed spatial captions. Experimental results demonstrate that SwanSphere achieves superior performance in both video-to-spatial and text-to-spatial audio generation tasks.";

const taleAbstractText =
  "Speech and audio generation is often needed in animation dubbing, audio drama, movies, advertising, games, podcasts, and short-video production. In these scenarios, creators may need to design voices without reference recordings, control speaker styles with natural language, support acoustic scenes with environments and audio effects, and later reuse the designed voices. Therefore, it is important to support multi-speaker speech and audio generation for both instruct and zero-shot tasks. The instruct task requires a caption of the environment, speaker styles, and fine-grained content, while the zero-shot task uses reference audio together with the same fine-grained content. We address these tasks from both the data and model sides. First, we propose <strong>SwanData-Caption</strong>, which cleans raw speech and audio data, adds targeted synthetic coverage, and annotates diverse and accurate multi-level captions. Then, we propose <strong>SwanTale</strong>, a multi-speaker expressive speech and audio generation model that supports both zero-shot and instruct tasks. We introduce SwanVAE to support high-quality multi-audio-modality generation. Then, we adopt reward-conditioned quality control and Engram conditioning, along with Unified MoE for multi-task and multi-audio-modality modeling. In addition, we use curriculum learning and GRPO post-training to let the model progressively learn and strengthen its capabilities. Experimental results show that SwanTale leads on multiple key zero-shot and instruct metrics, achieves the best expressiveness scores in both tasks, and supports complex instruct generation involving multi-speaker speech and audio.";

const taleDemos = [
  {
    index: "01",
    video:
      "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/codex/video_rehost/20260618/ceb0b8dd_74eed7ce_b9798f8f.mp4",
    poster: "./assets/swantale-redubbing-demo-01-poster.jpg",
  },
  {
    index: "02",
    video:
      "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/codex/video_rehost/20260623/redub_instruct_zeroshot_download_8bc62548.mp4",
    poster: "./assets/swantale-redubbing-demo-02-poster.jpg",
  },
  {
    index: "03",
    video:
      "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/codex/video_rehost/20260623/redub_instruct_zeroshot_download1_8b82a1f2.mp4",
    poster: "./assets/swantale-redubbing-demo-03-poster.jpg",
  },
];

const taleDemoNote =
  "Each demo combines SwanTale instruct control with zero-shot voice reuse for redubbing. The visual track and background music are kept from the original.";

const demoGroups = [
  {
    index: "01",
    title: "Single Speaker",
    summary: "Expressive zero-shot monologue synthesis from a short reference.",
    samples: [
      {
        title: "大司马",
        text: "兄弟们这波你千万不要急，表面上看是能开，实际上你一进去就会发现伤害不够、位置也不好，到时候不是你在操作，是对面在操作你。",
        references: [{ label: "Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E5%A4%A7%E5%8F%B8%E9%A9%AC.wav" }],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/dsm_single_01.wav",
      },
      {
        title: "刘德华",
        text: "我一直觉得，观众最后记住你的，不一定是最热闹的那场戏，反而常常是一个很轻的眼神，或者一句很普通、但你说得特别真的台词。",
        references: [{ label: "Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/dehua.wav" }],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/dehua_single_01.wav",
      },
      {
        title: "Huang",
        text: "For a long time, software adapted to the computer. Now the computer is being redesigned for intelligence itself, and that shift will redefine not just products, but entire industries.",
        references: [
          { label: "Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/huangrenxun.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/huangrenxun_single_01.wav",
      },
      {
        title: "Emma Watson",
        text: "Progress rarely begins with comfort. It begins when someone chooses to speak clearly, even at the risk of being disliked, because silence has simply become too expensive.",
        references: [
          { label: "Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/Emmawaltson.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/emma_single_01.wav",
      },
    ],
  },
  {
    index: "02",
    title: "2 Speakers",
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
          { label: "S1 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E5%A4%A7%E5%8F%B8%E9%A9%AC.wav" },
          { label: "S2 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E5%8D%A2%E6%9C%AC%E4%BC%9F.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/dsm_lbw_duo_01.wav",
      },
      {
        title: "Obama x Trump",
        text:
          "S1: We move forward when people feel that the system still has room for them, their voice matters, the future is something we build together.\n" +
          "S2: If people want strength, they want results, they want leaders who do what they say. That is what they care about.\n" +
          "S1: But strength without trust does not hold for very long. A nation also needs patience and institutions people believe in.\n" +
          "S2: Institutions are fine, but if they fail the people, the people want change.",
        references: [
          { label: "S1 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/obama.wav" },
          { label: "S2 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/trump.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/obama_trump_duo_01.wav",
      },
      {
        title: "胡万 x 六爷",
        text:
          "S1: 六爷，我承认我说话直了，可这事总得让我说个明白，不能一句规矩就把人摁死了吧。\n" +
          "S2: 规矩就是规矩！你平时拿它当笑话，到了出事的时候，又想拿道理来救自己？\n" +
          "S1: 那也得分是非黑白，不能谁嗓门大谁就占理。\n" +
          "S2: 你少给我绕弯子，今天这事儿，不是你服不服，是全城的人都在看服不服！",
        references: [
          { label: "S1 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E8%AE%A9%E5%AD%90%E5%BC%B9%E9%A3%9E%E8%83%A1%E4%B8%87.wav" },
          { label: "S2 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E8%AE%A9%E5%AD%90%E5%BC%B9%E9%A3%9E%E5%85%AD%E7%88%B7.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/huwan_liuye_duo_01.wav",
      },
      {
        title: "Skyler & Ted",
        text:
          "S1: You keep saying it will calm down, but nothing about this is calming down. It is getting bigger every single day.\n" +
          "S2: I understand that, I do, but making one desperate move tonight could make everything even worse.\n" +
          "S1: Doing nothing is also a move, and right now it is the one that is killing us.\n" +
          "S2: Then help me find the version of this that does not destroy everything all at once, okay?",
        references: [
          { label: "Dialogue Ref", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/skyler_and_ted.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/skyler_ted_duo_01.wav",
      },
    ],
  },
  {
    index: "03",
    title: "4 Speakers",
    summary: "Unified 1-4 speaker generation for long-form group conversations.",
    samples: [
      {
        title: "刘德华 x 贾玲 x 周杰伦 x 邓紫棋",
        text:
          "S3: 我觉得这一段旋律先别急着铺满，留一点空，画面会自己长出来。\n" +
          "S1: 对，很多时候最打动人的不是复杂，而是那一点很诚恳、很克制的东西。\n" +
          "S4: 那如果我在第二遍把情绪往上推，前面是不是就更要收着一点？\n" +
          "S2: 我会想让角色先站住，先让大家相信她为什么会唱这句，然后情绪再出来。\n" +
          "S1: 对，观众要先被人物带进去，后面的放大才有意义。\n" +
          "S4: 明白，那我就不一上来全开，先把细节唱给他们听。\n" +
          "S2: 这样层次会很漂亮，而且最后真正爆发的时候，大家会更有感觉。\n" +
          "S3: 没错，技术不是为了炫，是为了把那个情绪送到最对的位置。",
        references: [
          { label: "S1 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/dehua.wav" },
          { label: "S2 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/jialing.wav" },
          { label: "S3 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/jay.wav" },
          { label: "S4 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/dzq.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/creative_four_01.wav",
      },
      {
        title: "Huang x Musk x Obama x Trump",
        text:
          "S2: If you reason from physics and economics first, a lot of so-called impossible ideas suddenly become straightforward engineering problems.\n" +
          "S4: People do not care about theories if nothing changes in their lives. They want to see results, and they want them quickly.\n" +
          "S1: That is exactly why infrastructure matters. When intelligence becomes cheap and scalable, every industry can be rebuilt around it.\n" +
          "S3: But progress has to feel shared. Innovation is strongest when ordinary citizens believe it expands opportunity instead of narrowing it.\n" +
          "S4: Opportunity is good, but weakness is expensive. \n" +
          "S1: Which is why the next era of computing has to be reliable, efficient, and accessible at global scale.\n" +
          "S3: And guided by institutions strong enough to channel power toward the public good.\n" +
          "S2: Yes, otherwise I believe people optimize for habit, not truth.",
        references: [
          { label: "S1 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/huangrenxun.wav" },
          { label: "S2 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/musk.wav" },
          { label: "S3 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/obama.wav" },
          { label: "S4 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/trump.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/forum_four_01.wav",
      },
      {
        title: "大司马 x 卢本伟 x 嘎子 x 懒羊羊",
        text:
          "S1: 我就一句话，这波能打，而且必须打，再拖下去节奏全没了！\n" +
          "S4: 可是我觉得现在冲上去会不会有点危险呀，我连闪现都还没想好要往哪边交。\n" +
          "S1: 危险肯定有，但是问题不在打不打，在于谁先进去、谁在后面补伤害，这个得讲清楚。\n" +
          "S3: 你俩先别顶牛，我在旁边都听明白了，一个太想冲，一个太想稳，难怪麦里全是火药味。\n" +
          "S4: 那要不我们先数三二一，再一起上？这样至少不会有人突然把我卖在前面。\n" +
          "S2: 行，数就数，但这次谁都别怂，我一旦进去了，后面必须有人跟。\n" +
          "S3: 好好好，我作证，这次谁再甩锅，回头直播间我第一个给他复盘。\n" +
          "S1: 那就这么定，先控视野，再等技能，数到一一起动，别再各打各的。",
        references: [
          { label: "S1 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E5%A4%A7%E5%8F%B8%E9%A9%AC.wav" },
          { label: "S2 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E5%8D%A2%E6%9C%AC%E4%BC%9F.wav" },
          { label: "S3 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/gazi.wav" },
          { label: "S4 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E6%87%92%E7%BE%8A%E7%BE%8A.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/livestream_four_01.wav",
      },
      {
        title: "胡万 x 刘德华 x 灰太狼 x 懒羊羊",
        text:
          "S1: 都给我安静！事情闹到这个地步，谁也别想装没看见，今天非得把规矩说清楚不可！\n" +
          "S4: 我、我真的只是路过，你们突然都看着我，我现在脑子里一片空白呀。\n" +
          "S1: 路过不路过先放一边，我现在问的是，到底是谁先开的口，谁先搞的事！\n" +
          "S3: 哼，反正不是我一个人的问题，你们一个个都在那儿添油加火，现在倒全想把账算我头上。\n" +
          "S1: 你这话说得轻巧，刚才最响的就是你，现在又想往后缩？\n" +
          "S4: 要不，要不大家先别吵了，坐下来吃点东西再讲道理，好不好？我觉得再吵下去会更乱的。\n" +
          "S2: 吃什么吃！规矩没讲明白，谁都别想散！\n" +
          "S3: 行啊，那就把话摊开讲，我倒要看看今天到底是谁最不讲理！",
        references: [
          { label: "S1 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E8%AE%A9%E5%AD%90%E5%BC%B9%E9%A3%9E%E8%83%A1%E4%B8%87.wav" },
          { label: "S2 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/dehua.wav" },
          { label: "S3 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E7%81%B0%E5%A4%AA%E7%8B%BC2.wav" },
          { label: "S4 Reference", src: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/ref/%E6%87%92%E7%BE%8A%E7%BE%8A.wav" },
        ],
        generated: "https://lf-ads-humanaigc.bytecdn.com/obj/humanaigc-ads-data/swanaigc/media/swanvoice/audio/gen/chaos_four_01.wav",
      },
    ],
  },
];

const projects = [
  {
    route: "swantale",
    title: "SwanTale",
    subtitle:
      "Unified Multi-Speaker Speech and Audio Generation for Instruct and Zero-Shot Tasks",
    venue: "Technical Report",
    paperUrl: "https://arxiv.org/abs/2608.02023",
    description:
      "A unified model for multi-speaker speech and audio generation across instruct and zero-shot media tasks.",
    image: "./assets/swantale-structure.png",
    imageWebp: "./assets/swantale-structure.webp",
    previewImage: "./assets/swantale-structure-preview.png",
    previewWebp: "./assets/swantale-structure-preview.webp",
    status: "Available",
  },
  {
    route: "swanvoice",
    title: "SwanVoice",
    subtitle:
      "Expressive Long-Form Zero-Shot Speech Synthesis for Both Monologue and Dialogue",
    venue: "Technical Report",
    paperUrl: "https://arxiv.org/abs/2605.30993",
    description:
      "A unified zero-shot TTS model for long-form monologue and 1-4 speaker dialogue generation.",
    image: "./assets/swanvoice-structure.png",
    imageWebp: "./assets/swanvoice-structure.webp",
    previewImage: "./assets/swanvoice-structure-preview.png",
    previewWebp: "./assets/swanvoice-structure-preview.webp",
    status: "Available",
  },
  {
    route: "bench",
    title: "SwanBench-Speech",
    subtitle:
      "Comprehensive Benchmarking of Long-Form Speech Generation in Diverse Scenarios",
    venue: "ACL 2026",
    paperUrl: "https://arxiv.org/abs/2605.28618",
    codeUrl: "https://github.com/MM-Speech/SwanBench-Speech",
    description:
      "A long-form speech benchmark covering rich scenarios, comprehensive metrics, and model insights.",
    image: "./assets/swanbench-speech.png",
    imageWebp: "./assets/swanbench-speech.webp",
    previewImage: "./assets/swanbench-speech-preview.png",
    previewWebp: "./assets/swanbench-speech-preview.webp",
    status: "Available",
  },
  {
    route: "swansphere",
    title: "SwanSphere",
    subtitle:
      "Towards Streaming Synchronized Spatial Audio Generation via Autoregressive Diffusion Transformer",
    venue: "ICML 2026",
    paperUrl: "https://arxiv.org/abs/2605.30940",
    codeUrl: "https://github.com/MM-Speech/SwanSphere",
    description:
      "A streaming framework for synchronized spatial audio generation from panoramic videos and text prompts.",
    image: "./assets/swansphere.png",
    imageWebp: "./assets/swansphere.webp",
    previewImage: "./assets/swansphere-preview.png",
    previewWebp: "./assets/swansphere-preview.webp",
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
  { id: "swanvoice-two", label: "2 Speakers", groupIndex: 1 },
  { id: "swanvoice-four", label: "4 Speakers", groupIndex: 2 },
];

const taleDemoTabs = [
  { id: "swantale-redubbing", label: "Redubbing" },
  { id: "swantale-drama", label: "Comic Drama" },
  { id: "swantale-general", label: "General Scene" },
  { id: "swantale-advertising", label: "Advertising" },
  { id: "swantale-caption", label: "SwanBench-Caption" },
];

const legalPages = {
  privacy: {
    title: "Privacy Policy",
    lead:
      "This policy explains how the SwanAIGC research demo website handles information.",
    updated: "May 27, 2026",
    sections: [
      {
        title: "Information we do not collect",
        body: [
          "This website does not require accounts, payment, or file uploads.",
          "The demo pages play pre-generated audio samples. They do not ask visitors to submit voices, prompts, or personal information.",
        ],
      },
      {
        title: "Technical data",
        body: [
          "Like most static websites, hosting providers, browsers, networks, or security tools may process standard technical data such as IP address, user agent, referrer, timestamps, and requested URLs to deliver the site and protect it from abuse.",
          "SwanAIGC does not use this website to run behavioral advertising or sell visitor data.",
        ],
      },
      {
        title: "Third-party links",
        body: [
          "Links to GitHub, ByteDance, papers, demos, or other external resources are governed by the privacy policies of those services.",
        ],
      },
      {
        title: "Contact",
        body: [
          'If you contact the project team, the information you provide will be used to respond to your request, maintain project records, and handle safety, rights, or misuse reports. For questions, use the <a href="https://github.com/SwanAIGC" target="_blank" rel="noreferrer">SwanAIGC GitHub organization</a>.',
        ],
      },
      {
        title: "Changes",
        body: [
          "This policy may be updated as the website, demos, or project resources change.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms",
    lead:
      "These terms apply to use of the SwanAIGC research demo website and its public project pages.",
    updated: "May 27, 2026",
    sections: [
      {
        title: "Research demo",
        body: [
          "SwanAIGC provides project descriptions, figures, papers, and pre-generated media examples for research, education, and evaluation.",
          "The site may change, remove, or update content without notice.",
        ],
      },
      {
        title: "Responsible use",
        body: [
          "Some audio examples on this site are synthetic or AI-generated. Do not use the website, demos, or project materials to impersonate a real person, mislead listeners, create deceptive media, violate law, or infringe third-party rights.",
          "If you publish, redistribute, or build on generated or synthetic content, you are responsible for following applicable consent, disclosure, labeling, copyright, and personality-rights requirements.",
        ],
      },
      {
        title: "Licenses and ownership",
        body: [
          "Repository software is licensed under the license file in the repository. Papers, figures, model artifacts, datasets, audio samples, trademarks, and third-party materials may be governed by separate licenses or rights.",
          "No permission is granted to use SwanAIGC, ByteDance, or project marks except as necessary to refer to the project accurately.",
        ],
      },
      {
        title: "No warranties",
        body: [
          "The website and demo content are provided as is. SwanAIGC makes no warranties about availability, accuracy, fitness for a particular purpose, or non-infringement.",
        ],
      },
      {
        title: "Third-party resources",
        body: [
          "External links are provided for convenience. SwanAIGC is not responsible for the content, policies, or availability of third-party websites.",
        ],
      },
      {
        title: "Reports",
        body: [
          'For rights concerns, misuse reports, or questions about these terms, contact the maintainers through the <a href="https://github.com/SwanAIGC" target="_blank" rel="noreferrer">SwanAIGC GitHub organization</a>.',
        ],
      },
    ],
  },
};

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

function demoPager(tabs, activeId) {
  const activeIndex = tabs.findIndex((tab) => tab.id === activeId);
  if (activeIndex < 0) return "";

  const activeTab = tabs[activeIndex];
  const previousTab = tabs[activeIndex - 1];
  const nextTab = tabs[activeIndex + 1];

  const pagerItem = (tab, direction) => {
    const isPrevious = direction === "previous";
    const label = isPrevious ? "Previous Part" : "Next Part";
    const unavailableLabel = isPrevious ? "First section" : "Last section";
    const icon = `
      <span class="demo-pager-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M5 12h14" />
          <path d="${isPrevious ? "m12 5-7 7 7 7" : "m12 5 7 7-7 7"}" />
        </svg>
      </span>`;
    const copy = `
      <span class="demo-pager-copy">
        <small>${label}</small>
        <strong>${tab ? tab.label : unavailableLabel}</strong>
      </span>`;

    if (!tab) {
      return `
        <span class="demo-pager-link is-${direction} is-disabled" aria-disabled="true">
          ${isPrevious ? `${icon}${copy}` : `${copy}${icon}`}
        </span>`;
    }

    return `
      <a
        class="demo-pager-link is-${direction}"
        href="#${tab.id}"
        aria-label="${label}: ${tab.label}"
      >
        ${isPrevious ? `${icon}${copy}` : `${copy}${icon}`}
      </a>`;
  };

  return `
    <nav class="demo-pager" aria-label="Demo part navigation">
      ${pagerItem(previousTab, "previous")}
      <div class="demo-pager-status" aria-current="page">
        <span>Part ${String(activeIndex + 1).padStart(2, "0")} / ${String(tabs.length).padStart(2, "0")}</span>
        <strong>${activeTab.label}</strong>
      </div>
      ${pagerItem(nextTab, "next")}
    </nav>`;
}

window.swanDemoPager = demoPager;

function affiliationLogo(src, alt, className = "") {
  return `<img${className ? ` class="${className}"` : ""} src="${src}" alt="${alt}" />`;
}

function responsiveImage(
  src,
  alt,
  { webpSrc = "", loading = "lazy", fetchPriority = "" } = {}
) {
  const imgAttrs = [
    `src="${src}"`,
    `alt="${alt}"`,
    `loading="${loading}"`,
    'decoding="async"',
    fetchPriority ? `fetchpriority="${fetchPriority}"` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const img = `<img ${imgAttrs} />`;

  return webpSrc
    ? `<picture><source srcset="${webpSrc}" type="image/webp" />${img}</picture>`
    : img;
}

function paperMeta(project) {
  if (!project) return "";

  return `
    <div class="paper-meta">
      <span class="venue-badge">${project.venue}</span>
    </div>`;
}

function hero(
  title,
  body,
  ctaLabel,
  ctaHref,
  extraAffiliations = [],
  metadata = "",
  paperHref = null,
  codeHref = null
) {
  const affiliationLogos = [
    affiliationLogo("./assets/bytedance-logo-05sW5bB1.svg", "ByteDance"),
    ...extraAffiliations,
  ].join("");

  return `
    <section class="hero">
      <div class="hero-inner">
        <div class="swan-title-wrap">
          <h1 class="swan-title">${title}</h1>
        </div>
        ${body ? `<p>${body}</p>` : ""}
        ${metadata}
        <div class="affiliation">
          <span>Affiliation</span>
          <div class="affiliation-logos">${affiliationLogos}</div>
        </div>
        <div class="hero-actions">
          ${
            paperHref === null
              ? ""
              : arrowLink("Paper", paperHref, !paperHref)
          }
          ${
            codeHref === null
              ? ""
              : arrowLink("Code", codeHref, !codeHref)
          }
          ${arrowLink(ctaLabel, ctaHref)}
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
    ? responsiveImage(
        project.previewImage || project.image,
        `${project.title} overview`,
        {
          webpSrc: project.previewWebp || project.imageWebp,
          loading: "eager",
        }
      )
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

function renderTaleRedubbing() {
  const cards = taleDemos
    .map(
      (demo) => `
      <article class="sample-card swantale-video-card">
        <div class="swantale-video-wrap">
          <button
            class="swantale-video-poster"
            type="button"
            data-video-src="${demo.video}"
            aria-label="Play SwanTale redubbing demo ${demo.index}"
            title="Play demo"
          >
            <img src="${demo.poster}" alt="SwanTale redubbing demo ${demo.index} poster" loading="lazy" decoding="async" />
            <span class="swantale-play-button" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
          <video
            class="swantale-video"
            controls
            controlsList="nodownload"
            preload="none"
            poster="${demo.poster}"
            playsinline
          ></video>
        </div>
      </article>`
    )
    .join("");

  return `
    <section id="swantale-redubbing" class="demo-group demo-segment swantale-demo-segment">
      <div class="demo-group-header">
        <div>
          <div class="demo-group-index">01</div>
          <h3>Redubbing Demo</h3>
        </div>
        <p>Instruct control and zero-shot voice reuse in a preserved video scene.</p>
      </div>
      <div class="sample-grid swantale-demo-grid">${cards}</div>
      <p class="swantale-demo-note">${taleDemoNote}</p>
    </section>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function taleSampleCard(sample, sampleIndex) {
  return `
    <article class="sample-card swantale-audio-card">
      <div class="sample-title">
        <span>${String(sampleIndex + 1).padStart(2, "0")}</span>
        <span class="sample-type">${escapeHtml(sample.id)}</span>
      </div>
      <div class="swantale-caption-block">
        <div class="audio-label">Caption</div>
        <div class="target-text swantale-caption">${escapeHtml(sample.caption)}</div>
      </div>
      <div class="audio-list">
        ${audioRow("SwanTale", sample.audio, true)}
      </div>
    </article>`;
}

function audioRow(label, src, generated = false) {
  return `
    <div class="audio-row ${generated ? "generated" : ""}">
      <div class="audio-label">${label}</div>
      ${lazyAudio(src)}
    </div>`;
}

function lazyAudio(src) {
  const audioSrc = /^https?:\/\//.test(src) ? src : encodeURI(src);
  return `<audio controls controlsList="nodownload noplaybackrate" preload="none" data-src="${audioSrc}" data-audio-type="audio/wav"></audio>`;
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
      ${lazyAudio(model.audio)}
    </div>`;
}

function benchComparisonCard(item, meta) {
  const media = item.image
    ? `<div class="bench-card-media"><img src="${item.image}" alt="${item.title} evaluation overview" loading="lazy" decoding="async" /></div>`
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
        <img src="${subset.statsImage}" alt="${subset.label} statistics" loading="lazy" decoding="async" />
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
      ${lazyAudio(row.audio)}
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
        <img src="${data.chartImage}" alt="Ablation results over sequence length" loading="lazy" decoding="async" />
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

function activeTaleDemoId() {
  const hash = window.location.hash.replace("#", "");
  return taleDemoTabs.some((tab) => tab.id === hash)
    ? hash
    : "swantale-redubbing";
}

function taleDemoNav(activeId) {
  return demoTabNav(taleDemoTabs, activeId, "SwanTale demo sections");
}

function renderTaleDemos() {
  const activeId = activeTaleDemoId();
  const data = window.swanTaleDemoData;

  let activeSegment = "";
  if (activeId === "swantale-redubbing") {
    activeSegment = renderTaleRedubbing();
  } else if (data) {
    const group = data.groups.find((item) => item.id === activeId);
    activeSegment = group
      ? `
        <section id="${group.id}" class="demo-group demo-segment">
          <div class="demo-group-header">
            <div>
              <div class="demo-group-index">${group.index}</div>
              <h3>${escapeHtml(group.title)}</h3>
            </div>
            <p>${escapeHtml(group.summary)}</p>
          </div>
          <div class="sample-grid">
            ${group.samples
              .map((sample, sampleIndex) => taleSampleCard(sample, sampleIndex))
              .join("")}
          </div>
        </section>`
      : "";
  }

  return `
    <div id="swantale-demo" class="center-copy demo-anchor">
      <h2>Demos</h2>
      <p>
        Redubbing demos lead the collection. Evaluation samples then follow the
        paper's structure: SwanBench-Scene covers comic drama, general scenes,
        and advertising, while SwanBench-Caption focuses on heterogeneous
        speech-and-audio instructions.
      </p>
      ${taleDemoNav(activeId)}
    </div>
    ${
      activeSegment ||
      `<div class="center-copy"><p>Demo data is still loading.</p></div>`
    }
    ${demoPager(taleDemoTabs, activeId)}`;
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
    ${activeSegment}
    ${demoPager(benchDemoTabs, activeId)}`;
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
    </section>
    ${demoPager(voiceDemoTabs, activeId)}`;
}

function renderSphereDemos() {
  if (!window.swanSphereDemos) {
    return `
      <div id="swansphere-demo" class="center-copy demo-anchor">
        <h2>Demos</h2>
        <p>Demo data is still loading.</p>
      </div>`;
  }

  return window.swanSphereDemos.render();
}

function renderSwanTale() {
  const project = projects.find((item) => item.route === "swantale");

  return `
    ${hero(
      "SwanTale",
      "Unified Multi-Speaker Speech and Audio Generation for Instruct and Zero-Shot Tasks",
      "Demo",
      "#swantale-demo",
      [],
      paperMeta(project),
      project.paperUrl
    )}

    <section class="section">
      <div class="section-inner overview-stack">
        <div class="center-copy">
          <h2>Model overview</h2>
          <p>
            SwanTale brings instruct control and zero-shot reuse into the same
            media generation interface, covering speaker style, dialogue
            content, acoustic scene, and audio effects in one waveform.
          </p>
        </div>
        <div class="media-frame pipeline-frame compact">
          ${responsiveImage(
            "./assets/swantale-structure.png",
            "SwanTale architecture and Swan Unified MoE overview",
            { webpSrc: "./assets/swantale-structure.webp", loading: "eager" }
          )}
        </div>
        <div class="abstract-panel">
          <h2>Abstract</h2>
          <p>${taleAbstractText}</p>
        </div>
      </div>
    </section>

    <section class="section muted-section">
      <div class="section-inner demo-shell">
        ${renderTaleDemos()}
      </div>
    </section>`;
}

function renderSwanVoice() {
  const project = projects.find((item) => item.route === "swanvoice");

  return `
    ${hero(
      "SwanVoice",
      "Expressive Long-Form Zero-Shot Speech Synthesis for Both Monologue and Dialogue",
      "Demo",
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
          ${responsiveImage(
            "./assets/swanvoice-structure.png",
            "SwanVoice training and inference procedure",
            { webpSrc: "./assets/swanvoice-structure.webp", loading: "eager" }
          )}
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
      "Demo",
      "#bench-demos",
      [
        affiliationLogo(
          "./assets/zhejiang-university.svg",
          "Zhejiang University",
          "zhejiang-logo"
        ),
      ],
      paperMeta(project),
      project.paperUrl,
      project.codeUrl
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
          ${responsiveImage(
            "./assets/swanbench-speech.png",
            "SwanBench-Speech benchmark overview",
            { webpSrc: "./assets/swanbench-speech.webp", loading: "eager" }
          )}
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

function renderSwanSphere() {
  const project = projects.find((item) => item.route === "swansphere");

  return `
    ${hero(
      "SwanSphere",
      "Towards Streaming Synchronized Spatial Audio Generation via Autoregressive Diffusion Transformer",
      "Demo",
      "#swansphere-demo",
      [
        affiliationLogo(
          "./assets/zhejiang-university.svg",
          "Zhejiang University",
          "zhejiang-logo"
        ),
      ],
      paperMeta(project),
      project.paperUrl,
      project.codeUrl
    )}
    <section id="swansphere-overview" class="section">
      <div class="section-inner overview-stack">
        <div class="center-copy">
          <h2>Framework overview</h2>
          <p>
            SwanSphere combines streaming spatial audio generation, SVAC
            alignment, and multi-objective ODPO for synchronized video-to-spatial
            and text-to-spatial audio synthesis.
          </p>
        </div>
        <div class="media-frame pipeline-frame compact">
          ${responsiveImage(
            "./assets/swansphere.png",
            "SwanSphere training, SVAC, and ODPO framework",
            { webpSrc: "./assets/swansphere.webp", loading: "eager" }
          )}
        </div>
        <div class="abstract-panel">
          <h2>Abstract</h2>
          <p>${sphereAbstractText}</p>
        </div>
      </div>
    </section>
    <section class="section muted-section">
      <div class="section-inner demo-shell">
        ${renderSphereDemos()}
      </div>
    </section>`;
}

function renderLegalPage(type) {
  const page = legalPages[type];
  const sections = page.sections
    .map(
      (section) => `
        <section class="legal-block">
          <h2>${section.title}</h2>
          ${section.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </section>`
    )
    .join("");

  return `
    <section class="section legal-section">
      <div class="section-inner legal-inner">
        <a class="text-link" href="#home">Back to SwanAIGC</a>
        <div class="legal-header">
          <h1>${page.title}</h1>
          <p>${page.lead}</p>
          <span>Effective date: ${page.updated}</span>
        </div>
        <div class="legal-panel">
          ${sections}
        </div>
      </div>
    </section>`;
}

function currentRoute() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "privacy" || hash === "terms") return hash;
  if (
    hash === "swantale" ||
    hash === "swantale-demo" ||
    taleDemoTabs.some((tab) => tab.id === hash)
  ) {
    return "swantale";
  }
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
  if (
    hash === "swansphere" ||
    hash === "swansphere-overview" ||
    hash === "swansphere-demo" ||
    hash === "swansphere-v2sa" ||
    hash === "swansphere-t2sa"
  ) {
    return "swansphere";
  }
  return "home";
}

function setActiveNav(route) {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === route);
  });
}

let cancelPendingHashScroll = null;

function settleHashScroll(app, hash) {
  cancelPendingHashScroll?.();
  cancelPendingHashScroll = null;

  const benchDemoHash = benchDemoTabs.some((tab) => tab.id === hash);
  const voiceDemoHash = voiceDemoTabs.some((tab) => tab.id === hash);
  const taleDemoHash = taleDemoTabs.some((tab) => tab.id === hash);
  const sphereDemoHash =
    hash === "swansphere-v2sa" || hash === "swansphere-t2sa";
  const target = document.getElementById(
    benchDemoHash
      ? "bench-demos"
      : voiceDemoHash
        ? "swanvoice-demo"
        : taleDemoHash
          ? "swantale-demo"
          : sphereDemoHash
            ? hash
            : hash
  );
  if (!target) {
    window.scrollTo({ top: 0 });
    return;
  }

  let canceled = false;
  const timers = [];
  const userEvents = ["wheel", "touchstart", "pointerdown", "keydown"];

  const cleanup = () => {
    userEvents.forEach((eventName) => {
      window.removeEventListener(eventName, cancel);
    });
    if (cancelPendingHashScroll === cancel) {
      cancelPendingHashScroll = null;
    }
  };

  const cancel = () => {
    canceled = true;
    timers.forEach((timer) => window.clearTimeout(timer));
    cleanup();
  };

  cancelPendingHashScroll = cancel;
  userEvents.forEach((eventName) => {
    window.addEventListener(eventName, cancel, { once: true, passive: true });
  });

  const scroll = () => {
    if (canceled || !target.isConnected) return;
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
  timers.push(
    window.setTimeout(scroll, 350),
    window.setTimeout(scroll, 1200),
    window.setTimeout(scroll, 2400),
    window.setTimeout(cleanup, 2600)
  );
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

const lazyAudioState = {
  loaded: [],
  maxLoaded: 12,
  observer: null,
};

function unloadLazyAudio(audio) {
  audio.pause();
  audio.removeAttribute("src");
  audio.replaceChildren();
  audio.dataset.loaded = "false";
  audio.load();
}

function trimLazyAudioCache(activeAudio) {
  lazyAudioState.loaded = lazyAudioState.loaded.filter(
    (audio) => audio.isConnected && audio.dataset.loaded === "true"
  );

  while (lazyAudioState.loaded.length > lazyAudioState.maxLoaded) {
    const candidate = lazyAudioState.loaded.find(
      (audio) => audio !== activeAudio && audio.paused
    );
    if (!candidate) return;
    lazyAudioState.loaded = lazyAudioState.loaded.filter(
      (audio) => audio !== candidate
    );
    unloadLazyAudio(candidate);
  }
}

function loadLazyAudio(audio) {
  if (audio.dataset.loaded === "true") return;
  const src = audio.dataset.src;
  if (!src) return;

  audio.replaceChildren();
  const source = document.createElement("source");
  source.src = src;
  source.type = audio.dataset.audioType || "audio/wav";
  audio.appendChild(source);
  audio.dataset.loaded = "true";
  audio.preload = "metadata";
  audio.load();

  lazyAudioState.loaded = lazyAudioState.loaded.filter((item) => item !== audio);
  lazyAudioState.loaded.push(audio);
  trimLazyAudioCache(audio);
}

function initLazyAudio(root) {
  if (!lazyAudioState.observer && "IntersectionObserver" in window) {
    lazyAudioState.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) loadLazyAudio(entry.target);
        });
      },
      { rootMargin: "220px 0px", threshold: 0.01 }
    );
  }

  root.querySelectorAll("audio[data-src]").forEach((audio) => {
    if (audio.dataset.lazyAudioInit === "true") return;
    audio.dataset.lazyAudioInit = "true";
    audio.dataset.loaded = "false";

    lazyAudioState.observer?.observe(audio);
    audio.addEventListener("pointerdown", () => loadLazyAudio(audio));
    audio.addEventListener("focus", () => loadLazyAudio(audio));
    audio.addEventListener("keydown", () => loadLazyAudio(audio));
    audio.addEventListener("play", () => {
      loadLazyAudio(audio);
      root.querySelectorAll("audio").forEach((other) => {
        if (other !== audio) other.pause();
      });
      trimLazyAudioCache(audio);
    });
    audio.addEventListener("ended", () => trimLazyAudioCache(audio));
    audio.addEventListener("error", () => trimLazyAudioCache(audio));
  });
}

function initLazyVideo(root) {
  root.querySelectorAll("[data-video-src]").forEach((button) => {
    if (button.dataset.lazyVideoInit === "true") return;
    button.dataset.lazyVideoInit = "true";
    button.addEventListener("click", async () => {
      const wrap = button.closest(".swantale-video-wrap");
      const video = wrap?.querySelector("video");
      if (!wrap || !video) return;
      if (!video.currentSrc) {
        video.src = button.dataset.videoSrc;
        video.load();
      }
      wrap.classList.add("is-loaded");
      try {
        await video.play();
      } catch {
        video.focus();
      }
    });
  });
}

function resetLazyAudio() {
  lazyAudioState.observer?.disconnect();
  lazyAudioState.observer = null;
  lazyAudioState.loaded = [];
}

function render() {
  const hash = window.location.hash.replace("#", "");
  const route = currentRoute();
  const app = document.getElementById("app");
  window.swanSphereDemos?.stopAll?.();
  resetLazyAudio();
  app.innerHTML =
    route === "swantale"
      ? renderSwanTale()
      : route === "swanvoice"
      ? renderSwanVoice()
      : route === "bench"
        ? renderBench()
        : route === "swansphere"
          ? renderSwanSphere()
          : route === "privacy" || route === "terms"
            ? renderLegalPage(route)
            : renderHome();
  setActiveNav(route);
  app.focus({ preventScroll: true });
  initLazyAudio(app);
  initLazyVideo(app);
  settleHashScroll(app, hash);
  if (route === "swansphere") {
    window.swanSphereDemos?.init?.();
  }
  document.title =
    route === "swantale"
      ? "SwanAIGC | SwanTale"
      : route === "swanvoice"
      ? "SwanAIGC | SwanVoice"
      : route === "bench"
        ? "SwanAIGC | SwanBench-Speech"
        : route === "swansphere"
          ? "SwanAIGC | SwanSphere"
          : route === "privacy"
            ? "SwanAIGC | Privacy Policy"
            : route === "terms"
              ? "SwanAIGC | Terms"
              : "SwanAIGC";
}

window.addEventListener("hashchange", render);
render();
