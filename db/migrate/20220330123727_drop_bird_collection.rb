class DropBirdCollection < ActiveRecord::Migration[6.1]
  def change
    drop_table :user_bird_collections
  end
end
