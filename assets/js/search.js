const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

if (input && results) {
  const state = { index: [] };

  const render = (items) => {
    if (!items.length) {
      results.innerHTML = "<p class=\"post-meta\">No matches yet. Try a different query.</p>";
      return;
    }

    results.innerHTML = items
      .map((item) => {
        const tags = (item.tags || []).map((tag) => `<span class=\"pill\">${tag}</span>`).join(" ");
        const categories = (item.categories || []).map((cat) => `<span class=\"pill outline\">${cat}</span>`).join(" ");
        return `
          <article class=\"search-card\">
            <a href=\"${item.url}\"><h3>${item.title}</h3></a>
            <p class=\"post-meta\">${item.date}</p>
            <p>${item.excerpt}</p>
            <div class=\"pill-row\">${categories} ${tags}</div>
          </article>
        `;
      })
      .join("\n");
  };

  const scoreItem = (item, terms) => {
    const haystack = {
      title: (item.title || "").toLowerCase(),
      excerpt: (item.excerpt || "").toLowerCase(),
      tags: (item.tags || []).join(" ").toLowerCase(),
      categories: (item.categories || []).join(" ").toLowerCase(),
    };

    return terms.reduce((score, term) => {
      if (!term) return score;
      if (haystack.title.includes(term)) score += 3;
      if (haystack.tags.includes(term)) score += 2;
      if (haystack.categories.includes(term)) score += 2;
      if (haystack.excerpt.includes(term)) score += 1;
      return score;
    }, 0);
  };

  const search = () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      results.innerHTML = "<p class=\"post-meta\">Start typing to search the archive.</p>";
      return;
    }

    const terms = query.split(/\s+/).filter(Boolean);
    const matches = state.index
      .map((item) => ({ ...item, score: scoreItem(item, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    render(matches);
  };

  fetch(`${window.location.origin}/search.json`)
    .then((response) => response.json())
    .then((data) => {
      state.index = data || [];
      results.innerHTML = "<p class=\"post-meta\">Start typing to search the archive.</p>";
    })
    .catch(() => {
      results.innerHTML = "<p class=\"post-meta\">Search index failed to load.</p>";
    });

  input.addEventListener("input", search);
}
