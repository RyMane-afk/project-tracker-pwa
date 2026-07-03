const STORAGE_KEYS = {
  projects: "pulse.projects.v2",
  ideas: "pulse.ideas.v2",
  tasks: "pulse.tasks.v2"
};

const STATUS_LABELS = {
  planned: "Idea",
  active: "In Progress",
  paused: "Paused",
  done: "Completed"
};

const VIEW_TITLES = {
  home: "Dashboard",
  projects: "Projects",
  ideas: "Ideas",
  tasks: "Tasks",
  stats: "Stats"
};

const ICONS = {
  "bar-chart-3": '<path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M10 21h4"></path>',
  "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
  check: '<path d="M20 6 9 17l-5-5"></path>',
  "check-circle-2": '<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>',
  "circle-dashed": '<path d="M10.1 2.2a10 10 0 0 1 3.8 0"></path><path d="M17.6 3.7a10 10 0 0 1 2.7 2.7"></path><path d="M21.8 10.1a10 10 0 0 1 0 3.8"></path><path d="M20.3 17.6a10 10 0 0 1-2.7 2.7"></path><path d="M13.9 21.8a10 10 0 0 1-3.8 0"></path><path d="M6.4 20.3a10 10 0 0 1-2.7-2.7"></path><path d="M2.2 13.9a10 10 0 0 1 0-3.8"></path><path d="M3.7 6.4a10 10 0 0 1 2.7-2.7"></path>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path>',
  "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>',
  folder: '<path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h4.2l2 2.2h6.8A2.5 2.5 0 0 1 21 9.7v6.8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z"></path>',
  folders: '<path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"></path><path d="M4 17v2a2 2 0 0 0 2 2h12"></path>',
  home: '<path d="m3 10 9-7 9 7"></path><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"></path><path d="M9 21v-6h6v6"></path>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5A5 5 0 1 0 8 8c0 1.5.7 2.8 1.5 3.6.7.7 1.3 1.5 1.5 2.4"></path><path d="M9 18h6"></path><path d="M10 22h4"></path>',
  "list-checks": '<path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path>',
  menu: '<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>',
  "more-vertical": '<circle cx="12" cy="5" r="1.4"></circle><circle cx="12" cy="12" r="1.4"></circle><circle cx="12" cy="19" r="1.4"></circle>',
  plus: '<path d="M5 12h14"></path><path d="M12 5v14"></path>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path>',
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path>',
  "trash-2": '<path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path>',
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
};

