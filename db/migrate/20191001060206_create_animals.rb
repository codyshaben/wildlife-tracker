class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :common_name
      t.string :scientific_name
      t.string :category
      t.text :description
      t.text :approachable
      t.string :status
      t.string :image

      t.timestamps
    end
  end
end
