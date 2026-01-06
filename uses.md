---
layout: default
title: "Uses"
permalink: /uses/
---

<section class="shell content">
  <h1>Uses</h1>
  <p>Tools and defaults that keep me focused. This is a living list.</p>

  {% for group in site.data.uses %}
    <h2>{{ group.category }}</h2>
    <ul>
      {% for item in group.items %}
        <li><strong>{{ item.name }}</strong> — {{ item.note }}</li>
      {% endfor %}
    </ul>
  {% endfor %}

  <h2>Library</h2>
  <p class="post-meta">Extended notes are collected below.</p>
  <ul class="taxonomy-list">
    {% for doc in site.uses %}
      <li>
        <a href="{{ doc.url | relative_url }}">{{ doc.title }}</a>
        <span class="post-meta"> — {{ doc.category }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
