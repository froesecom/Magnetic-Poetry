# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :text
#  created_at :datetime
#  updated_at :datetime
#

class Category < ActiveRecord::Base
has_many :words

  # def self.all_except(name1, name2)
  #     binding.pry
  #     where.not(name: name1)
  # end
end
