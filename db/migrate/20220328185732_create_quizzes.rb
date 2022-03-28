class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.string :question
      t.string :empathy
      t.string :assertiveness
      t.string :creativity
      t.string :ambition
      t.string :optimism

      t.timestamps
    end
  end
end
