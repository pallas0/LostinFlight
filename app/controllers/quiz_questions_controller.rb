class QuizQuestionsController < ApplicationController

  def index
  quizzes = QuizQuestion.all
  render json: quizzes
  end 
end