const INITIAL_PROJECTS = [
  {
    id: makeId(),
    name: "RDKingdoms",
    category: "Minecraft",
    tags: ["Minecraft", "Plugin"],
    status: "active",
    notes: "A Minecraft SMP plugin focused on kingdoms, wars and economies.",
    progress: 65,
    accent: "blue",
    asset: "./assets/project-minecraft.png",
    createdAt: daysAgo(2),
    updatedAt: daysAgo(0)
  },
  {
    id: makeId(),
    name: "F1 Hub",
    category: "F1",
    tags: ["F1", "App"],
    status: "active",
    notes: "F1 race countdowns, driver standings, predictions and personal notes.",
    progress: 40,
    accent: "purple",
    asset: "./assets/project-f1.png",
    createdAt: daysAgo(4),
    updatedAt: daysAgo(1)
  },
  {
    id: makeId(),
    name: "Delafeld Dev Website",
    category: "Website",
    tags: ["Website", "Personal"],
    status: "done",
    notes: "Official website for my development brand and plugins.",
    progress: 100,
    accent: "green",
    asset: "./assets/project-code.png",
    createdAt: daysAgo(8),
    updatedAt: daysAgo(2)
  },
  {
    id: makeId(),
    name: "F1 Career Game",
    category: "Game",
    tags: ["Game", "Unity"],
    status: "planned",
    notes: "F1 career mode game idea with team management and races.",
    progress: 10,
    accent: "yellow",
    asset: "./assets/project-game.png",
    createdAt: daysAgo(9),
    updatedAt: daysAgo(3)
  },
  {
    id: makeId(),
    name: "Texture Pack Lab",
    category: "Minecraft",
    tags: ["Minecraft", "Design"],
    status: "active",
    notes: "Prototype UI blocks and inventory textures for server releases.",
    progress: 50,
    accent: "blue",
    createdAt: daysAgo(12),
    updatedAt: daysAgo(4)
  },
  {
    id: makeId(),
    name: "Race Strategy Board",
    category: "F1",
    tags: ["F1", "Tool"],
    status: "active",
    notes: "Lap notes, tyre calls and race-week setup reminders.",
    progress: 35,
    accent: "purple",
    createdAt: daysAgo(12),
    updatedAt: daysAgo(5)
  },
  {
    id: makeId(),
    name: "Plugin Docs",
    category: "Minecraft",
    tags: ["Plugin", "Docs"],
    status: "done",
    notes: "Command reference and setup guide for server owners.",
    progress: 100,
    accent: "green",
    createdAt: daysAgo(14),
    updatedAt: daysAgo(6)
  },
  {
    id: makeId(),
    name: "Site Analytics",
    category: "Website",
    tags: ["Website", "Ops"],
    status: "active",
    notes: "Track visits, deploys and release notes in one place.",
    progress: 60,
    accent: "blue",
    createdAt: daysAgo(15),
    updatedAt: daysAgo(7)
  },
  {
    id: makeId(),
    name: "Portfolio Icons",
    category: "Personal",
    tags: ["Website", "Personal"],
    status: "done",
    notes: "Finished icon pack for the development website.",
    progress: 100,
    accent: "green",
    createdAt: daysAgo(18),
    updatedAt: daysAgo(8)
  },
  {
    id: makeId(),
    name: "Discord Bot",
    category: "Plugin",
    tags: ["Plugin", "Bot"],
    status: "paused",
    notes: "Moderation helpers and event reminders are parked for now.",
    progress: 20,
    accent: "blue",
    createdAt: daysAgo(20),
    updatedAt: daysAgo(9)
  },
  {
    id: makeId(),
    name: "Weather Widget",
    category: "App",
    tags: ["App", "Widget"],
    status: "planned",
    notes: "Quick glance forecast tile for the home dashboard.",
    progress: 15,
    accent: "yellow",
    createdAt: daysAgo(22),
    updatedAt: daysAgo(10)
  },
  {
    id: makeId(),
    name: "Content Calendar",
    category: "Personal",
    tags: ["Personal", "Ops"],
    status: "paused",
    notes: "Video, post and changelog schedule for upcoming launches.",
    progress: 30,
    accent: "purple",
    createdAt: daysAgo(24),
    updatedAt: daysAgo(11)
  }
];

const INITIAL_IDEAS = [
  {
    id: makeId(),
    text: "Add swipe actions to project cards",
    createdAt: daysAgo(1)
  },
  {
    id: makeId(),
    text: "Minecraft economy balancing dashboard",
    createdAt: daysAgo(2)
  },
  {
    id: makeId(),
    text: "F1 weekend prediction scorecard",
    createdAt: daysAgo(4)
  },
  {
    id: makeId(),
    text: "Personal plugin changelog feed",
    createdAt: daysAgo(1)
  }
];

const INITIAL_TASKS = [
  {
    id: makeId(),
    title: "Review install icon on iPhone",
    projectId: INITIAL_PROJECTS[0].id,
    done: false,
    createdAt: daysAgo(0)
  }
];

const state = {
  activeView: "home",
  projectFilter: "all",
  editingProjectId: null,
  projects: loadCollection(STORAGE_KEYS.projects, INITIAL_PROJECTS),
  ideas: loadCollection(STORAGE_KEYS.ideas, INITIAL_IDEAS),
  tasks: loadCollection(STORAGE_KEYS.tasks, INITIAL_TASKS)
};

