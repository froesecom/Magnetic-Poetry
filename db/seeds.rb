Category.destroy_all
Word.destroy_all

word_list = {
  "Conjunctions & more-Basics" => %w(not the the a a to to if which what when why & & can good bad no yes from),
  "Pronouns-Basics" => %w(I me you we us them she he her his hers him they nobody nothing this that it that its anybody anyone something one our who those my thier theirs these those),
  "Generic Verbs-Basics" => %w(be are is go get do ask run fly drink kiss think ),
  "Punctuation & Bits-Basics" => %w(? ? ! ! . . : : " " " " - - = = + + , , ' ' s s),
  "Feelings-Themes" => %w(happy sad angry mad tired pumped bored apathetic loved lonely dejected),
  "Australiana-Themes" => %w(totes wobbly ute turps truckie shithouse plonk outback yabby walkabout hoon strewth boomerang footy shonky fairgo ropeable root drongo ratbag roo shocking ripper prezzy porky parma Ford Holden bush onya bloody grog gday mate dunny dero beaut Sheila Blundstones fair-dinkum brickie barbie stubby bogan),
  "Random-Themes" => %w(fart cow turkey),
  "Swears-Themes" => %w(fucked fuck shit),
  "Alcohol-Themes" => %w(beer vodka wine Grange Champagne )
}

word_list.each do |category, words|
  category_type_a = category.split("-")
  category_object = Category.create( :name => category_type_a[0], :cat_type => category_type_a[1] )
  
  words.each do |word|
    word_name = Word.create(:name => word)
    category_object.words << word_name
  end
end

