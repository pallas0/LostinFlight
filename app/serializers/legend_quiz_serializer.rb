class LegendQuizSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer1, :answer2, :answer3, :answer4, :answer5
end
