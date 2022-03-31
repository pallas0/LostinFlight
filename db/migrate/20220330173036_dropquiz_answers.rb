class DropquizAnswers < ActiveRecord::Migration[6.1]
  def change
    drop_table :quiz_answers
  end
end
