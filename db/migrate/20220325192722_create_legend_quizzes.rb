class CreateLegendQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :legend_quizzes do |t|
      t.string :question
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.string :answer4
      t.string :answer5

      t.timestamps
    end
  end
end
