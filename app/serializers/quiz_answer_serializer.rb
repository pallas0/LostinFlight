class QuizAnswerSerializer < ActiveModel::Serializer
  attributes :id, :answerText, :attribute
  has_one :quiz_question
end
