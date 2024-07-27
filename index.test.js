const getBelowTheAverage = require('./index.js');
// const getBelowTheAverage = require('./solution.js');

describe('Nesne ve Dizilerle Beraber Çalışma Testleri', () => {
  const degerlendirmeler = [
    {
      isim: 'Nalan',
      puan: 5,
      geribildirim: 'Mükemmel atmosfer ve mükemmel düşünülmüş modeller!',
    },
    {
      isim: 'Kuddusi',
      puan: 3,
      geribildirim:
        'Benim zevkime göre biraz fazla yenilikçi, modeller iyi ama fiyatı yüksek',
    },
    {
      isim: 'Kamuran',
      puan: 4,
      geribildirim: 'Gittiğim bayide mükemmel bir atmosfer ve havalı hisler',
    },
    {
      isim: 'Elif',
      puan: 4.5,
      geribildirim:
        'Evimden pek çıkmıyorum ama kaliteli bir arabam olsun istiyorum. Şiddetle tavsiye ederim.',
    },
    {
      isim: 'Pınar',
      puan: 3,
      geribildirim:
        'Tasarımları çok güzel, ama bu kadar özellik kullanılır mı bilemedim.',
    },
    {
      isim: 'Ahmet',
      puan: 2,
      geribildirim:
        'Arabaların özellikleri beni fazla etkilemedi. Gereksiz pahalı.',
    },
    { isim: 'Latife', puan: 4, geribildirim: 'Takas desteği harika!' },
    { isim: 'Reyna', puan: 3.5, geribildirim: '' },
  ];

  const result = getBelowTheAverage(degerlendirmeler);

  test('Fonksiyonun dönüş değeri array mi?', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('Doğru sayıda sonuç dönüyor mu?', () => {
    expect(result.length).toBe(4);
  });

  test('Doğru değerleri dönüyor mu?', () => {
    expect(result).toEqual(['Kuddusi', 'Pınar', 'Ahmet', 'Reyna']);
  });
});
