class MainController < ApplicationController
  def index
    @ideas = Idea.all.order(id: :desc)
    
  end
end
