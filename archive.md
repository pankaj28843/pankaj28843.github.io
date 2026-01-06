---
layout: default
title: "Archive"
permalink: /archive/
---

<section class="shell content">
  <h1>Archive</h1>
  <p>Browse by year and month.</p>

  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
    <h2>{{ year.name }}</h2>
    {% assign posts_by_month = year.items | group_by_exp: "post", "post.date | date: '%Y-%m'" %}
    {% for month in posts_by_month %}
      {% assign first_post = month.items | first %}
      <h3>{{ first_post.date | date: "%B" }}</h3>
      <ul>
        {% for post in month.items %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-meta"> — {{ post.date | date: "%B %d, %Y" }}</span>
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  {% endfor %}
</section>
