class CreateStoryParts < ActiveRecord::Migration
  def change
    create_table :story_parts do |t|
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
