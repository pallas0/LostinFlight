class CreateQuizUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :quiz_users do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :quiz, null: false, foreign_key: true
      t.integer :response

      t.timestamps
    end
  end
end
