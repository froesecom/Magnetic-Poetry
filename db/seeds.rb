Category.destroy_all
Word.destroy_all

flatulence = Category.create(:name => "Flatulence")
w1 = Word.create(:name => 'fart')
w2 = Word.create(:name => 'pfft')

flatulence.words << w1 << w2

joiners = Category.create(:name => "Joiners")
w3 = Word.create(:name => 'the')
w4 = Word.create(:name => 'the')
w5 = Word.create(:name => 'a')
w6 = Word.create(:name => 'a')
w7 = Word.create(:name => 'to')
w8 = Word.create(:name => 'to')
w9 = Word.create(:name => 'if')
w10 = Word.create(:name => 'which')
w14 = Word.create(:name => 'it')

joiners.words << w3 << w4<< w5<< w6<< w7<< w8<< w9 << w10 << w14

common_verbs = Category.create(:name => "Common verbs")

w11 = Word.create(:name => 'are')
w12 = Word.create(:name => 'is')
w13 = Word.create(:name => 'go')
w15 = Word.create(:name => 'get')

common_verbs.words << w11 << w12 << w13 << w15