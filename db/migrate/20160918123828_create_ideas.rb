class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.integer :user_id
      t.text :body
      t.string :header
      t.string :foto
      t.string :video

      
    end
  end
end
