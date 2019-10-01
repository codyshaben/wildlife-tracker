class CreateUserAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :user_animals do |t|
      t.references :users, foreign_key: true
      t.references :animals, foreign_key: true

      t.timestamps
    end
  end
end
