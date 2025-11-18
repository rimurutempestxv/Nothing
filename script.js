const termData = {
  nodes: [
    {
      id: "gensyn",
      label: "Gensyn Protocol",
      category: "Protocol",
      description:
        "The open protocol that unifies global computing power into a single permissionless network for machine learning by standardizing execution, verification, and coordination.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "execution",
      label: "Execution Layer",
      category: "Protocol",
      description:
        "Provides a consistent machine learning runtime so models execute reliably on any device that joins the Gensyn network.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "verification",
      label: "Trustless Verification",
      category: "Protocol",
      description:
        "Lets participants verify and reach consensus on ML work without needing to trust the hardware owner, unlocking open marketplaces for compute.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "coordination",
      label: "Coordination Layer",
      category: "Protocol",
      description:
        "Identifies workers, aligns incentives, and settles payments permissionlessly so supply and demand of compute can meet in a single market.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "p2p",
      label: "Peer-to-Peer Fabric",
      category: "Protocol",
      description:
        "The networking substrate that streams model shards, gradients, and proofs directly between devices participating in a training job.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "verde",
      label: "Verde",
      category: "Research",
      description:
        "A verification system for ML workloads that guarantees bitwise reproducibility across untrusted nodes so training outcomes stay provable.",
      source: "https://www.gensyn.ai/articles/verde",
      sourceLabel: "gensyn.ai",
    },
    {
      id: "repops",
      label: "RepOps Library",
      category: "Research",
      description:
        "Verde’s catalog of reproducible ML operators that keep kernels bitwise-stable across heterogeneous hardware, enabling trustless audits.",
      source: "https://www.gensyn.ai/articles/verde",
      sourceLabel: "gensyn.ai",
    },
    {
      id: "checkfree",
      label: "CheckFree",
      category: "Research",
      description:
        "A training method that removes the need for heavyweight checkpoints by keeping distributed replicas in sync, improving efficiency on commodity hardware.",
      source: "https://www.gensyn.ai/articles/checkfree",
      sourceLabel: "gensyn.ai",
    },
    {
      id: "rlswarm",
      label: "RL Swarm",
      category: "Testnet",
      description:
        "An internet-scale collective of reinforcement learning agents that trade experience and tackle reasoning quests together as a proving ground for decentralized training.",
      source: "https://www.gensyn.ai/articles/rl-swarm",
      sourceLabel: "gensyn.ai",
    },
    {
      id: "blockassist",
      label: "BlockAssist",
      category: "Testnet",
      description:
        "A Minecraft-based demo where agents learn directly from player actions to assist with building, showing decentralized learning in a familiar world.",
      source: "https://docs.gensyn.ai/testnet/blockassist",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "codeassist",
      label: "CodeAssist",
      category: "Product",
      description:
        "A local-first coding companion that watches your edits, learns your preferences through assistance games, and retrains after every session to stay aligned.",
      source: "https://blog.gensyn.ai/introducing-codeassist/",
      sourceLabel: "blog.gensyn.ai",
    },
    {
      id: "assistance-games",
      label: "Assistance Games",
      category: "Research",
      description:
        "Cooperative inverse reinforcement learning setups where the assistant infers your goals from edit patterns, supplying the adaptation signal behind CodeAssist.",
      source: "https://blog.gensyn.ai/introducing-codeassist/",
      sourceLabel: "blog.gensyn.ai",
    },
    {
      id: "codezero",
      label: "CodeZero",
      category: "Research",
      description:
        "An evolution of RL Swarm focused on cooperative coding agents that adopt specialized roles—proposers, solvers, evaluators—to iteratively refine code.",
      source: "https://blog.gensyn.ai/codezero-extending-rl-swarm-toward-cooperative-coding-agents",
      sourceLabel: "blog.gensyn.ai",
    },
    {
      id: "sapo",
      label: "SAPO",
      category: "Research",
      description:
        "Swarm sAmpling Policy Optimization lets decentralized language models share lightweight rollouts so every participant benefits from the swarm’s best discoveries.",
      source: "https://blog.gensyn.ai/sapo-efficient-lm-post-training-with-collective-rl/",
      sourceLabel: "blog.gensyn.ai",
    },
    {
      id: "judge",
      label: "Judge",
      category: "Product",
      description:
        "A Verde-powered evaluation service that issues cryptographically verifiable judgments, combining deterministic runtimes with refereed delegation for trustless scoring.",
      source: "https://blog.gensyn.ai/introducing-judge/",
      sourceLabel: "blog.gensyn.ai",
    },
    {
      id: "noloco",
      label: "NoLoCo",
      category: "Research",
      description:
        "The No-all-reduce Low-Communication optimizer swaps centralized synchronization for gossip-style updates, keeping decentralized training stable on heterogeneous links.",
      source: "https://www.gensyn.ai/articles/noloco",
      sourceLabel: "gensyn.ai",
    },
    {
      id: "skippipe",
      label: "SkipPipe",
      category: "Research",
      description:
        "A communication-aware pipeline scheduling method that tolerates skipped layers without derailing convergence, unlocking faster distributed training.",
      source: "https://www.gensyn.ai/articles/noloco",
      sourceLabel: "gensyn.ai",
    },
    {
      id: "diverse-experts",
      label: "Diverse Expert Ensembles",
      category: "Research",
      description:
        "A recipe for training heterogeneous mixture-of-experts shards independently, then merging them into stronger ensembles than homogeneous baselines.",
      source: "https://www.gensyn.ai/articles/diverse-expert-ensembles",
      sourceLabel: "gensyn.ai",
    },
    {
      id: "testnet",
      label: "Gensyn Testnet",
      category: "Network",
      description:
        "The live, permissionless playground where compute suppliers, verifiers, and researchers coordinate workloads and earn reputation running demos like BlockAssist.",
      source: "https://docs.gensyn.ai/home/core-components",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "submitters",
      label: "Submitters",
      category: "Network Role",
      description:
        "Clients who post ML jobs, lock in payments, and rely on the coordination layer to match them with trustworthy solvers.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "solvers",
      label: "Solvers",
      category: "Network Role",
      description:
        "Workers that execute training steps on their own hardware, emit proofs, and build reputation through correct results.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "verifiers",
      label: "Verifiers",
      category: "Network Role",
      description:
        "Participants who re-run slices of a solver’s proof to confirm it, anchoring the trustless verification layer.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
    {
      id: "whistleblowers",
      label: "Whistleblowers",
      category: "Network Role",
      description:
        "Watchers empowered to challenge verifiers when they cheat, cascading accountability throughout the protocol.",
      source: "https://docs.gensyn.ai/home/the-gensyn-protocol",
      sourceLabel: "docs.gensyn.ai",
    },
  ],
  links: [
    { source: "gensyn", target: "execution" },
    { source: "gensyn", target: "verification" },
    { source: "gensyn", target: "coordination" },
    { source: "gensyn", target: "p2p" },
    { source: "verification", target: "verde" },
    { source: "verification", target: "checkfree" },
    { source: "coordination", target: "p2p" },
    { source: "gensyn", target: "rlswarm" },
    { source: "rlswarm", target: "codezero" },
    { source: "rlswarm", target: "blockassist" },
    { source: "rlswarm", target: "codeassist" },
    { source: "execution", target: "blockassist" },
    { source: "execution", target: "codeassist" },
    { source: "verification", target: "judge" },
    { source: "verde", target: "judge" },
    { source: "verification", target: "sapo" },
    { source: "rlswarm", target: "sapo" },
    { source: "rlswarm", target: "noloco" },
    { source: "rlswarm", target: "skippipe" },
    { source: "rlswarm", target: "diverse-experts" },
    { source: "codeassist", target: "diverse-experts" },
    { source: "codeassist", target: "assistance-games" },
    { source: "codezero", target: "assistance-games" },
    { source: "verde", target: "repops" },
    { source: "verification", target: "repops" },
    { source: "testnet", target: "blockassist" },
    { source: "testnet", target: "rlswarm" },
    { source: "testnet", target: "codeassist" },
    { source: "coordination", target: "testnet" },
    { source: "coordination", target: "submitters" },
    { source: "coordination", target: "solvers" },
    { source: "coordination", target: "verifiers" },
    { source: "coordination", target: "whistleblowers" },
    { source: "submitters", target: "solvers" },
    { source: "solvers", target: "execution" },
    { source: "solvers", target: "verification" },
    { source: "verifiers", target: "verification" },
    { source: "verifiers", target: "verde" },
    { source: "whistleblowers", target: "verifiers" },
    { source: "whistleblowers", target: "verification" },
  ],
};

const quizQuestions = [
  {
    id: "healthcare-verde",
    nodeId: "verde",
    question:
      "A European hospital network must prove that oncology diagnostics return the exact same logits on every GPU it rents. Which component locks down that determinism?",
    options: [
      "RL Swarm demo scripts",
      "Verde paired with RepOps",
      "BlockAssist replay buffers",
      "Submitter reputation staking",
    ],
    answerIndex: 1,
    source: "https://www.gensyn.ai/articles/verde",
    sourceLabel: "gensyn.ai",
  },
  {
    id: "fintech-judge",
    nodeId: "judge",
    question:
      "A fintech team wants a cryptographic receipt every time they score a foundation model for loan fairness. What Gensyn product issues those verifiable rulings?",
    options: ["Judge", "CodeAssist", "NoLoCo", "BlockAssist"],
    answerIndex: 0,
    source: "https://blog.gensyn.ai/introducing-judge/",
    sourceLabel: "blog.gensyn.ai",
  },
  {
    id: "farms-noloco",
    nodeId: "noloco",
    question:
      "A climate startup stitches together farm-side micro datacenters over flaky rural broadband. Which research contribution keeps distributed training in sync without all-reduce?",
    options: ["NoLoCo", "SAPO", "SkipPipe", "Assistance Games"],
    answerIndex: 0,
    source: "https://www.gensyn.ai/articles/noloco",
    sourceLabel: "gensyn.ai",
  },
  {
    id: "robotics-rlswarm",
    nodeId: "rlswarm",
    question:
      "Multiple robotics labs across continents want their reinforcement learners to swap experience automatically. Which testnet experience best fits?",
    options: ["RL Swarm", "Verifiers", "RepOps", "Submitters"],
    answerIndex: 0,
    source: "https://www.gensyn.ai/articles/rl-swarm",
    sourceLabel: "gensyn.ai",
  },
  {
    id: "gaming-blockassist",
    nodeId: "blockassist",
    question:
      "A game studio wants to showcase decentralized assistants that learn from players in Minecraft builds. Which demo should they reference?",
    options: ["BlockAssist", "CodeZero", "Judge", "Whistleblowers"],
    answerIndex: 0,
    source: "https://docs.gensyn.ai/testnet/blockassist",
    sourceLabel: "docs.gensyn.ai",
  },
  {
    id: "devtools-codeassist",
    nodeId: "codeassist",
    question:
      "An enterprise engineering org needs a local AI pair programmer that retrains on every coding session. Which Gensyn product showcases that workflow?",
    options: ["CodeAssist", "SkipPipe", "RL Swarm", "Verde"],
    answerIndex: 0,
    source: "https://blog.gensyn.ai/introducing-codeassist/",
    sourceLabel: "blog.gensyn.ai",
  },
  {
    id: "hackathon-testnet",
    nodeId: "testnet",
    question:
      "Community organizers want to host a public leaderboard where compute suppliers earn reputation for verified work. Which layer should they deploy on?",
    options: ["Gensyn Testnet", "P2P Fabric", "Assistance Games", "CheckFree"],
    answerIndex: 0,
    source: "https://docs.gensyn.ai/home/core-components",
    sourceLabel: "docs.gensyn.ai",
  },
  {
    id: "oem-repops",
    nodeId: "repops",
    question:
      "A laptop OEM ships mixed GPUs and keeps seeing mismatched gradients. Which library ensures kernels remain bitwise stable regardless of the silicon vendor?",
    options: ["RepOps", "Judge", "Submitters", "CodeZero"],
    answerIndex: 0,
    source: "https://www.gensyn.ai/articles/verde",
    sourceLabel: "gensyn.ai",
  },
  {
    id: "pipelines-skippipe",
    nodeId: "skippipe",
    question:
      "During a multinational training run, one data center goes dark. Which scheduling upgrade lets the pipeline skip layers without trashing convergence?",
    options: ["SkipPipe", "NoLoCo", "Verifiers", "BlockAssist"],
    answerIndex: 0,
    source: "https://www.gensyn.ai/articles/noloco",
    sourceLabel: "gensyn.ai",
  },
  {
    id: "ux-assistance",
    nodeId: "assistance-games",
    question:
      "A product team wants an AI apprentice that adapts simply by watching which code edits you keep or delete. Which learning paradigm gives them that signal?",
    options: [
      "Assistance Games",
      "SAPO",
      "Submitter Bounties",
      "Peer-to-Peer Fabric",
    ],
    answerIndex: 0,
    source: "https://blog.gensyn.ai/introducing-codeassist/",
    sourceLabel: "blog.gensyn.ai",
  },
];

function getLinkCount(nodeId) {
  return termData.links.filter((link) => {
    const sourceId =
      typeof link.source === "string" ? link.source : link.source.id;
    const targetId =
      typeof link.target === "string" ? link.target : link.target.id;
    return sourceId === nodeId || targetId === nodeId;
  }).length;
}

const svg = d3.select("#termGraph");
const playerNameInput = document.getElementById("playerNameInput");
const savePlayerButton = document.getElementById("savePlayer");
const playerStatus = document.getElementById("playerStatus");
const quizTimerEl = document.getElementById("quizTimer");
const quizProgressEl = document.getElementById("quizProgress");
const quizScoreEl = document.getElementById("quizScore");
const questionTitleEl = document.getElementById("questionTitle");
const questionSourceEl = document.getElementById("questionSource");
const optionButtons = Array.from(document.querySelectorAll(".option-button"));
const startQuizButton = document.getElementById("startQuiz");
const cardOverlay = document.getElementById("cardOverlay");
const cardClose = document.getElementById("cardClose");
const cardTag = document.getElementById("cardTag");
const cardTitle = document.getElementById("cardTitle");
const cardDescription = document.getElementById("cardDescription");
const cardConnections = document.getElementById("cardConnections");
const cardSource = document.getElementById("cardSource");
const cardLink = document.getElementById("cardLink");
const cardCanvas = document.getElementById("cardCanvas");
const scoreOverlay = document.getElementById("scoreOverlay");
const scoreClose = document.getElementById("scoreClose");
const scoreTitle = document.getElementById("scoreTitle");
const scoreDescription = document.getElementById("scoreDescription");
const scoreCallout = document.getElementById("scoreCallout");
const scorePlayer = document.getElementById("scorePlayer");
const scoreValue = document.getElementById("scoreValue");
const scoreAccuracy = document.getElementById("scoreAccuracy");
const scoreDownload = document.getElementById("scoreDownload");
const scoreRestart = document.getElementById("scoreRestart");
const scoreCanvas = document.getElementById("scoreCanvas");
const scoreRemark = document.getElementById("scoreRemark");

const QUIZ_TIME = 30;
let quizOrder = [];
let quizTimerId = null;
let quizTimeLeft = QUIZ_TIME;
let quizIndex = 0;
let quizScore = 0;
let quizActive = false;
let playerName = "";

const remarkSets = {
  high: [
    "{name}, verifiers are framing your answers on-chain.",
    "All nodes salute {name}'s protocol instincts.",
    "Gensyn just filed a support ticket asking {name} for help."
  ],
  mid: [
    "{name} dodged the downtime like a seasoned coordinator.",
    "Not bad, {name}. Verde would probably sign this run.",
    "{name} just earned an extra slice of testnet bandwidth."
  ],
  low: [
    "Rumor says {name} bribed a whistleblower with pizza.",
    "{name}, maybe let RL Swarm handle the next round.",
    "Whistleblowers are very concerned about {name}'s guesses."
  ],
};
const calloutLabels = {
  high: "Protocol Pathfinder",
  mid: "Atlas Adept",
  low: "Curious Node",
};

quizTimerEl.textContent = "00:30";
quizProgressEl.textContent = `0 / ${quizQuestions.length}`;
quizScoreEl.textContent = "0 pts";
startQuizButton.disabled = true;
startQuizButton.textContent = "Save username to play";

const colorScale = d3
  .scaleOrdinal()
  .domain(["Protocol", "Research", "Testnet", "Product", "Network", "Network Role"])
  .range(["#7ad6ff", "#b892ff", "#73ffa5", "#ffc98b", "#5be4c7", "#ff91c9"]);

function resizeSvg() {
  const bounds = svg.node().getBoundingClientRect();
  svg.attr("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
  return { width: bounds.width, height: bounds.height };
}

let dimensions = resizeSvg();
window.addEventListener("resize", () => {
  dimensions = resizeSvg();
  simulation.force(
    "center",
    d3.forceCenter(dimensions.width / 2, dimensions.height / 2)
  );
  simulation.alpha(0.3).restart();
});

const link = svg
  .append("g")
  .attr("stroke-linecap", "round")
  .selectAll("line")
  .data(termData.links)
  .enter()
  .append("line")
  .attr("class", "link");

const node = svg
  .append("g")
  .selectAll("g")
  .data(termData.nodes)
  .enter()
  .append("g")
  .attr("class", "node")
  .call(
    d3
      .drag()
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded)
  );

node
  .append("circle")
  .attr("r", (d) => (d.id === "gensyn" ? 18 : 12))
  .attr("fill", (d) => colorScale(d.category))
  .attr("fill-opacity", 0.85);

node
  .append("text")
  .attr("text-anchor", "middle")
  .attr("dy", (d) => (d.id === "gensyn" ? 32 : 26))
  .text((d) => d.label);

node.on("mouseenter", (_, d) => renderDetail(d));
node.on("mouseleave", () => renderDetail(activeNode));
node.on("click", (_, d) => {
  activeNode = d;
  renderDetail(d);
  openCard(d);
});

let activeNode = termData.nodes.find((n) => n.id === "gensyn");
renderDetail(activeNode);

const simulation = d3
  .forceSimulation(termData.nodes)
  .force(
    "link",
    d3
      .forceLink(termData.links)
      .id((d) => d.id)
      .distance((d) => (d.source.id === "gensyn" ? 180 : 140))
      .strength(0.8)
  )
  .force("charge", d3.forceManyBody().strength(-320))
  .force("center", d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
  .force("collision", d3.forceCollide().radius(60))
  .on("tick", ticked);

function ticked() {
  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);

  node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
}

function dragStarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragEnded(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function renderDetail(data) {
  if (!data) return;
  node.classed("is-active", (n) => n.id === data.id);
}

function openCard(data) {
  if (!data) return;
  cardTag.textContent = data.category;
  cardTitle.textContent = data.label;
  cardDescription.textContent = data.description;
  cardConnections.textContent = getLinkCount(data.id);
  cardSource.textContent = data.sourceLabel;
  cardLink.setAttribute("href", data.source);
  cardOverlay.classList.add("is-visible");
  cardOverlay.setAttribute("aria-hidden", "false");
}

function closeCard() {
  cardOverlay.classList.remove("is-visible");
  cardOverlay.setAttribute("aria-hidden", "true");
}

document.getElementById("shuffleButton").addEventListener("click", () => {
  termData.nodes.forEach((node) => {
    node.vx = (Math.random() - 0.5) * 20;
    node.vy = (Math.random() - 0.5) * 20;
  });
  simulation.alpha(0.6).restart();
});

function formatTime(seconds) {
  const mm = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");
  return `${mm}:${ss}`;
}

function updateTimerDisplay() {
  quizTimerEl.textContent = formatTime(quizTimeLeft);
}

function resetOptions() {
  optionButtons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("is-correct", "is-wrong");
  });
}

