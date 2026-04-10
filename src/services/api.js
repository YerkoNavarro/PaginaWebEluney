
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


