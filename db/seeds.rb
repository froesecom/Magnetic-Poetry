Category.destroy_all
Word.destroy_all

default_category = Category.create(:name => "Farts")
w1 = Word.create(:name => 'Pfft')
w2 = Word.create(:name => 'Bap!')


default_category.words << w1 << w2
