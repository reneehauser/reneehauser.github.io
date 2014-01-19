# Borrowed from https://github.com/jeffreylouden/jekyll-handleize

module Jekyll
  module CssClassifyFilter

    def css_classify(content)
      content.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    end

  end
end

Liquid::Template.register_filter(Jekyll::CssClassifyFilter)
