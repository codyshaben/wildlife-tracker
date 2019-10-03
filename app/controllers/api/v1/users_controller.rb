class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all 
        render json: @users, include: :animals
    end

    def show
        @user = User.find(params[:id])

        render json: @user, include: :animals
    end
    
    def create
        @user = User.create(user_params)
        # if @user.save
        #     render json: @user, status: :created, location: api_v1_users_path(@user)
        # else
        #     render json: @user.errors
        # end
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)

        render json: { user_id: @user.id }
    end

    def add_animal
        @user_animal = UserAnimal.create(user_animal_params)

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
        params.permit(:user_id, :animal_id)
    end
end
