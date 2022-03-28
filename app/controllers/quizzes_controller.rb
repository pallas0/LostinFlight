class QuizzesController < ApplicationController
    def index
        quizzes = Quiz.all
        render json: quizzes
    end
    def show
        quiz = find_quiz
        render json: quiz, status: :ok
    end

    def create
        new_entry = Quiz.create!(question_params)
        render json: new_entry, status: :created
    end

    def update
        # byebug
        to_update = find_question
        to_update.update(question_params)
        render json: { "DELETED": to_update }, status: :ok
    end

    def destroy
        to_delete = find_question
        to_delete.delete
        render json: to_delete, status: :ok
    end
    private

    def find_quiz
        Quiz.find_by!(id: params[:id])
    end

    def question_params
        params.permit(:question, :empathy, :assertiveness, :creativity, :ambition, :optimism)
    end
end
