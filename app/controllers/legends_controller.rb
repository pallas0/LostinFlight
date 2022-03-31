class LegendsController < ApplicationController
  def index
legends = Legend.all
render json: legends
  end 
end
