class CreateBirdObservations < ActiveRecord::Migration[6.1]
  def change
    create_table :bird_observations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :region
      t.string :species
      t.string :image
      t.date :date

      t.timestamps
    end
  end
end
