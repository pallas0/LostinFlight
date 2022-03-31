class User < ApplicationRecord
  belongs_to :legend
  has_many :bird_observations

  validates :username, presence: true, uniqueness: true
end
