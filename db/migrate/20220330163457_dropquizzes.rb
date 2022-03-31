class Dropquizzes < ActiveRecord::Migration[6.1]
  def change
    drop_table :quizzes
  end
end
