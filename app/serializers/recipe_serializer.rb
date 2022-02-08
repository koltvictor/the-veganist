class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :ingredients, :recipe, :cuisine, :course
end
