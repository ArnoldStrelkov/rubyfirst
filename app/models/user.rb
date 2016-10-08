class User < ActiveRecord::Base
    has_many :ideas, dependent: :destroy
    has_many :follow_ideas, dependent: :destroy
    has_many :follow, through: :follow_ideas, source: "idea"
    
    
end