const elements = {
  title: document.querySelector("#view-title"),
  dashboardStats: document.querySelector("#dashboard-stats"),
  homeProjects: document.querySelector("#home-projects"),
  projectList: document.querySelector("#project-list"),
  projectFilters: document.querySelector("#project-filters"),
  ideaList: document.querySelector("#idea-list"),
  ideaForm: document.querySelector("#idea-form"),
  ideaInput: document.querySelector("#idea-input"),
  taskList: document.querySelector("#task-list"),
  taskForm: document.querySelector("#task-form"),
  taskInput: document.querySelector("#task-input"),
  taskProject: document.querySelector("#task-project"),
  statsOverview: document.querySelector("#stats-overview"),
  statusChart: document.querySelector("#status-chart"),
  categoryChart: document.querySelector("#category-chart"),
  sheet: document.querySelector("#project-sheet"),
  sheetBackdrop: document.querySelector("#sheet-backdrop"),
  sheetTitle: document.querySelector("#sheet-title"),
  menu: document.querySelector("#app-menu"),
  menuBackdrop: document.querySelector("#menu-backdrop"),
  menuToggle: document.querySelector("#menu-toggle"),
  menuSummary: document.querySelector("#menu-summary"),
  form: document.querySelector("#project-form"),
  deleteProject: document.querySelector("#delete-project"),
  progressInput: document.querySelector("#project-progress"),
  progressOutput: document.querySelector("#project-progress-output"),
  toast: document.querySelector("#toast")
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindEvents();
  renderAll();
  setView(getViewFromHash(), false);
  registerServiceWorker();
}

function bindEvents() {
  bindClick("#menu-toggle", openMenu);
  bindClick("#close-menu", closeMenu);
  elements.menuBackdrop.addEventListener("click", closeMenu);
  bindClick("#open-project-sheet-home", () => openProjectSheet());
  bindClick("#open-project-sheet-inline", () => openProjectSheet());
  document.querySelector("#close-project-sheet").addEventListener("click", closeProjectSheet);
  elements.sheetBackdrop.addEventListener("click", closeProjectSheet);
  elements.form.addEventListener("submit", saveProjectFromForm);
  elements.deleteProject.addEventListener("click", deleteProjectFromSheet);
  elements.progressInput.addEventListener("input", updateProgressOutput);
  elements.ideaForm.addEventListener("submit", saveIdea);
  elements.taskForm.addEventListener("submit", saveTask);

  document.addEventListener("click", (event) => {
    const navButton = event.target.closest("[data-view-target]");
    if (navButton) {
      setView(navButton.dataset.viewTarget);
      return;
    }

    const menuNav = event.target.closest("[data-menu-nav]");
    if (menuNav) {
      closeMenu();
      setView(menuNav.dataset.menuNav);
      return;
    }

    const menuFilter = event.target.closest("[data-menu-filter]");
    if (menuFilter) {
      closeMenu();
      setProjectFilter(menuFilter.dataset.menuFilter);
      setView("projects");
      return;
    }

    const menuAction = event.target.closest("[data-menu-action]");
    if (menuAction) {
      handleMenuAction(menuAction.dataset.menuAction);
      return;
    }

    const navLink = event.target.closest("[data-nav-target]");
    if (navLink) {
      setView(navLink.dataset.navTarget);
      return;
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      setProjectFilter(filterButton.dataset.filter);
      return;
    }

    const projectAction = event.target.closest("[data-project-action]");
    if (projectAction) {
      const projectId = projectAction.dataset.projectId;
      const action = projectAction.dataset.projectAction;
      if (action === "edit") openProjectSheet(projectId);
      if (action === "delete") deleteProject(projectId);
      return;
    }

    const ideaAction = event.target.closest("[data-idea-action]");
    if (ideaAction) {
      deleteIdea(ideaAction.dataset.ideaId);
      return;
    }

    const taskAction = event.target.closest("[data-task-action]");
    if (taskAction) {
      const taskId = taskAction.dataset.taskId;
      if (taskAction.dataset.taskAction === "toggle") toggleTask(taskId);
      if (taskAction.dataset.taskAction === "delete") deleteTask(taskId);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!elements.sheet.hidden) closeProjectSheet();
    if (!elements.menu.hidden) closeMenu();
  });

  window.addEventListener("hashchange", () => {
    setView(getViewFromHash(), false);
  });
}

function bindClick(selector, handler) {
  const element = document.querySelector(selector);
  if (element) element.addEventListener("click", handler);
}

function renderAll() {
  renderDashboard();
  renderProjects();
  renderIdeas();
  renderTasks();
  renderStats();
  renderMenuSummary();
  renderIcons();
}

