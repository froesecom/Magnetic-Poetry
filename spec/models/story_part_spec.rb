# == Schema Information
#
# Table name: story_parts
#
#  id         :integer          not null, primary key
#  x          :integer
#  y          :integer
#  created_at :datetime
#  updated_at :datetime
#  story_id   :integer
#  word_id    :integer
#

require 'spec_helper'

describe StoryPart do
  pending "add some examples to (or delete) #{__FILE__}"
end
