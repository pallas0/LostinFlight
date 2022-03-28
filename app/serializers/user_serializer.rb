class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :birthday, :admin
  has_one :legend
end