function renderDashboard() {
  const stats = getProjectStats();
  elements.dashboardStats.innerHTML = [
    statCard({ icon: "folder", value: stats.total, label: "Projects", detail: `${stats.open} open`, tone: "green" }),
    statCard({ icon: "circle-dashed", value: stats.active, label: "In Progress", detail: `${stats.activePercent}% of total`, tone: "blue" }),
    statCard({ icon: "check-circle-2", value: stats.done, label: "Completed", detail: `${stats.donePercent}% done`, tone: "purple" }),
    statCard({ icon: "lightbulb", value: state.ideas.length, label: "Ideas", detail: pluralize(state.ideas.length, "saved", "saved"), tone: "yellow" })
  ].join("");

  const recentProjects = [...state.projects]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 4);

  elements.homeProjects.innerHTML = recentProjects.length
    ? recentProjects.map((project) => projectCard(project, true)).join("")
    : emptyState("No recent projects yet.");
}

function renderProjects() {
  const projects = filteredProjects();
  elements.projectList.innerHTML = projects.length
    ? projects.map((project) => projectCard(project)).join("")
    : emptyState("No projects in this view.");

  elements.projectFilters.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.filter === state.projectFilter);
  });
}

function renderIdeas() {
  const ideas = [...state.ideas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  elements.ideaList.innerHTML = ideas.length
    ? ideas.map((idea) => `
      <article class="idea-card">
        <div>
          <p>${escapeHTML(idea.text)}</p>
          <time datetime="${escapeHTML(idea.createdAt)}">${formatDate(idea.createdAt)}</time>
        </div>
        <button class="small-icon danger" type="button" data-idea-action="delete" data-idea-id="${idea.id}" aria-label="Delete idea">
          <span data-lucide="trash-2" aria-hidden="true"></span>
        </button>
      </article>
    `).join("")
    : emptyState("No ideas captured.");
}

function renderTasks() {
  renderTaskProjectOptions();

  const tasks = [...state.tasks].sort((a, b) => Number(a.done) - Number(b.done) || new Date(b.createdAt) - new Date(a.createdAt));
  elements.taskList.innerHTML = tasks.length
    ? tasks.map((task) => {
      const project = state.projects.find((item) => item.id === task.projectId);
      return `
        <article class="task-card ${task.done ? "done" : ""}">
          <button class="task-check" type="button" data-task-action="toggle" data-task-id="${task.id}" aria-label="${task.done ? "Mark task open" : "Mark task complete"}">
            <span data-lucide="${task.done ? "check-circle-2" : "check"}" aria-hidden="true"></span>
          </button>
          <div>
            <p>${escapeHTML(task.title)}</p>
            <span>${project ? escapeHTML(project.name) : "Inbox"}</span>
          </div>
          <button class="small-icon danger" type="button" data-task-action="delete" data-task-id="${task.id}" aria-label="Delete task">
            <span data-lucide="trash-2" aria-hidden="true"></span>
          </button>
        </article>
      `;
    }).join("")
    : emptyState("No tasks yet.");
}

function renderStats() {
  const stats = getProjectStats();
  elements.statsOverview.innerHTML = [
    statCard({ icon: "circle-dashed", value: `${stats.averageProgress}%`, label: "Progress", detail: "average", tone: "blue" }),
    statCard({ icon: "folder", value: stats.active, label: "In Progress", detail: "moving", tone: "green" }),
    statCard({ icon: "lightbulb", value: stats.planned, label: "Ideas", detail: "queued", tone: "yellow" }),
    statCard({ icon: "check-circle-2", value: stats.paused, label: "Paused", detail: "waiting", tone: "purple" })
  ].join("");

  elements.statusChart.innerHTML = chartRows(countByStatus(), stats.total, STATUS_LABELS);
  elements.categoryChart.innerHTML = chartRows(countByCategory(), stats.total);
}

function renderTaskProjectOptions() {
  const projectOptions = state.projects
    .map((project) => `<option value="${project.id}">${escapeHTML(project.name)}</option>`)
    .join("");
  elements.taskProject.innerHTML = `<option value="">Inbox</option>${projectOptions}`;
}

function renderMenuSummary() {
  if (!elements.menuSummary) return;
  const stats = getProjectStats();
  elements.menuSummary.innerHTML = `
    <span><strong>${stats.total}</strong> ${pluralize(stats.total, "project")}</span>
    <span><strong>${stats.active}</strong> in progress</span>
    <span><strong>${stats.done}</strong> completed</span>
    <span><strong>${state.ideas.length}</strong> ${pluralize(state.ideas.length, "idea")}</span>
  `;
}

function projectCard(project, compact = false) {
  const accent = project.accent || accentForProject(project);
  const statusClass = project.status === "done" ? "done" : project.status === "active" ? "active" : project.status === "paused" ? "paused" : "planned";
  const notes = project.notes ? `<p class="project-notes">${escapeHTML(project.notes)}</p>` : "";
  const tags = (project.tags?.length ? project.tags : [project.category]).slice(0, 2);
  const thumb = project.asset
    ? `<img src="${escapeHTML(project.asset)}" alt="">`
    : `<span data-lucide="${project.status === "planned" ? "lightbulb" : "folder"}" aria-hidden="true"></span>`;

  return `
    <article class="project-card accent-${accent} ${project.status === "done" ? "done" : ""}">
      <div class="project-thumb ${project.asset ? "has-image" : ""}">${thumb}</div>
      <div class="project-top">
        <div class="project-title">
          <h3>${escapeHTML(project.name)}</h3>
          <div class="project-meta">
            ${tags.map((tag, index) => `<span class="badge ${index === 0 ? `accent-${accent}` : ""}">${escapeHTML(tag)}</span>`).join("")}
          </div>
          ${notes}
        </div>
        <div class="project-side">
          <div class="side-head">
            <span class="status-pill ${statusClass} accent-${accent}">${STATUS_LABELS[project.status]}</span>
            <button class="small-icon" type="button" data-project-action="edit" data-project-id="${project.id}" aria-label="Edit ${escapeHTML(project.name)}">
              <span data-lucide="more-vertical" aria-hidden="true"></span>
            </button>
          </div>
          <div class="progress-row" aria-label="${project.progress}% complete">
            <strong class="progress-value">${project.progress}%</strong>
            <div class="progress-track"><span style="--progress: ${project.progress}%"></span></div>
          </div>
          ${compact ? "" : `
            <button class="delete-inline" type="button" data-project-action="delete" data-project-id="${project.id}">
              Delete
            </button>
          `}
        </div>
      </div>
    </article>
  `;
}

function statCard(configOrLabel, value, detail) {
  if (typeof configOrLabel === "object") {
    const { icon, value: statValue, label, detail: statDetail, tone = "green" } = configOrLabel;
    return `
      <article class="stat-card tone-${tone}">
        <span class="stat-icon" data-lucide="${icon}" aria-hidden="true"></span>
        <strong>${escapeHTML(String(statValue))}</strong>
        <span>${escapeHTML(label)}</span>
        <em class="stat-chip">${escapeHTML(statDetail)}</em>
      </article>
    `;
  }

  return `
    <article class="stat-card">
      <strong>${escapeHTML(String(value))}</strong>
      <span>${escapeHTML(configOrLabel)}</span>
      <em class="stat-chip">${escapeHTML(detail)}</em>
    </article>
  `;
}

function accentForProject(project) {
  if (project.status === "done") return "green";
  if (project.status === "planned") return "yellow";
  if (project.status === "paused") return "purple";
  return "blue";
}

function chartRows(counts, total, labels = {}) {
  const entries = Object.entries(counts);
  if (!entries.length || total === 0) return emptyState("No project data yet.");

  return entries
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([key, count]) => {
      const percent = Math.round((count / total) * 100);
      const label = labels[key] || key;
      return `
        <article class="chart-row">
          <div class="chart-label">
            <span>${escapeHTML(label)}</span>
            <span>${percent}%</span>
          </div>
          <div class="chart-bar"><span style="--bar: ${percent}%"></span></div>
        </article>
      `;
    })
    .join("");
}

