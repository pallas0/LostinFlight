class QuizUserSerializer < ActiveModel::Serializer
  attributes :id, :response
  has_one :user
  has_one :quiz
end
