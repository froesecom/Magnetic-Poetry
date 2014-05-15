class RenameDatabaseColumn < ActiveRecord::Migration
  def self.up
  rename_column :categories, :type, :cat_type
  end

  def self.down
  rename_column :categories, :cat_type, :type
  end
end

