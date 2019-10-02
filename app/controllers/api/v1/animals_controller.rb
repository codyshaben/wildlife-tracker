class Api::V1::AnimalsController < ApplicationController
    
    def index 
        @animals = Animal.all
        render json: @animals
    end

  
end