function updatePlayerStatus(message, state = "neutral") {
  playerStatus.textContent = message;
  playerStatus.classList.remove("error", "success");
  if (state === "error") {
    playerStatus.classList.add("error");
  } else if (state === "success") {
    playerStatus.classList.add("success");
  }
}

function sanitizeName(value) {
  return value.trim().slice(0, 24);
}

function handlePlayerSave() {
  const name = sanitizeName(playerNameInput.value);
  if (!name) {
    updatePlayerStatus("Username can’t be empty—pick a fresh one.", "error");
    startQuizButton.disabled = true;
    startQuizButton.textContent = "Save username to play";
    playerName = "";
    return;
  }
  playerName = name;
  updatePlayerStatus(`Locked in. Good luck, ${playerName}!`, "success");
  startQuizButton.disabled = false;
  startQuizButton.textContent = "Start quiz";
}

function startQuiz() {
  if (!playerName) {
    updatePlayerStatus("Add your username before launching the quiz.", "error");
    startQuizButton.disabled = true;
    startQuizButton.textContent = "Save username to play";
    return;
  }
  quizOrder = [...quizQuestions].sort(() => Math.random() - 0.5);
  quizIndex = 0;
  quizScore = 0;
  quizTimeLeft = QUIZ_TIME;
  quizActive = true;
  quizScoreEl.textContent = "0 pts";
  quizProgressEl.textContent = `0 / ${quizOrder.length}`;
  startQuizButton.disabled = true;
  startQuizButton.textContent = "Quiz in progress";
  loadQuestion();
}