function emptyState(message) {
  return `<div class="empty-state">${escapeHTML(message)}</div>`;
}

function setView(view, syncHash = true) {
  if (!VIEW_TITLES[view]) return;
  state.activeView = view;
  document.querySelectorAll(".view").forEach((viewElement) => {
    viewElement.classList.toggle("is-active", viewElement.dataset.view === view);
  });
  document.querySelectorAll(".nav-item").forEach((navItem) => {
    const isActive = navItem.dataset.viewTarget === view;
    navItem.classList.toggle("is-active", isActive);
    if (isActive) {
      navItem.setAttribute("aria-current", "page");
    } else {
      navItem.removeAttribute("aria-current");
    }
  });
  elements.title.textContent = VIEW_TITLES[view];
  if (syncHash) {
    const targetUrl = view === "home"
      ? `${window.location.pathname}${window.location.search}`
      : `#${view}`;
    window.history.replaceState(null, "", targetUrl);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getViewFromHash() {
  const view = window.location.hash.replace("#", "");
  return VIEW_TITLES[view] ? view : "home";
}

function setProjectFilter(filter) {
  state.projectFilter = filter;
  renderProjects();
  renderIcons();
}

function openProjectSheet(projectId = null) {
  const project = projectId ? state.projects.find((item) => item.id === projectId) : null;
  state.editingProjectId = project ? project.id : null;
  elements.sheetTitle.textContent = project ? "Edit project" : "New project";
  elements.deleteProject.hidden = !project;
  elements.form.reset();
  elements.form.elements.id.value = project?.id || "";
  elements.form.elements.name.value = project?.name || "";
  elements.form.elements.category.value = project?.category || "Minecraft";
  elements.form.elements.status.value = project?.status || "planned";
  elements.form.elements.progress.value = project?.progress ?? 35;
  elements.form.elements.notes.value = project?.notes || "";
  updateProgressOutput();
  elements.sheetBackdrop.hidden = false;
  elements.sheet.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => elements.form.elements.name.focus());
}

function closeProjectSheet() {
  elements.sheetBackdrop.hidden = true;
  elements.sheet.hidden = true;
  document.body.style.overflow = "";
  state.editingProjectId = null;
}

function openMenu() {
  renderMenuSummary();
  elements.menuBackdrop.hidden = false;
  elements.menu.hidden = false;
  elements.menuToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  elements.menuBackdrop.hidden = true;
  elements.menu.hidden = true;
  elements.menuToggle.setAttribute("aria-expanded", "false");
  if (elements.sheet.hidden) document.body.style.overflow = "";
}

function handleMenuAction(action) {
  if (action === "add-project") {
    closeMenu();
    openProjectSheet();
    return;
  }

  if (action === "export") {
    exportData();
    closeMenu();
  }
}

function exportData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    projects: state.projects,
    ideas: state.ideas,
    tasks: state.tasks
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "pulse-project-tracker-backup.json";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Data exported");
}

