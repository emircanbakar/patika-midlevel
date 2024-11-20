function getData(data) {
  return new Promise((res, rej) => {
    console.log("veriler alınmaya çalısıyor");
    if (data) {
      res("data alındı");
    } else {
      rej("data alınamadı!");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((res, rej) => {
    console.log("veriler düzenleniyor");
    if (receivedData) {
      res("data düzenlendi");
    } else {
      rej("data düzenlenemedi!");
    }
  });
}

// getData(true)
//   .then((result) => {
//     console.log(result);
//     return cleanData(true);
//   })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

async function processData() {
  try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}

processData();
