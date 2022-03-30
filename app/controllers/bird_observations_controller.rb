class BirdObservationsController < ApplicationController
    def collection_index
        # byebug
        user = find_user
        render json: user.bird_observations
    end

    private

    def find_user
        User.find_by!(id: params[:id])
    end
end
