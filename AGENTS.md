# Repository Guidelines

## Project Structure & Module Organization
This is a Jekyll-based blog.
- `_config.yml` holds site metadata, plugins, and permalink settings.
- `_layouts/` defines the base templates (e.g., `default.html`, `post.html`).
- `_includes/` stores shared pieces like `header.html` and `footer.html`.
- `_posts/` contains blog posts named `YYYY-MM-DD-title.md`.
- `_projects/` and `_uses/` are collections for long-form project and uses notes.
- `assets/css/` contains stylesheets (start with `assets/css/main.css`).
- `assets/js/` contains lightweight UI scripts (navigation and search).
- `_data/navigation.yml` defines the top navigation.
- Footer links live in `_includes/footer.html` for secondary pages (Projects/Uses/Colophon).
- `.github/workflows/pages.yml` builds and deploys to GitHub Pages.

## Build, Test, and Development Commands
Use Bundler to run Jekyll locally.
- `bundle install` — install Ruby gems.
- `bundle exec jekyll serve` — run the site locally at `http://127.0.0.1:4000`.
- `bundle exec jekyll build` — build the static site into `_site/`.
Use `bundle exec jekyll serve --livereload` for rapid UI iteration.

## Coding Style & Naming Conventions
Indent with 2 spaces in YAML and HTML. Use lowercase with hyphens for filenames (example: `_posts/2026-01-06-welcome.md`). Keep CSS in `assets/css/main.css` and prefer descriptive class names tied to layout sections.

## Testing Guidelines
There is no automated test suite. Use `bundle exec jekyll build` to validate the site renders without errors. For visual checks, compare `index.html` and recent posts in the browser.
When changing layout or navigation, capture fresh mobile/tablet/desktop screenshots and include the nav drawer state.
For tight mobile layout debugging, run `bundle exec jekyll serve` and use the Playwright MCP server to open `http://127.0.0.1:4000` at small portrait viewports (e.g., 320x568), then take full-page and footer screenshots to verify `scrollWidth` equals `clientWidth`.
For theme and accessibility work, use this proven workflow: 1) run `bundle exec jekyll serve --detach`, 2) use Playwright MCP to capture light/dark screenshots across home/post/projects/uses at desktop and 320x568 mobile, 3) run Playwright DOM heuristics for missing `alt`, unlabeled buttons/links/inputs, 4) run Lighthouse locally and against GitHub Pages with `npx -y lighthouse <url> --output=json --output-path=/tmp/lh-<name>.json --form-factor=mobile --chrome-path=/usr/bin/google-chrome --chrome-flags="--headless=new --no-sandbox"` and `--preset=desktop`, 5) fix common issues (heading order by promoting card titles to `h2`, contrast by adjusting text color on accent buttons), 6) re-run Lighthouse on affected pages, 7) stop the dev server with `kill <pid>`.

Planned maintenance: enable Dependabot for Ruby gems and create labels such as `dependencies`, `security`, and `build` to keep updates organized.

## Commit & Pull Request Guidelines
Use Conventional Commits (`feat:`, `fix:`, `docs:`). Pull requests should include:
- A short summary of the change.
- Confirmation of `bundle exec jekyll build`.
- Screenshots for layout or styling updates.

## Security & Configuration Tips
Do not commit secrets. If local config is needed, add it to `.gitignore` and document the expected keys in `README.md`.

## Agent-Specific Instructions
When you add plugins or workflows, update `_config.yml` and this file to keep commands and structure accurate.
