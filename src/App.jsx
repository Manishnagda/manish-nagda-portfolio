import { useEffect, useState } from 'react'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
  'MongoDB', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel',
]

const projects = [
  {
    number: '01',
    title: 'Job & Internship Portal',
    description: 'A MERN stack platform for students and recruiters with login, job posting, applications, dashboards, search filters, resume upload, and application status tracking.',
    tags: ['MERN Stack', 'Authentication', 'Dashboards'],
    status: 'In Progress',
    statusType: 'active',
  },
  {
    number: '02',
    title: 'Expense & Budget Tracker',
    description: 'A full-stack finance dashboard for income, expenses, budgets, categories, filters, charts, and monthly summaries.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    status: 'Planned / In Progress',
    statusType: 'planned',
  },
  {
    number: '03',
    title: 'Editkaro.in Website',
    description: 'A responsive agency website built during my web development internship, featuring service sections, portfolio categories, a contact form, and a clean interface.',
    tags: ['Responsive UI', 'Frontend', 'Forms'],
    status: 'Completed',
    statusType: 'done',
  },
  {
    number: '04',
    title: 'Plant Disease Detection',
    description: 'A machine learning web app using CNN and Streamlit to classify plant leaf diseases and show prediction confidence.',
    tags: ['Python', 'CNN', 'Streamlit'],
    status: 'Completed',
    statusType: 'done',
  },
  {
    number: '05',
    title: 'Resume Builder',
    description: 'A web-based resume builder with form input, live preview, a clean layout, and print or download support.',
    tags: ['JavaScript', 'Live Preview', 'Print CSS'],
    status: 'Completed',
    statusType: 'done',
  },
]

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Contact']

function ExternalLink({ href = '#', children, className = '' }) {
  const unavailable = href === '#'
  return (
    <a
      className={className}
      href={href}
      target={unavailable ? undefined : '_blank'}
      rel={unavailable ? undefined : 'noreferrer'}
      aria-disabled={unavailable}
      onClick={unavailable ? (event) => event.preventDefault() : undefined}
      title={unavailable ? 'Link will be added soon' : undefined}
    >
      {children}
    </a>
  )
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Manish Nagda home">MN<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span></span><span></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow"><span></span> Available for internships & opportunities</p>
            <h1>I build useful things<br />for the <em>web.</em></h1>
            <p className="hero-intro">Hi, I’m <strong>Manish Nagda</strong> — a full stack web developer and B.Tech CSE student who enjoys turning ideas into clean, practical digital products.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <span>↗</span></a>
              <a className="button secondary" href="mailto:manishnagdaji123@gmail.com">Let’s talk</a>
            </div>
            <div className="quick-links">
              <span>Neemuch, Madhya Pradesh</span>
              <ExternalLink href="https://github.com/Manishnagda">GitHub ↗</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/manish-nagda-76a795375/">LinkedIn ↗</ExternalLink>
            </div>
          </div>
          <div className="hero-panel reveal is-visible" aria-label="Developer profile summary">
            <div className="code-window">
              <div className="window-bar"><i></i><i></i><i></i><span>manish.js</span></div>
              <pre><code><b>const</b> developer = {'{'}{`\n`}  name: <q>Manish Nagda</q>,{`\n`}  role: <q>Full Stack Developer</q>,{`\n`}  stack: [<q>React</q>, <q>Node</q>, <q>MongoDB</q>],{`\n`}  mindset: <q>Learn. Build. Improve.</q>{`\n`}{'}'}</code></pre>
            </div>
            <div className="floating-note"><span>5</span> projects built<br />& growing</div>
          </div>
        </section>

        <section className="section about reveal" id="about">
          <div className="section-heading"><span>01</span><h2>About me</h2></div>
          <div className="about-grid">
            <p className="lead">I’m a developer who likes solving real problems with thoughtful, straightforward code.</p>
            <div className="about-copy">
              <p>I’m currently pursuing my B.Tech in Computer Science at Mandsaur Institute of Technology / Mandsaur University. Alongside college, I build full-stack applications and keep sharpening my skills through hands-on projects.</p>
              <p>I care about responsive interfaces, clear user experiences, and writing code that is easy to understand and improve. Right now, I’m focused on the MERN stack and looking for opportunities where I can learn, contribute, and grow with a team.</p>
              <div className="education-card">
                <span className="education-icon">⌁</span>
                <div><small>EDUCATION</small><strong>B.Tech — Computer Science & Engineering</strong><p>Mandsaur University · 2023–2027</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="skills">
          <div className="section-heading"><span>02</span><h2>Skills & tools</h2><p>The technologies I use to take ideas from concept to a working product.</p></div>
          <div className="skills-grid">
            {skills.map((skill, index) => <div className="skill-pill" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}
          </div>
        </section>

        <section className="section reveal" id="projects">
          <div className="section-heading"><span>03</span><h2>Selected projects</h2><p>A mix of completed work and products I’m actively building.</p></div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className={`status ${project.statusType}`}>{project.status}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <ExternalLink href="#">Live Demo <span>↗</span></ExternalLink>
                  <ExternalLink href="#">GitHub <span>↗</span></ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="experience">
          <div className="section-heading"><span>04</span><h2>Experience</h2></div>
          <article className="experience-card">
            <div className="experience-meta"><span>INTERNSHIP</span><p>VaultofCodes</p></div>
            <div className="experience-content"><h3>Web Development Intern</h3><p>Worked on frontend and web development tasks, built responsive pages, improved UI sections, handled forms, and completed the Editkaro.in website project. The experience strengthened my ability to turn a brief into a clean, working interface.</p><div className="tag-list"><span>Frontend Development</span><span>Responsive Design</span><span>Team Workflow</span></div></div>
          </article>
        </section>

        <section className="section reveal" id="certificates">
          <div className="section-heading"><span>05</span><h2>Certificates</h2><p>I only list credentials once they’re verified and ready to share.</p></div>
          <div className="certificate-card">
            <div className="certificate-mark">✓</div>
            <div><small>CREDENTIALS</small><h3>Certificate details coming soon</h3><p>I’m organizing my verified certificates for this section. Copies can be shared directly when requested.</p></div>
            <a href="mailto:manishnagdaji123@gmail.com?subject=Certificate%20request">Request details ↗</a>
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <p className="eyebrow"><span></span> GET IN TOUCH</p>
          <h2>Have an opportunity<br />or idea in mind?</h2>
          <p>I’m open to internships, entry-level opportunities, and interesting collaborations. If you think I could be a good fit, I’d be happy to hear from you.</p>
          <a className="email-link" href="mailto:manishnagdaji123@gmail.com">manishnagdaji123@gmail.com <span>↗</span></a>
          <div className="contact-grid">
            <a href="tel:+916261419793"><small>PHONE</small><strong>+91 62614 19793</strong></a>
            <ExternalLink href="https://github.com/Manishnagda" className="contact-card"><small>GITHUB</small><strong>@Manishnagda ↗</strong></ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/manish-nagda-76a795375/" className="contact-card"><small>LINKEDIN</small><strong>Manish Nagda ↗</strong></ExternalLink>
          </div>
        </section>
      </main>

      <footer><a className="brand" href="#home">MN<span>.</span></a><p>Designed & built by Manish Nagda</p><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

export default App
