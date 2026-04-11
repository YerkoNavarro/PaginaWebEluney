
export function leerDatos() {
    gapi.load('client', async () => {

    await gapi.client.init({
        apiKey: '',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
    });


    const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '',
        range: 'Hoja 1!A:Z',
    });

    console.log("Datos:", response.result.values);
    });
}


export async function leerDatosyRetornar() {
  // 1. esperar que gapi cargue
  await new Promise(resolve => gapi.load('client', resolve));

  // 2. inicializar igual que antes
  await gapi.client.init({
    apiKey: 'AIzaSyCBG6lE7Sd-ywvNs1BSD04wnTwPQtGr2FU',
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
  });

  // 3. pedir los datos
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1XdsYMpG5W-u3o0QqlmTb9ZpgJkl_Gfw5Gr8-Flk4KXY',
    range: 'Hoja 1!A:Z',
  });

  // 4. retornar el array de arrays
  return response.result.values;
}

