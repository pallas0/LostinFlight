class DropquizUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :quiz_users
  end
end
