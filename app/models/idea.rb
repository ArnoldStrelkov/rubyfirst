class Idea < ActiveRecord::Base
    belongs_to :user
    has_many :follow_ideas, dependent: :destroy
    has_many :followed, through: :follow_ideas, source: "user"
    has_many :users, through: :follow_ideas
end
