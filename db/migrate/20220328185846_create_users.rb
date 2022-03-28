class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.belongs_to :legend, null: false, foreign_key: true
      t.date :birthday
      t.boolean :admin

      t.timestamps
    end
  end
end
