# == Schema Information
#
# Table name: story_parts
#
#  id         :integer          not null, primary key
#  x          :integer
#  y          :integer
#  created_at :datetime
#  updated_at :datetime
#

class StoryPart < ActiveRecord::Base
end
