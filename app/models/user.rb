class User < ApplicationRecord
  belongs_to :legend
  has_many :bird_observations
end
