# frozen_string_literal: true

module Jekyll
  module TocFilter
    def toc_only(input)
      items = []
      input.to_s.each_line do |line|
        match = line.match(/^(#+)\s+(.*)$/)
        next unless match

        level = match[1].length
        next unless level.between?(2, 3)
        title = match[2].strip
        slug = Jekyll::Utils.slugify(title)
        items << { level: level, title: title, slug: slug }
      end

      return "" if items.empty?

      list = items.map do |item|
        "<li class=\"toc-level-#{item[:level]}\"><a href=\"##{item[:slug]}\">#{item[:title]}</a></li>"
      end.join

      "<ul>#{list}</ul>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::TocFilter)
