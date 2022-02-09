class Api::RecipesController < ApplicationController

    def index
        render json: Recipe.all, status: 200
    end

    def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe, status: 200
    end

    def create 
        recipe = Recipe.create(recipe_params)
        render json: recipe, status: 200
    end

    # def update
    #     Recipe = Recipe.find(params[:id])
    #     if Recipe.update_attributes(params[:Recipe_params])
    #         render json: Recipe, status: 200
    #     else
    #         render json: { errors: Recipe.errors }, status: 422
    #     end
    # end

    # def destroy
    #     Recipe = Recipe.find(params[:id])
    #     if Recipe
    #         Recipe.destroy
    #         head :no_content, status: :ok
    #     else
    #         render json: { errors: Recipe.errors }, status: 422
    #     end
    # end

    private

    def recipe_params
        params.permit(:name, :image, :ingredients, :recipe, :cuisine, :course)
    end

end
