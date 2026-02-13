import "./src/App.css";

export default function HomePage() {
	return (
		<div className="page">
			<header className="hero">
				<p>Portfolio 2026</p>
				<h1>Building calm, fast, human software.</h1>
				<p>
					I design and ship digital products with strong visual direction, crisp
					UX, and production-ready code.
				</p>
				<div className="hero-actions">
					<a className="button" href="#work">
						View work
					</a>
					<a className="button secondary" href="mailto:hello@example.com">
						Say hello
					</a>
				</div>
			</header>

			<section id="work" className="grid">
				<article className="card">
					<h3>Project Atlas</h3>
					<p>Data storytelling platform for climate analytics and reporting.</p>
				</article>
				<article className="card">
					<h3>Studio One</h3>
					<p>Brand system and site refresh for a creative agency.</p>
				</article>
				<article className="card">
					<h3>Signal Desk</h3>
					<p>Workflow automation dashboard for a product ops team.</p>
				</article>
			</section>

			<section className="grid">
				<article className="card">
					<h3>Services</h3>
					<p>Product strategy, UI design, React build, and design systems.</p>
				</article>
				<article className="card">
					<h3>Focus</h3>
					<p>Design direction, interaction polish, and launch readiness.</p>
				</article>
			</section>

			<footer className="footer">
				<span>Based in your timezone</span>
				<span>Available for select collaborations</span>
			</footer>
		</div>
	);
}
