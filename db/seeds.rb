Category.destroy_all
Word.destroy_all

word_list = {
  "Adjectives-Basics" => %w(repulsive mighty gorgeous tasty dusty elated embarrassed scary agreeable anxious rotten swift thoughtful nervous shaggy sharp hilarious nice tricky),
  "Adverbs-Basics" => %w(aggressively creatively dependably honestly originally naturally passionately regularily truthfully professionally utterly joyfully),
  "Alcohol-Themes" => %w(beer bourbon shot drunk intoxicated vodka wine Grange Champagne alcoholic drink),
  "Australiana-Themes" => %w(totes wobbly ute turps truckie shithouse plonk outback yabby walkabout hoon strewth boomerang footy shonky fairgo ropeable root drongo ratbag roo shocking ripper prezzy porky parma Ford Holden bush onya bloody grog gday mate dunny dero beaut Sheila Blundstones fair-dinkum brickie barbie stubby bogan),
  "Conjunctions & more-Basics" => %w(not the the the a a a a to to to if if which what when why & & can good bad no yes from),
  "Feelings-Themes" => %w(happy sad angry mad tired pumped bored apathetic loved lonely dejected),
  "Verbs-Basics" => %w(be see say get make go know take see come think look want give use find tell ask work seem feel try leave call have do are is go get do ask run kiss think ),
  "Pronouns-Basics" => %w(I I I me me you you we we us us them them she he her his hers him they nobody nothing this that it that its anybody anyone something one our who those my their theirs these those),
  "Punctuation & Bits-Basics" => %w(? ? ! ! . . : : " " " " - - = = + + , , ' ' ' ' t t s s),
  "Random-Themes" => %w(fart cow turkey ride butterfly light knackers shizzle),
  "Swears-Themes" => %w(bumcheese nimrod fucked jerk fuck shit shitty bastard asshole dickhead dipshit)
}

word_list.each do |key, value|
  value.sort_by!{|w| w.downcase}
end

word_list.each do |category, words|
  category_type_a = category.split("-")
  category_object = Category.create( :name => category_type_a[0], :cat_type => category_type_a[1] )
  
  words.each do |word|
    word_name = Word.create(:name => word)
    category_object.words << word_name
  end
end