function loadQuestion() {
  if (quizIndex >= quizOrder.length) {
    endQuiz();
    return;
  }
  const current = quizOrder[quizIndex];
  questionTitleEl.textContent = `${quizIndex + 1}. ${current.question}`;
  questionSourceEl.innerHTML = `Source: <a href="${current.source}" target="_blank" rel="noopener">${current.sourceLabel} ↗</a>`;
  optionButtons.forEach((button, idx) => {
    button.textContent = current.options[idx];
    button.disabled = false;
    button.dataset.index = idx.toString();
    button.classList.remove("is-correct", "is-wrong");
  });
  quizProgressEl.textContent = `${quizIndex + 1} / ${quizOrder.length}`;
  quizTimeLeft = QUIZ_TIME;
  updateTimerDisplay();
  startTimer();
}

function startTimer() {
  clearInterval(quizTimerId);
  quizTimerId = setInterval(() => {
    quizTimeLeft -= 1;
    updateTimerDisplay();
    if (quizTimeLeft <= 0) {
      clearInterval(quizTimerId);
      handleTimeExpired();
    }
  }, 1000);
}

function handleTimeExpired() {
  if (!quizActive) return;
  revealAnswers();
  setTimeout(goToNextQuestion, 1200);
}

function revealAnswers(selectedIndex = null) {
  const current = quizOrder[quizIndex];
  optionButtons.forEach((button) => {
    button.disabled = true;
    const idx = Number(button.dataset.index);
    if (idx === current.answerIndex) {
      button.classList.add("is-correct");
    } else if (selectedIndex !== null && idx === selectedIndex) {
      button.classList.add("is-wrong");
    }
  });
}

