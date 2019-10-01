class UsersController < ApplicationController
    def create
        @user = User.create(user_params)

        render json: { user_id: @user.id }
    end

    def update
        @user = User.find(params[:id])



        @user.update(user_params)

        render json: { user_id: @user.id }
    end

    def add_animal
        @user_animal = UserAnimal.new(user_animal_params)

        if @user_animal.save
            render json: @user_animal, status: :created
        else
            render json: @user_animal.errors, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def user_animal_params
        params.require(:user).permit(:user_id, :animal_id)
    end
end
