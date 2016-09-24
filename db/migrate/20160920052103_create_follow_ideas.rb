class CreateFollowIdeas < ActiveRecord::Migration
  def change
    create_table :follow_ideas do |t|
      t.integer :user_id
      t.integer :idea_id

     
    end
  end
end