function handleOptionSelect(event) {
  if (!quizActive) return;
  const selectedIndex = Number(event.currentTarget.dataset.index);
  clearInterval(quizTimerId);
  const current = quizOrder[quizIndex];
  if (selectedIndex === current.answerIndex) {
    quizScore += 1;
    quizScoreEl.textContent = `${quizScore} pts`;
  }
  revealAnswers(selectedIndex);
  setTimeout(goToNextQuestion, 1200);
}

function goToNextQuestion() {
  quizIndex += 1;
  loadQuestion();
}

function endQuiz() {
  clearInterval(quizTimerId);
  quizActive = false;
  startQuizButton.disabled = false;
  startQuizButton.textContent = "Restart quiz";
  questionTitleEl.textContent = "Quiz complete!";
  questionSourceEl.textContent = "Tap restart to run the scenario set again.";
  resetOptions();
  showScoreOverlay();
}

function showScoreOverlay() {
  const total = quizOrder.length || quizQuestions.length;
  const accuracy = total ? Math.round((quizScore / total) * 100) : 0;
  const handle = playerName || "Explorer";
  const callout = getCalloutLabel(accuracy);
  scoreValue.textContent = `${quizScore} / ${total}`;
  scoreAccuracy.textContent = `${accuracy}%`;
  scorePlayer.textContent = handle;
  scoreTitle.textContent = handle;
  scoreCallout.textContent = callout;
  scoreDescription.textContent = `${handle} translated Gensyn research into ${quizScore} real-world wins across ${total} scenario prompts. Accuracy logged at ${accuracy}% for this session.`;
  scoreRemark.textContent = getFunnyRemark(accuracy, handle);
  scoreOverlay.classList.add("is-visible");
  scoreOverlay.setAttribute("aria-hidden", "false");
}

