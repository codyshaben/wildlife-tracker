class AnimalsController < ApplicationController
    
    def index 
        @animals = Animal.all
        render json: @animals, include: :users
    end

  
end
