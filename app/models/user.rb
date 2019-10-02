class User < ApplicationRecord
    has_secure_password
    has_many :user_animals
    has_many :animals, through: :user_animals
end
