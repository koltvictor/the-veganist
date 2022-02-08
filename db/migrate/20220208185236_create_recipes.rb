class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image
      t.string :ingredients
      t.string :recipe
      t.string :cuisine
      t.string :course

      t.timestamps
    end
  end
end
