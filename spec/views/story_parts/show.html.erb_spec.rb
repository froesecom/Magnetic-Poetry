require 'spec_helper'

describe "story_parts/show" do
  before(:each) do
    @story_part = assign(:story_part, stub_model(StoryPart,
      :x => 1,
      :y => 2
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/2/)
  end
end
