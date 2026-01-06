# frozen_string_literal: true

module Jekyll
  module ReadingTimeFilter
    def reading_time(input)
      text = input.to_s.gsub(/<[^>]*>/, " ")
      words = text.split.size
      minutes = (words / 200.0).ceil
      minutes = 1 if minutes < 1
      "#{minutes} min read"
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReadingTimeFilter)
