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

    private

    def user_params
        params.permit(:username, :password)
    end
end
