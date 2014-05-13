require 'spec_helper'

describe "story_parts/new" do
  before(:each) do
    assign(:story_part, stub_model(StoryPart,
      :x => 1,
      :y => 1
    ).as_new_record)
  end

  it "renders new story_part form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", story_parts_path, "post" do
      assert_select "input#story_part_x[name=?]", "story_part[x]"
      assert_select "input#story_part_y[name=?]", "story_part[y]"
    end
  end
end
