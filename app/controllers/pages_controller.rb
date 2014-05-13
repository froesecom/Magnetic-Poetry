class PagesController < ApplicationController

  def index
    # @word = Wordnik.word.get_examples('slovenly')
    @words = Wordnik.word_list
    @methods = Wordnik.public_methods(false)
  end

end