function saveProjectFromForm(event) {
  event.preventDefault();
  const formData = new FormData(elements.form);
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status"));
  const progress = status === "done" ? 100 : clampProgress(Number(formData.get("progress")));
  const now = new Date().toISOString();
  const existingIndex = state.projects.findIndex((item) => item.id === id);
  const existingProject = existingIndex >= 0 ? state.projects[existingIndex] : null;
  const project = {
    id: id || makeId(),
    name: String(formData.get("name") || "").trim(),
    category: String(formData.get("category") || "Minecraft"),
    status,
    notes: String(formData.get("notes") || "").trim(),
    progress,
    tags: existingProject?.tags || [String(formData.get("category") || "Minecraft")],
    accent: existingProject?.accent || accentForProject({ status }),
    asset: existingProject?.asset || "",
    createdAt: now,
    updatedAt: now
  };

  if (!project.name) return;

  if (existingIndex >= 0) {
    project.createdAt = state.projects[existingIndex].createdAt;
    state.projects.splice(existingIndex, 1, project);
    showToast("Project updated");
  } else {
    state.projects.unshift(project);
    showToast("Project added");
  }

  saveCollection(STORAGE_KEYS.projects, state.projects);
  closeProjectSheet();
  renderAll();
}

function deleteProjectFromSheet() {
  const projectId = elements.form.elements.id.value;
  if (!projectId) return;
  deleteProject(projectId);
  closeProjectSheet();
}

function deleteProject(projectId) {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;
  const confirmed = window.confirm(`Delete "${project.name}"?`);
  if (!confirmed) return;

  state.projects = state.projects.filter((item) => item.id !== projectId);
  state.tasks = state.tasks.map((task) => task.projectId === projectId ? { ...task, projectId: "" } : task);
  saveCollection(STORAGE_KEYS.projects, state.projects);
  saveCollection(STORAGE_KEYS.tasks, state.tasks);
  showToast("Project deleted");
  renderAll();
}

