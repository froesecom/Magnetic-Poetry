json.array!(@story_parts) do |story_part|
  json.extract! story_part, :id, :x, :y
  json.url story_part_url(story_part, format: :json)
end
