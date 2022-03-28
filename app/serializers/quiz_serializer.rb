class QuizSerializer < ActiveModel::Serializer
  attributes :id, :question, :empathy, :assertiveness, :creativity, :ambition, :optimism
end
