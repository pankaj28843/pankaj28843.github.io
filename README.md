# Pankaj's Field Notes

A personal Jekyll site for essays, notes, and project write-ups.

- Live site: https://pankaj28843.github.io
- Stack: Jekyll 4, GitHub Pages (Actions-based build)

## Development

Requirements: Ruby 3.2, Bundler 4.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Build-only check:

```bash
bundle exec jekyll build
```

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages on every push to `main`.
This workflow uses a full Jekyll gemset, which allows any plugins listed in the Gemfile and `_config.yml`.

## Security & Maintenance

- Actions are pinned to full commit SHAs and use least-privilege permissions.
- Dependabot is configured for Bundler and GitHub Actions updates.
- See `SECURITY.md` for vulnerability reporting.

## Project Structure

- `_posts/` blog posts
- `_projects/` project notes
- `_uses/` uses pages
- `_includes/` shared partials
- `_layouts/` layout templates
- `assets/` CSS/JS/images
