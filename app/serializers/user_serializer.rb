class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :birthday, :admin
  has_one :legend

  has_many :bird_observations
end
