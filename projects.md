---
layout: default
title: "Projects"
permalink: /projects/
---

<section class="shell content">
  <h1>Projects</h1>
  <p>A few ongoing themes and experiments. I will link the public ones as they ship.</p>
  <div class="post-grid">
    {% for entry in site.data.projects %}
      {% assign project = site.projects | where: "slug", entry.slug | first %}
      {% if project %}
        <a class="post-card" href="{{ project.url | relative_url }}">
          <span class="tag">{{ project.status }}</span>
          <h3>{{ project.title }}</h3>
          <p class="post-meta">{{ entry.highlight }}</p>
          <p>{{ project.description }}</p>
        </a>
      {% endif %}
    {% endfor %}
  </div>
</section>
