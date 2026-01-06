---
layout: default
title: "Sitemap"
permalink: /sitemap/
---

<section class="shell content">
  <h1>Sitemap</h1>
  <p>Quick links to the main sections and recent posts.</p>

  <h2>Sections</h2>
  <ul>
    <li><a href="{{ "/" | relative_url }}">Home</a></li>
    <li><a href="{{ "/about/" | relative_url }}">About</a></li>
    <li><a href="{{ "/archive/" | relative_url }}">Archive</a></li>
    <li><a href="{{ "/tags/" | relative_url }}">Tags</a></li>
    <li><a href="{{ "/search/" | relative_url }}">Search</a></li>
    <li><a href="{{ "/now/" | relative_url }}">Now</a></li>
  </ul>

  <h2>Recent posts</h2>
  <ul class="taxonomy-list">
    {% for post in site.posts limit:10 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-meta"> — {{ post.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