function getFunnyRemark(accuracy, handle) {
  const mode = accuracy >= 80 ? "high" : accuracy >= 50 ? "mid" : "low";
  const pool = remarkSets[mode];
  const template = pool[Math.floor(Math.random() * pool.length)];
  return template.replace("{name}", handle);
}

function getCalloutLabel(accuracy) {
  if (accuracy >= 80) return calloutLabels.high;
  if (accuracy >= 50) return calloutLabels.mid;
  return calloutLabels.low;
}

function closeScoreOverlay() {
  scoreOverlay.classList.remove("is-visible");
  scoreOverlay.setAttribute("aria-hidden", "true");
}

startQuizButton.addEventListener("click", startQuiz);
optionButtons.forEach((button) =>
  button.addEventListener("click", handleOptionSelect)
);
savePlayerButton.addEventListener("click", handlePlayerSave);
playerNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handlePlayerSave();
  }
});
cardClose.addEventListener("click", closeCard);
cardOverlay.addEventListener("click", (event) => {
  if (event.target === cardOverlay) {
    closeCard();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (cardOverlay.classList.contains("is-visible")) {
      closeCard();
    }
    if (scoreOverlay.classList.contains("is-visible")) {
      closeScoreOverlay();
    }
  }
});

scoreClose.addEventListener("click", closeScoreOverlay);
scoreOverlay.addEventListener("click", (event) => {
  if (event.target === scoreOverlay) {
    closeScoreOverlay();
  }
});

scoreRestart.addEventListener("click", () => {
  closeScoreOverlay();
  startQuiz();
});

scoreDownload.addEventListener("click", async () => {
  if (typeof html2canvas !== "function") return;
  scoreDownload.disabled = true;
  const originalText = scoreDownload.textContent;
  scoreDownload.textContent = "Preparing…";
  try {
    const canvas = await html2canvas(scoreCanvas, {
      backgroundColor: null,
      scale: window.devicePixelRatio < 2 ? 2 : window.devicePixelRatio,
    });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement("a");
      const filename = `gensyn-quiz-badge-${Date.now()}.png`;
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  } finally {
    scoreDownload.disabled = false;
    scoreDownload.textContent = originalText;
  }
});

