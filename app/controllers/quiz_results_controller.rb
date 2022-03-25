class QuizResultsController < ApplicationController

  def index
results = QuizResult.all
render json: results 
  end 
end
