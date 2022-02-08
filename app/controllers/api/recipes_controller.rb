class Api::RecipesController < ApplicationController

    def index
        render json: Recipe.all, status: 200
    end

    # def show
    #     @Recipe = Recipe.find(params[:id])
    #     render json: @Recipe, status: 200
    # end

    # def create 
    #     Recipe = Recipe.new(Recipe_params)
    #     if Recipe.save
    #         render json: Recipe, status: 201
    #     else
    #         render json: { errors: Recipe.errors }, status: 422
    #     end

    # end

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

    # private

    # def Recipe_params
    #     params.permit(:id, :name, :image, :ingredients, :recipe, :cuisine, :course)
    # end

end
