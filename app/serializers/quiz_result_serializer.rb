class QuizResultSerializer < ActiveModel::Serializer
  attributes :id, :result
  has_one :user
end
