const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const fetchT10n = async () => {
    const spreadsheetId = '151Vgo3i43e6cGrP2TAYsvk4SyS0522IFnvLZ5kGMrlY';

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    const { data: { sheets: sheetList } } = await sheets.spreadsheets.get({ spreadsheetId });

    const languages = sheetList.map(sheet => sheet.properties.title);

    for (const language of languages) {
        const range = `${language}!A4:B999`;

        const { data: { values } } = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range
        });

        const translation = values.reduce((acc, value) => {
            if (value[0] && value[1]) {
                const key = !/[^a-zA-Z0-9]/.test(value[0]) ? value[0] : `'${value[0]}'`;
                acc.push(`  ${key}: \`${value[1]}\``)
            }

            return acc;
        }, []).join(',\n');

        const content = `export default {\n${translation},\n}\n`;

        fs.writeFile(path.join(__dirname, `../../texts/${language.toLowerCase()}.ts`), content, err => {
            if (err) {
                console.error(`The ${language.toLowerCase()}.ts file wasn't save. Error: ${err}`);
            } else {
                console.log(`The ${language.toLowerCase()}.ts file was saved!`);
            }
        });
    }
};

fetchT10n().catch(err => console.error(err));
