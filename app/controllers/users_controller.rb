class UsersController < ApplicationController

  def index
    user = User.all
    render json: user 
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
end
