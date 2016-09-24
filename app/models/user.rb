class User < ActiveRecord::Base
    has_many :ideas
    has_many :follow_ideas
    has_many :follow, through: :follow_ideas, source: "idea"
    
    
end
