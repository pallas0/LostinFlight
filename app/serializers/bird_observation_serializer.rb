class BirdObservationSerializer < ActiveModel::Serializer
  attributes :id, :region, :species, :image, :date
  # has_one :user
end