function saveIdea(event) {
  event.preventDefault();
  const text = elements.ideaInput.value.trim();
  if (!text) return;
  state.ideas.unshift({ id: makeId(), text, createdAt: new Date().toISOString() });
  saveCollection(STORAGE_KEYS.ideas, state.ideas);
  elements.ideaInput.value = "";
  showToast("Idea saved");
  renderIdeas();
  renderIcons();
}

function deleteIdea(ideaId) {
  state.ideas = state.ideas.filter((idea) => idea.id !== ideaId);
  saveCollection(STORAGE_KEYS.ideas, state.ideas);
  showToast("Idea deleted");
  renderIdeas();
  renderIcons();
}

function saveTask(event) {
  event.preventDefault();
  const title = elements.taskInput.value.trim();
  if (!title) return;
  state.tasks.unshift({
    id: makeId(),
    title,
    projectId: elements.taskProject.value,
    done: false,
    createdAt: new Date().toISOString()
  });
  saveCollection(STORAGE_KEYS.tasks, state.tasks);
  elements.taskInput.value = "";
  showToast("Task added");
  renderAll();
}

function toggleTask(taskId) {
  state.tasks = state.tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task);
  saveCollection(STORAGE_KEYS.tasks, state.tasks);
  renderAll();
}

function deleteTask(taskId) {
  state.tasks = state.tasks.filter((task) => task.id !== taskId);
  saveCollection(STORAGE_KEYS.tasks, state.tasks);
  showToast("Task deleted");
  renderAll();
}

function updateProgressOutput() {
  elements.progressOutput.textContent = `${elements.progressInput.value}%`;
}

function filteredProjects() {
  const projects = [...state.projects].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  if (state.projectFilter === "all") return projects;
  return projects.filter((project) => project.status === state.projectFilter);
}

function getProjectStats() {
  const total = state.projects.length;
  const done = state.projects.filter(isProjectComplete).length;
  const active = state.projects.filter((project) => project.status === "active" && !isProjectComplete(project)).length;
  const planned = state.projects.filter((project) => project.status === "planned" && !isProjectComplete(project)).length;
  const paused = state.projects.filter((project) => project.status === "paused" && !isProjectComplete(project)).length;
  const open = Math.max(0, total - done);
  const averageProgress = total
    ? Math.round(state.projects.reduce((sum, project) => sum + Number(project.progress || 0), 0) / total)
    : 0;

  return {
    total,
    active,
    planned,
    paused,
    done,
    open,
    averageProgress,
    activePercent: total ? Math.round((active / total) * 100) : 0,
    donePercent: total ? Math.round((done / total) * 100) : 0
  };
}

function isProjectComplete(project) {
  return project.status === "done" || Number(project.progress || 0) >= 100;
}

function countByStatus() {
  return state.projects.reduce((counts, project) => {
    counts[project.status] = (counts[project.status] || 0) + 1;
    return counts;
  }, {});
}

function countByCategory() {
  return state.projects.reduce((counts, project) => {
    counts[project.category] = (counts[project.category] || 0) + 1;
    return counts;
  }, {});
}

function getOpenTaskCount() {
  return state.tasks.filter((task) => !task.done).length;
}

function pluralize(count, singular, plural = `${singular}s`) {
  return Number(count) === 1 ? singular : plural;
}

function loadCollection(key, fallback) {
  const stored = localStorage.getItem(key);
  if (!stored) {
    saveCollection(key, fallback);
    return structuredCloneSafe(fallback);
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : structuredCloneSafe(fallback);
  } catch {
    return structuredCloneSafe(fallback);
  }
}

function saveCollection(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function structuredCloneSafe(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function makeId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function daysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

function clampProgress(value) {
  if (Number.isNaN(value)) return 0;
  return Math.min(100, Math.max(0, Math.round(value)));
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 1800);
}

function renderIcons() {
  document.querySelectorAll("[data-lucide]").forEach((node) => {
    const name = node.dataset.lucide;
    const paths = ICONS[name];
    if (!paths) return;
    node.innerHTML = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
