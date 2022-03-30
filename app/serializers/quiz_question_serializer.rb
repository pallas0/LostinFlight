class QuizQuestionSerializer < ActiveModel::Serializer
  attributes :id, :questionText
  has_many :quiz_answers
end
