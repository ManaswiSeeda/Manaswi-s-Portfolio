import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  FileDown,
  GitFork,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Network,
  ScanSearch,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import RoleTyper from "./role-typer";

const skillGroups = [
  {
    title: "AI systems",
    icon: BrainCircuit,
    skills: [
      "LLMs",
      "Multi-Agent Systems",
      "RAG",
      "Prompt Engineering",
      "Guardrails",
      "NL-to-SQL",
      "NLP",
    ],
  },
  {
    title: "Machine learning",
    icon: ScanSearch,
    skills: [
      "Computer Vision",
      "Deep Learning",
      "CNNs",
      "YOLOv8",
      "Embeddings",
      "Semantic Search",
      "MMR Retrieval",
    ],
  },
  {
    title: "Engineering",
    icon: Code2,
    skills: [
      "Python",
      "SQL",
      "Java",
      "JavaScript",
      "C / C++",
      "REST APIs",
      "CI/CD",
    ],
  },
  {
    title: "Cloud & data",
    icon: Cloud,
    skills: [
      "Google Cloud Platform",
      "MLOps",
      "ChromaDB",
      "SQLite",
      "TensorFlow",
      "scikit-learn",
      "matplotlib",
    ],
  },
];
const projects = [
  {
    icon: Network,
    label: "Agentic AI",
    title: "Multi-Agent Sales Analytics",
    text: "Specialized agents collaborate on SQL generation, query validation, visualization, and business insight generation—with guardrails before execution.",
    tags: ["Python", "LangChain", "NL-to-SQL", "SQLite"],
  },
  {
    icon: Database,
    label: "Retrieval",
    title: "Production RAG Pipeline",
    text: "End-to-end document ingestion from PDF extraction and chunking to embeddings, ChromaDB retrieval, MMR ranking, and configurable top-k results.",
    tags: ["LangChain", "ChromaDB", "Embeddings", "MMR"],
  },
  {
    icon: Bot,
    label: "Orchestration",
    title: "AI Travel Planner",
    text: "A five-agent system orchestrating flight, hotel, and weather APIs in one request through a form experience and Claude-powered conversation.",
    tags: ["Claude API", "5 Agents", "3 APIs", "Python"],
  },
  {
    icon: Sprout,
    label: "Computer vision",
    title: "Plant Phenotyping AI",
    text: "Analyzed 192,000+ plant images and trained YOLOv8 to detect and count plant tillers with 90% accuracy for agricultural yield research.",
    tags: ["YOLOv8", "CNN", "LabelMe", "192K+ Images"],
  },
];
const experience = [
  {
    mark: "NT",
    logo: null,
    dates: "MAR 2026 — PRESENT",
    role: "AI Engineer",
    company: "Novi Talent Group Inc",
    location: "Coppell, TX",
    summary:
      "Architecting production LLM applications and multi-agent systems on GCP, including MLOps workflows, RAG, NL-to-SQL, visualization, and conversational AI.",
    highlights: [
      "Multi-agent sales analytics",
      "GCP deployment & MLOps",
      "RAG and guardrail design",
    ],
  },
  {
    mark: "AAMU",
    logo: "https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fncaa%2F500%2F2010.png",
    dates: "AUG 2025 — FEB 2026",
    role: "Mobility / Sustainability Systems Analyst",
    company: "Alabama A&M University",
    location: "Normal, AL",
    summary:
      "Built sustainability dashboards and automated mobility reporting, reducing manual reporting time by 30% and informing university operations decisions.",
    highlights: [
      "30% faster reporting",
      "Real-time KPI dashboard",
      "Transit optimization",
    ],
  },
  {
    mark: "AAMU",
    logo: "https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fncaa%2F500%2F2010.png",
    dates: "AUG 2023 — MAY 2025",
    role: "Graduate Assistant",
    company: "Alabama A&M University",
    location: "Normal, AL",
    summary:
      "Applied machine learning and analytics to operational transit data, delivering visualization pipelines, route planning insights, and real-time signage templates.",
    highlights: [
      "ML data workflows",
      "Passio transit analytics",
      "Dynamic data feeds",
    ],
  },
  {
    mark: "USDA",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/usda-1-logo-png-transparent.png",
    dates: "MAY 2024 — JUL 2024",
    role: "AI Research Intern",
    company: "USDA",
    location: "Maryland",
    summary:
      "Developed computer vision models and labeled datasets for plant phenotyping research using image, multispectral, and thermal sensor data.",
    highlights: ["192,000+ images", "90% YOLOv8 accuracy", "Plant stress CNN"],
  },
  {
    mark: "W",
    logo: "https://images.seeklogo.com/logo-png/42/1/wipro-logo-png_seeklogo-427684.png",
    dates: "MAY 2022 — MAY 2023",
    role: "Project Engineer",
    company: "Wipro Ltd",
    location: "Hyderabad, India",
    summary:
      "Supported Citibank financial systems in a high-availability mainframe environment, resolving production incidents within SLA and coordinating global releases.",
    highlights: ["Production support", "SLA delivery", "Global collaboration"],
  },
];

