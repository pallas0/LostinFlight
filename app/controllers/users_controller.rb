class UsersController < ApplicationController

  def index
    user = User.all
    render json: user 
  end 
  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :ok
  end
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  # This is for session staying logged in
  def show
    user = User.find_by!(id: session[:user_id])
    if user 
      render json: user
    else 
      render json: {error: "Not authorized"}, status: :unauthorized
    end 
  end

  private 
  def find_user
    User.find_by!(id: params[:id])
  end
  def user_params
    params.permit(:legend_id, :username, :birthday, :image)
  end
end
