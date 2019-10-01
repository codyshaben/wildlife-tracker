class UserAnimal < ApplicationRecord
  belongs_to :users
  belongs_to :animals
end
