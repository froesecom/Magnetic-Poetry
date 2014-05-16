# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :text
#  created_at :datetime
#  updated_at :datetime
#  cat_type   :string(255)
#

class Category < ActiveRecord::Base
  has_many :words

  # def self.find_words
  #   categories = self.all
  #   categories.each do |category|
  #     category.words
  #   end    
  # end
 
  
end
