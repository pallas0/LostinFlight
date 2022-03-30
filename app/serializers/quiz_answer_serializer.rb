class QuizAnswerSerializer < ActiveModel::Serializer
  attributes :id, :answerText, :trait
  belongs_to :quiz_question
end
