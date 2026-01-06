---
layout: default
title: "Archive"
permalink: /archive/
---

<section class="shell content">
  <h1>Archive</h1>
  <p>All posts, newest first.</p>
  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-meta"> — {{ post.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
