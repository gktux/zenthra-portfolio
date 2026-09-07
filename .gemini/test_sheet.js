const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxww9AQplejwu3YxZn6U62cBjPJ8FAkFQaNwR4g2Zg8CuCrZPqlLz1hth71A0QLjzQrNQ/exec";

async function testGoogleSheetWebhook() {
  const testData = {
    fullName: "Zenthra Test Kullanıcısı",
    businessType: "Üretim / Fabrika",
    phone: "0531 580 07 53",
    email: "test@zenthrabilisim.com",
    timestamp: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })
  };

  console.log("Test verisi gönderiliyor:", testData);

  try {
    const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(testData)
    });

    const text = await res.text();
    console.log("Yanıt alındı:", text);
  } catch (err) {
    console.error("Test hatası:", err);
  }
}

testGoogleSheetWebhook();
