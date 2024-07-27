function getBelowTheAverage(degerlendirmeler) {
  /* kodlar buraya */
  let total = 0;
  for (let i = 0; i < degerlendirmeler.length; i++) {
    total += degerlendirmeler[i].puan;
  }

  let names = new Array();
  let average = total / degerlendirmeler.length;
  for (let i = 0; i < degerlendirmeler.length; i++) {
    if (average > degerlendirmeler[i].puan) {
      names.push(degerlendirmeler[i].isim);
    }
  }
  return names;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = getBelowTheAverage;