export default function Home() {
  return (
    <>
      <header className="nav-shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Manaswi home">
            <span>MS</span>
            <strong>Manaswi Seeda</strong>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </div>
          <a className="nav-contact" href="mailto:saivinaya24@gmail.com">
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> HELLO, I&apos;M
            </div>
            <h1>
              Sai Vinaya <em>Manaswi Seeda.</em>
            </h1>
            <div className="interest-line"><span>Interested in</span><RoleTyper /></div>
            <p className="hero-lede">
              <strong className="about-label">ABOUT ME</strong>
              Computer Science professional with 4+ years of experience across
              AI/ML engineering, data analytics, cloud deployment, and software
              development—from multi-agent analytics to full-stack products.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowDownRight size={18} />
              </a>
              <a
                className="button secondary"
                href="/Sai_Vinaya_Manaswi_Seeda_Resume.pdf"
                download
              >
                <FileDown size={18} /> Download résumé
              </a>
            </div>
            <div className="social-row">
              <a
                href="https://github.com/ManaswiSeeda"
                target="_blank"
                rel="noreferrer"
              >
                <GitFork size={18} /> GitHub
              </a>
              <a
                href="http://www.linkedin.com/in/manaswi-seeda-0148a3199"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 size={18} /> LinkedIn
              </a>
              <a href="mailto:saivinaya24@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
          <aside className="portrait-panel" aria-label="Portrait of Sai Vinaya Manaswi Seeda">
            <img src="/manaswi-seeda.jpeg" alt="Sai Vinaya Manaswi Seeda" />
          </aside>
        </section>
        <section className="section-wrap metrics-bar" aria-label="Career highlights">
          <div><strong>4+</strong><span>years across AI, data & software</span></div>
          <div><strong>90%</strong><span>YOLOv8 detection accuracy</span></div>
          <div><strong>192K+</strong><span>research images processed</span></div>
          <div><strong>30%</strong><span>reporting time reduced</span></div>
          <p><MapPin size={15} /> United States <span>•</span> GCP / Python / LangChain</p>
        </section>
        <section id="work" className="section-wrap section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED SYSTEMS</p>
              <h2>Built where AI meets real-world data.</h2>
            </div>
            <p>
              Representative work drawn from production engineering, research,
              and operations.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <article className="project-card" key={p.title}>
                  <div className="project-top">
                    <span className="project-number">0{i + 1}</span>
                    <Icon size={25} />
                  </div>
                  <p className="project-label">{p.label}</p>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="dark-band section-block">
          <div className="section-wrap">
            <div className="section-heading inverted">
              <div>
                <p className="eyebrow">TECHNICAL TOOLKIT</p>
                <h2>From model logic to cloud delivery.</h2>
              </div>
              <p>
                A focused stack for building, evaluating, and operating
                intelligent applications.
              </p>
            </div>
            <div className="skill-thumbnails" aria-label="Featured technologies">
              {[
                ["Python", "https://cdn.simpleicons.org/python"],
                ["Google Cloud", "https://cdn.simpleicons.org/googlecloud"],
                ["TensorFlow", "https://cdn.simpleicons.org/tensorflow"],
                ["scikit-learn", "https://cdn.simpleicons.org/scikitlearn"],
                ["JavaScript", "https://cdn.simpleicons.org/javascript"],
                ["SQL", "https://cdn.simpleicons.org/postgresql"],
              ].map(([name, src]) => <div key={name}><img src={src} alt="" /><span>{name}</span></div>)}
            </div>
            <div className="skills-grid">
              {skillGroups.map((g) => {
                const Icon = g.icon;
                return (
                  <article key={g.title}>
                    <div className="skill-title">
                      <Icon size={20} />
                      <h3>{g.title}</h3>
                    </div>
                    <div className="skill-list">
                      {g.skills.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="experience" className="section-wrap section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPERIENCE</p>
              <h2>A track record across industry and research.</h2>
            </div>
            <p>
              Building dependable systems, extracting signal from data, and
              working across technical and domain teams.
            </p>
          </div>
          <div className="timeline">
            {experience.map((e, i) => (
              <article key={e.role + e.company} className="timeline-item">
                <div className="timeline-index">0{i + 1}</div>
                <div className="timeline-date">{e.dates}</div>
                <div className="timeline-main">
                  <div className="company-thumb">{e.logo ? <img src={e.logo} alt={`${e.company} logo`} /> : <span>{e.mark}</span>}</div>
                  <h3>{e.role}</h3>
                  <p className="company">
                    {e.company} <span>· {e.location}</span>
                  </p>
                  <p>{e.summary}</p>
                  <div className="tags">
                    {e.highlights.map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="section-wrap split-section section-block"
        >
          <div className="about-copy">
            <p className="eyebrow">ABOUT</p>
            <h2>Curious by instinct. Rigorous by practice.</h2>
            <p>
              I work across the full applied-AI lifecycle: understanding a messy
              problem, shaping the data, designing the reasoning and retrieval
              path, validating outputs, and making the system deployable.
            </p>
            <p>
              My background spans enterprise financial systems, university
              operations, agricultural AI research, and production LLM
              engineering—giving me a practical view of how technology succeeds
              inside real organizations.
            </p>
            <div className="principles">
              <div>
                <ShieldCheck size={20} />
                <span>
                  <strong>Reliability first</strong>Guardrails, validation,
                  fallbacks.
                </span>
              </div>
              <div>
                <ChartNoAxesCombined size={20} />
                <span>
                  <strong>Outcomes over demos</strong>Useful results, measured
                  impact.
                </span>
              </div>
            </div>
          </div>
          <div className="credentials">
            <article>
              <GraduationCap size={22} />
              <div>
                <span>2025</span>
                <h3>M.S. Computer & Information Sciences</h3>
                <p>Alabama A&M University · Normal, AL</p>
              </div>
            </article>
            <article>
              <GraduationCap size={22} />
              <div>
                <span>2022</span>
                <h3>B.Tech. Computer Science & Engineering</h3>
                <p>JNTUK · India</p>
              </div>
            </article>
            <div className="cert-box">
              <p className="eyebrow">CERTIFICATIONS</p>
              <ul>
                <li>Microsoft Azure Data Fundamentals (DP-900)</li>
                <li>Microsoft Azure Fundamentals (AZ-900)</li>
                <li>Introduction to Generative AI — Google Cloud</li>
                <li>Programming for Everybody (Python) — Coursera</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contact-band">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">LET&apos;S CONNECT</p>
              <h2>Have an AI problem worth solving?</h2>
              <p>
                I&apos;d be glad to hear about the system, team, or challenge
                you&apos;re building.
              </p>
            </div>
            <a
              href="mailto:saivinaya24@gmail.com"
              className="contact-circle"
              aria-label="Email Manaswi"
            >
              <ArrowUpRight size={32} />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <span>© 2026 Sai Vinaya Manaswi Seeda</span>
        <div>
          <a href="mailto:saivinaya24@gmail.com">saivinaya24@gmail.com</a>
          <a href="tel:+12564790846">(256) 479-0846</a>
        </div>
      </footer>
    </>
  );
}
