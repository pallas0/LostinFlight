class CreateLegends < ActiveRecord::Migration[6.1]
  def change
    create_table :legends do |t|
      t.string :name
      t.string :bio
      t.string :trait

      t.timestamps
    end
  end
end
