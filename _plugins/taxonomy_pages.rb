# frozen_string_literal: true

module Jekyll
  class TaxonomyPage < PageWithoutAFile
    def initialize(site, base, dir, title, taxonomy_type, posts)
      super(site, base, dir, "index.html")
      self.data["layout"] = "taxonomy"
      self.data["title"] = title
      self.data["taxonomy_type"] = taxonomy_type
      self.data["posts"] = posts
    end
  end

  class TaxonomyGenerator < Generator
    safe false
    priority :low

    def generate(site)
      generate_taxonomy(site, "tags", site.tags)
      generate_taxonomy(site, "categories", site.categories)
    end

    private

    def generate_taxonomy(site, type, data)
      data.each do |name, posts|
        slug = Utils.slugify(name)
        dir = File.join(type, slug)
        title = "#{name}"
        site.pages << TaxonomyPage.new(site, site.source, dir, title, type, posts)
      end
    end
  end
end
